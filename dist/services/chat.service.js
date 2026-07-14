"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatService = exports.ChatService = void 0;
const database_1 = require("../config/database");
const constants_1 = require("../config/constants");
const exception_factory_1 = require("../exceptions/exception.factory");
const http_exception_1 = require("../exceptions/http.exception");
const id_1 = require("../utils/id");
const openai_mapper_1 = require("../utils/openai-mapper");
const stream_1 = require("../utils/stream");
const logger_1 = require("../utils/logger");
const audit_service_1 = require("./audit.service");
const document_service_1 = require("./document.service");
const encryption_service_1 = require("./encryption.service");
const grok_cli_service_1 = require("./grok-cli.service");
const policy_service_1 = require("./policy.service");
const settings_service_1 = require("./settings.service");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toBytes(buf) {
    return Buffer.from(buf);
}
function policyToRunOpts(policy, base) {
    return {
        prompt: base.prompt,
        model: base.model,
        cwd: policy.cwd,
        stream: base.stream,
        sessionId: base.sessionId,
        timeoutMs: policy.timeoutMs,
        alwaysApprove: policy.alwaysApprove,
        maxTurns: policy.maxTurns,
        toolsAllowlist: policy.toolsAllowlist,
        toolsDenylist: policy.toolsDenylist,
    };
}
class ChatService {
    async createCompletion(dto, ctx, res) {
        const settings = await settings_service_1.settingsService.getAll();
        const model = dto.model || settings.defaultModel;
        const stream = Boolean(dto.stream);
        const includeReasoning = dto.include_reasoning !== false;
        const policy = await policy_service_1.policyService.resolve(ctx.apiKey, dto.cwd);
        const documentIds = dto.document_ids ?? [];
        let docContext = '';
        if (documentIds.length > 0) {
            docContext = await document_service_1.documentService.buildContextFromDocuments(ctx.apiKey.id, documentIds, constants_1.MAX_DOCUMENT_CONTEXT_CHARS);
        }
        const normalizedMessages = dto.messages.map((m) => ({
            role: m.role,
            content: typeof m.content === 'string' ? m.content : String(m.content ?? ''),
        }));
        if (docContext) {
            normalizedMessages.unshift({
                role: 'system',
                content: `The user has attached the following documents for context:\n\n${docContext}`,
            });
        }
        const prompt = (0, openai_mapper_1.messagesToPrompt)(normalizedMessages);
        if (prompt.length > constants_1.MAX_TOTAL_PROMPT_CHARS) {
            throw exception_factory_1.ExceptionFactory.validation(`Total prompt exceeds ${constants_1.MAX_TOTAL_PROMPT_CHARS} characters`);
        }
        if (!grok_cli_service_1.grokCliService.tryAcquire()) {
            throw exception_factory_1.ExceptionFactory.concurrencyLimit();
        }
        const chatRequestDbId = (0, id_1.createId)();
        const completionId = (0, id_1.createChatCompletionId)();
        const promptEnc = encryption_service_1.encryptionService.encrypt(prompt);
        const started = Date.now();
        await database_1.prisma.chatRequest.create({
            data: {
                id: chatRequestDbId,
                requestId: ctx.requestId,
                apiKeyId: ctx.apiKey.id,
                model,
                stream,
                status: constants_1.CHAT_STATUS.PENDING,
                promptCiphertext: toBytes(promptEnc.ciphertext),
                promptIv: toBytes(promptEnc.iv),
                promptTag: toBytes(promptEnc.tag),
                ip: ctx.ip,
                userAgent: ctx.userAgent,
                policyMode: policy.mode,
                documents: {
                    create: documentIds.map((documentId) => ({ documentId })),
                },
            },
        });
        try {
            if (stream) {
                if (!res) {
                    throw exception_factory_1.ExceptionFactory.internal('Streaming requires Response');
                }
                await this.runStream({
                    dto,
                    ctx,
                    res,
                    model,
                    policy,
                    prompt,
                    completionId,
                    chatRequestDbId,
                    started,
                    includeReasoning,
                });
                return;
            }
            const collected = await this.collectFromGrokStream(policyToRunOpts(policy, {
                prompt,
                model,
                stream: true,
                sessionId: dto.session_id,
            }));
            const auditPayload = this.buildAuditPayload(collected, includeReasoning);
            const responseEnc = encryption_service_1.encryptionService.encrypt(auditPayload);
            const durationMs = Date.now() - started;
            await database_1.prisma.chatRequest.update({
                where: { id: chatRequestDbId },
                data: {
                    status: constants_1.CHAT_STATUS.SUCCESS,
                    durationMs,
                    grokSessionId: collected.sessionId ?? null,
                    responseCiphertext: toBytes(responseEnc.ciphertext),
                    responseIv: toBytes(responseEnc.iv),
                    responseTag: toBytes(responseEnc.tag),
                },
            });
            await audit_service_1.auditService.log({
                apiKeyId: ctx.apiKey.id,
                action: constants_1.AUDIT_ACTIONS.CHAT_CREATE,
                resource: 'chat_request',
                resourceId: chatRequestDbId,
                meta: {
                    requestId: ctx.requestId,
                    model,
                    stream: false,
                    durationMs,
                    documentCount: documentIds.length,
                    includeReasoning,
                    hasReasoning: collected.reasoning.length > 0,
                    policyMode: policy.mode,
                },
                ip: ctx.ip,
            });
            return (0, openai_mapper_1.mapGrokToChatCompletion)(model, {
                text: collected.text,
                stopReason: collected.stopReason,
                sessionId: collected.sessionId,
                requestId: collected.requestId,
            }, {
                completionId,
                reasoningContent: collected.reasoning || null,
                includeReasoning,
                grok: {
                    sessionId: collected.sessionId,
                    stopReason: collected.stopReason,
                    requestId: collected.requestId,
                },
            });
        }
        catch (err) {
            await this.markFailed(chatRequestDbId, started, err);
            throw err;
        }
        finally {
            grok_cli_service_1.grokCliService.release();
        }
    }
    async collectFromGrokStream(options) {
        const textParts = [];
        const reasoningParts = [];
        let sessionId;
        let stopReason;
        let requestId;
        for await (const event of grok_cli_service_1.grokCliService.stream({ ...options, stream: true })) {
            if (event.type === 'thought' && typeof event.data === 'string') {
                reasoningParts.push(event.data);
            }
            else if (event.type === 'text' && typeof event.data === 'string') {
                textParts.push(event.data);
            }
            else if (event.type === 'end') {
                if (typeof event.stopReason === 'string')
                    stopReason = event.stopReason;
                if (typeof event.sessionId === 'string')
                    sessionId = event.sessionId;
                if (typeof event.requestId === 'string')
                    requestId = event.requestId;
            }
        }
        return {
            text: textParts.join(''),
            reasoning: reasoningParts.join(''),
            sessionId,
            stopReason,
            requestId,
        };
    }
    buildAuditPayload(collected, includeReasoning) {
        if (!includeReasoning || !collected.reasoning) {
            return collected.text;
        }
        return JSON.stringify({
            content: collected.text,
            reasoning_content: collected.reasoning,
        });
    }
    async runStream(args) {
        const { dto, ctx, res, model, policy, prompt, completionId, chatRequestDbId, started, includeReasoning, } = args;
        const created = Math.floor(Date.now() / 1000);
        const textParts = [];
        const reasoningParts = [];
        let grokSessionId;
        let stopReason;
        let grokRequestId;
        let clientClosed = false;
        res.on('close', () => {
            clientClosed = true;
        });
        (0, stream_1.initSse)(res);
        (0, stream_1.writeSseData)(res, (0, openai_mapper_1.mapRoleChunk)(model, completionId, created));
        try {
            for await (const event of grok_cli_service_1.grokCliService.stream(policyToRunOpts(policy, {
                prompt,
                model,
                stream: true,
                sessionId: dto.session_id,
            }))) {
                if (clientClosed)
                    break;
                if (event.type === 'thought' && typeof event.data === 'string') {
                    reasoningParts.push(event.data);
                    if (includeReasoning) {
                        (0, stream_1.writeSseData)(res, (0, openai_mapper_1.mapReasoningDeltaChunk)(model, event.data, completionId, created, true));
                    }
                }
                else if (event.type === 'text' && typeof event.data === 'string') {
                    textParts.push(event.data);
                    (0, stream_1.writeSseData)(res, (0, openai_mapper_1.mapTextDeltaChunk)(model, event.data, completionId, created));
                }
                else if (event.type === 'end') {
                    if (typeof event.stopReason === 'string')
                        stopReason = event.stopReason;
                    if (typeof event.sessionId === 'string')
                        grokSessionId = event.sessionId;
                    if (typeof event.requestId === 'string')
                        grokRequestId = event.requestId;
                }
            }
            if (!clientClosed) {
                const grokMeta = {
                    sessionId: grokSessionId,
                    stopReason,
                    requestId: grokRequestId,
                };
                (0, stream_1.writeSseData)(res, (0, openai_mapper_1.mapFinishChunk)(model, completionId, created, stopReason, grokMeta));
                (0, stream_1.writeSseDone)(res);
                res.end();
            }
            const collected = {
                text: textParts.join(''),
                reasoning: reasoningParts.join(''),
                sessionId: grokSessionId,
                stopReason,
                requestId: grokRequestId,
            };
            const auditPayload = this.buildAuditPayload(collected, includeReasoning);
            const responseEnc = encryption_service_1.encryptionService.encrypt(auditPayload);
            const durationMs = Date.now() - started;
            await database_1.prisma.chatRequest.update({
                where: { id: chatRequestDbId },
                data: {
                    status: constants_1.CHAT_STATUS.SUCCESS,
                    durationMs,
                    grokSessionId: grokSessionId ?? null,
                    responseCiphertext: toBytes(responseEnc.ciphertext),
                    responseIv: toBytes(responseEnc.iv),
                    responseTag: toBytes(responseEnc.tag),
                },
            });
            await audit_service_1.auditService.log({
                apiKeyId: ctx.apiKey.id,
                action: constants_1.AUDIT_ACTIONS.CHAT_CREATE,
                resource: 'chat_request',
                resourceId: chatRequestDbId,
                meta: {
                    requestId: ctx.requestId,
                    model,
                    stream: true,
                    durationMs,
                    documentCount: (dto.document_ids ?? []).length,
                    includeReasoning,
                    hasReasoning: reasoningParts.length > 0,
                    policyMode: policy.mode,
                },
                ip: ctx.ip,
            });
        }
        catch (err) {
            if (!clientClosed && !res.writableEnded) {
                const message = err instanceof Error ? err.message : 'Stream error';
                (0, stream_1.writeSseData)(res, {
                    error: {
                        message,
                        type: 'server_error',
                        code: err instanceof http_exception_1.HttpException ? err.code : 'internal_error',
                    },
                });
                (0, stream_1.writeSseDone)(res);
                res.end();
            }
            throw err;
        }
    }
    async markFailed(chatRequestDbId, started, err) {
        const durationMs = Date.now() - started;
        const message = err instanceof Error ? err.message : 'Unknown error';
        const isTimeout = err instanceof http_exception_1.HttpException && err.code === 'grok_timeout';
        try {
            await database_1.prisma.chatRequest.update({
                where: { id: chatRequestDbId },
                data: {
                    status: isTimeout ? constants_1.CHAT_STATUS.TIMEOUT : constants_1.CHAT_STATUS.ERROR,
                    durationMs,
                    errorMessage: message.slice(0, 4000),
                },
            });
        }
        catch (updateErr) {
            logger_1.logger.error({ updateErr }, 'Failed to mark chat request as failed');
        }
    }
}
exports.ChatService = ChatService;
exports.chatService = new ChatService();
//# sourceMappingURL=chat.service.js.map