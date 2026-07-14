"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatAdminService = exports.ChatAdminService = void 0;
exports.parseStoredResponse = parseStoredResponse;
const database_1 = require("../config/database");
const constants_1 = require("../config/constants");
const exception_factory_1 = require("../exceptions/exception.factory");
const encryption_service_1 = require("./encryption.service");
const audit_service_1 = require("./audit.service");
function decryptField(ciphertext, iv, tag) {
    if (!ciphertext || !iv || !tag)
        return null;
    try {
        return encryption_service_1.encryptionService.decryptToString({
            ciphertext: Buffer.from(ciphertext),
            iv: Buffer.from(iv),
            tag: Buffer.from(tag),
        });
    }
    catch {
        return '[decrypt_failed]';
    }
}
function parseStoredResponse(raw) {
    if (raw == null) {
        return { content: null, reasoning_content: null, raw: null };
    }
    try {
        const parsed = JSON.parse(raw);
        if (parsed &&
            typeof parsed === 'object' &&
            ('content' in parsed || 'reasoning_content' in parsed)) {
            return {
                content: parsed.content ?? '',
                reasoning_content: parsed.reasoning_content ?? null,
                raw,
            };
        }
    }
    catch {
        /* plain text */
    }
    return { content: raw, reasoning_content: null, raw };
}
class ChatAdminService {
    async list(query) {
        const limit = Math.min(query.limit ?? 50, 200);
        const offset = query.offset ?? 0;
        const where = {};
        if (query.status)
            where.status = query.status;
        if (query.apiKeyId)
            where.apiKeyId = query.apiKeyId;
        if (query.model)
            where.model = query.model;
        const [rows, total] = await Promise.all([
            database_1.prisma.chatRequest.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: limit,
                skip: offset,
                include: {
                    apiKey: { select: { id: true, name: true, keyPrefix: true, mode: true } },
                },
            }),
            database_1.prisma.chatRequest.count({ where }),
        ]);
        const items = rows.map((r) => {
            const prompt = decryptField(r.promptCiphertext, r.promptIv, r.promptTag) ?? '';
            const responseRaw = decryptField(r.responseCiphertext, r.responseIv, r.responseTag);
            const parsed = parseStoredResponse(responseRaw);
            return {
                id: r.id,
                requestId: r.requestId,
                model: r.model,
                stream: r.stream,
                status: r.status,
                durationMs: r.durationMs,
                policyMode: r.policyMode,
                errorMessage: r.errorMessage,
                ip: r.ip,
                createdAt: r.createdAt,
                apiKey: r.apiKey,
                promptPreview: prompt.slice(0, 200),
                contentPreview: (parsed.content ?? '').slice(0, 200),
                hasReasoning: Boolean(parsed.reasoning_content),
            };
        });
        // optional text filter after decrypt (small pages only)
        let filtered = items;
        if (query.q?.trim()) {
            const q = query.q.trim().toLowerCase();
            filtered = items.filter((i) => i.promptPreview.toLowerCase().includes(q) ||
                i.contentPreview.toLowerCase().includes(q) ||
                i.requestId.toLowerCase().includes(q));
        }
        return { items: filtered, total, limit, offset };
    }
    async getDetail(id, actorApiKeyId, ip) {
        const r = await database_1.prisma.chatRequest.findUnique({
            where: { id },
            include: {
                apiKey: {
                    select: { id: true, name: true, keyPrefix: true, mode: true, role: true },
                },
                documents: {
                    include: {
                        document: {
                            select: {
                                id: true,
                                originalName: true,
                                mimeType: true,
                                sizeBytes: true,
                            },
                        },
                    },
                },
            },
        });
        if (!r) {
            throw exception_factory_1.ExceptionFactory.notFound('Chat request');
        }
        const prompt = decryptField(r.promptCiphertext, r.promptIv, r.promptTag) ?? '';
        const responseRaw = decryptField(r.responseCiphertext, r.responseIv, r.responseTag);
        const parsed = parseStoredResponse(responseRaw);
        await audit_service_1.auditService.log({
            apiKeyId: actorApiKeyId,
            action: constants_1.AUDIT_ACTIONS.CHAT_ADMIN_VIEW,
            resource: 'chat_request',
            resourceId: id,
            meta: { requestId: r.requestId },
            ip,
        });
        return {
            id: r.id,
            requestId: r.requestId,
            model: r.model,
            stream: r.stream,
            status: r.status,
            durationMs: r.durationMs,
            grokSessionId: r.grokSessionId,
            policyMode: r.policyMode,
            errorMessage: r.errorMessage,
            ip: r.ip,
            userAgent: r.userAgent,
            createdAt: r.createdAt,
            apiKey: r.apiKey,
            documents: r.documents.map((d) => d.document),
            prompt,
            response: {
                content: parsed.content,
                reasoning_content: parsed.reasoning_content,
                raw: parsed.raw,
            },
        };
    }
}
exports.ChatAdminService = ChatAdminService;
exports.chatAdminService = new ChatAdminService();
//# sourceMappingURL=chat-admin.service.js.map