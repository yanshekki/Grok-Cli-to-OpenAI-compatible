import type { Response } from 'express';
import { prisma } from '../config/database';
import {
  AUDIT_ACTIONS,
  CHAT_STATUS,
  MAX_DOCUMENT_CONTEXT_CHARS,
  MAX_TOTAL_PROMPT_CHARS,
} from '../config/constants';
import type { CreateChatCompletionDto } from '../dto/chat.dto';
import type { AuthenticatedApiKey } from '../interfaces/auth.interface';
import type {
  GrokResponseMeta,
  OpenAiChatCompletion,
} from '../interfaces/openai.interface';
import type { GrokRunOptions } from '../interfaces/grok.interface';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { HttpException } from '../exceptions/http.exception';
import { createChatCompletionId, createId } from '../utils/id';
import {
  mapFinishChunk,
  mapGrokToChatCompletion,
  mapReasoningDeltaChunk,
  mapRoleChunk,
  mapTextDeltaChunk,
  messagesToPrompt,
} from '../utils/openai-mapper';
import { initSse, writeSseData, writeSseDone } from '../utils/stream';
import { logger } from '../utils/logger';
import { auditService } from './audit.service';
import { documentService } from './document.service';
import { encryptionService } from './encryption.service';
import { grokCliService } from './grok-cli.service';
import { policyService, type ResolvedPolicy } from './policy.service';
import { settingsService } from './settings.service';

export interface ChatContext {
  apiKey: AuthenticatedApiKey;
  requestId: string;
  ip?: string;
  userAgent?: string;
}

interface GrokCollectedOutput {
  text: string;
  reasoning: string;
  sessionId?: string;
  stopReason?: string;
  requestId?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toBytes(buf: Buffer): any {
  return Buffer.from(buf);
}

function policyToRunOpts(
  policy: ResolvedPolicy,
  base: {
    prompt: string;
    model: string;
    stream: boolean;
    sessionId?: string;
  },
): GrokRunOptions {
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

export class ChatService {
  async createCompletion(
    dto: CreateChatCompletionDto,
    ctx: ChatContext,
    res?: Response,
  ): Promise<OpenAiChatCompletion | void> {
    const settings = await settingsService.getAll();
    const model = dto.model || settings.defaultModel;
    const stream = Boolean(dto.stream);
    const includeReasoning = dto.include_reasoning !== false;
    const policy = await policyService.resolve(ctx.apiKey, dto.cwd);
    const documentIds = dto.document_ids ?? [];

    let docContext = '';
    if (documentIds.length > 0) {
      docContext = await documentService.buildContextFromDocuments(
        ctx.apiKey.id,
        documentIds,
        MAX_DOCUMENT_CONTEXT_CHARS,
      );
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

    const prompt = messagesToPrompt(normalizedMessages);
    if (prompt.length > MAX_TOTAL_PROMPT_CHARS) {
      throw ExceptionFactory.validation(
        `Total prompt exceeds ${MAX_TOTAL_PROMPT_CHARS} characters`,
      );
    }

    if (!grokCliService.tryAcquire()) {
      throw ExceptionFactory.concurrencyLimit();
    }

    const chatRequestDbId = createId();
    const completionId = createChatCompletionId();
    const promptEnc = encryptionService.encrypt(prompt);
    const started = Date.now();

    await prisma.chatRequest.create({
      data: {
        id: chatRequestDbId,
        requestId: ctx.requestId,
        apiKeyId: ctx.apiKey.id,
        model,
        stream,
        status: CHAT_STATUS.PENDING,
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
          throw ExceptionFactory.internal('Streaming requires Response');
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

      const collected = await this.collectFromGrokStream(
        policyToRunOpts(policy, {
          prompt,
          model,
          stream: true,
          sessionId: dto.session_id,
        }),
      );

      const auditPayload = this.buildAuditPayload(collected, includeReasoning);
      const responseEnc = encryptionService.encrypt(auditPayload);
      const durationMs = Date.now() - started;

      await prisma.chatRequest.update({
        where: { id: chatRequestDbId },
        data: {
          status: CHAT_STATUS.SUCCESS,
          durationMs,
          grokSessionId: collected.sessionId ?? null,
          responseCiphertext: toBytes(responseEnc.ciphertext),
          responseIv: toBytes(responseEnc.iv),
          responseTag: toBytes(responseEnc.tag),
        },
      });

      await auditService.log({
        apiKeyId: ctx.apiKey.id,
        action: AUDIT_ACTIONS.CHAT_CREATE,
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

      return mapGrokToChatCompletion(
        model,
        {
          text: collected.text,
          stopReason: collected.stopReason,
          sessionId: collected.sessionId,
          requestId: collected.requestId,
        },
        {
          completionId,
          reasoningContent: collected.reasoning || null,
          includeReasoning,
          grok: {
            sessionId: collected.sessionId,
            stopReason: collected.stopReason,
            requestId: collected.requestId,
          },
        },
      );
    } catch (err) {
      await this.markFailed(chatRequestDbId, started, err);
      throw err;
    } finally {
      grokCliService.release();
    }
  }

  private async collectFromGrokStream(
    options: GrokRunOptions,
  ): Promise<GrokCollectedOutput> {
    const textParts: string[] = [];
    const reasoningParts: string[] = [];
    let sessionId: string | undefined;
    let stopReason: string | undefined;
    let requestId: string | undefined;

    for await (const event of grokCliService.stream({ ...options, stream: true })) {
      if (event.type === 'thought' && typeof event.data === 'string') {
        reasoningParts.push(event.data);
      } else if (event.type === 'text' && typeof event.data === 'string') {
        textParts.push(event.data);
      } else if (event.type === 'end') {
        if (typeof event.stopReason === 'string') stopReason = event.stopReason;
        if (typeof event.sessionId === 'string') sessionId = event.sessionId;
        if (typeof event.requestId === 'string') requestId = event.requestId;
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

  private buildAuditPayload(
    collected: GrokCollectedOutput,
    includeReasoning: boolean,
  ): string {
    if (!includeReasoning || !collected.reasoning) {
      return collected.text;
    }
    return JSON.stringify({
      content: collected.text,
      reasoning_content: collected.reasoning,
    });
  }

  private async runStream(args: {
    dto: CreateChatCompletionDto;
    ctx: ChatContext;
    res: Response;
    model: string;
    policy: ResolvedPolicy;
    prompt: string;
    completionId: string;
    chatRequestDbId: string;
    started: number;
    includeReasoning: boolean;
  }): Promise<void> {
    const {
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
    } = args;
    const created = Math.floor(Date.now() / 1000);
    const textParts: string[] = [];
    const reasoningParts: string[] = [];
    let grokSessionId: string | undefined;
    let stopReason: string | undefined;
    let grokRequestId: string | undefined;
    let clientClosed = false;

    res.on('close', () => {
      clientClosed = true;
    });

    initSse(res);
    writeSseData(res, mapRoleChunk(model, completionId, created));

    try {
      for await (const event of grokCliService.stream(
        policyToRunOpts(policy, {
          prompt,
          model,
          stream: true,
          sessionId: dto.session_id,
        }),
      )) {
        if (clientClosed) break;

        if (event.type === 'thought' && typeof event.data === 'string') {
          reasoningParts.push(event.data);
          if (includeReasoning) {
            writeSseData(
              res,
              mapReasoningDeltaChunk(model, event.data, completionId, created, true),
            );
          }
        } else if (event.type === 'text' && typeof event.data === 'string') {
          textParts.push(event.data);
          writeSseData(res, mapTextDeltaChunk(model, event.data, completionId, created));
        } else if (event.type === 'end') {
          if (typeof event.stopReason === 'string') stopReason = event.stopReason;
          if (typeof event.sessionId === 'string') grokSessionId = event.sessionId;
          if (typeof event.requestId === 'string') grokRequestId = event.requestId;
        }
      }

      if (!clientClosed) {
        const grokMeta: GrokResponseMeta = {
          sessionId: grokSessionId,
          stopReason,
          requestId: grokRequestId,
        };
        writeSseData(
          res,
          mapFinishChunk(model, completionId, created, stopReason, grokMeta),
        );
        writeSseDone(res);
        res.end();
      }

      const collected: GrokCollectedOutput = {
        text: textParts.join(''),
        reasoning: reasoningParts.join(''),
        sessionId: grokSessionId,
        stopReason,
        requestId: grokRequestId,
      };
      const auditPayload = this.buildAuditPayload(collected, includeReasoning);
      const responseEnc = encryptionService.encrypt(auditPayload);
      const durationMs = Date.now() - started;

      await prisma.chatRequest.update({
        where: { id: chatRequestDbId },
        data: {
          status: CHAT_STATUS.SUCCESS,
          durationMs,
          grokSessionId: grokSessionId ?? null,
          responseCiphertext: toBytes(responseEnc.ciphertext),
          responseIv: toBytes(responseEnc.iv),
          responseTag: toBytes(responseEnc.tag),
        },
      });

      await auditService.log({
        apiKeyId: ctx.apiKey.id,
        action: AUDIT_ACTIONS.CHAT_CREATE,
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
    } catch (err) {
      if (!clientClosed && !res.writableEnded) {
        const message = err instanceof Error ? err.message : 'Stream error';
        writeSseData(res, {
          error: {
            message,
            type: 'server_error',
            code: err instanceof HttpException ? err.code : 'internal_error',
          },
        });
        writeSseDone(res);
        res.end();
      }
      throw err;
    }
  }

  private async markFailed(
    chatRequestDbId: string,
    started: number,
    err: unknown,
  ): Promise<void> {
    const durationMs = Date.now() - started;
    const message = err instanceof Error ? err.message : 'Unknown error';
    const isTimeout = err instanceof HttpException && err.code === 'grok_timeout';

    try {
      await prisma.chatRequest.update({
        where: { id: chatRequestDbId },
        data: {
          status: isTimeout ? CHAT_STATUS.TIMEOUT : CHAT_STATUS.ERROR,
          durationMs,
          errorMessage: message.slice(0, 4000),
        },
      });
    } catch (updateErr) {
      logger.error({ updateErr }, 'Failed to mark chat request as failed');
    }
  }
}

export const chatService = new ChatService();
