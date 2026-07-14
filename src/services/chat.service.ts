import type { Response } from 'express';
import { prisma } from '../config/database';
import {
  AUDIT_ACTIONS,
  CHAT_STATUS,
  MAX_DOCUMENT_CONTEXT_CHARS,
  MAX_TOTAL_PROMPT_CHARS,
} from '../config/constants';
import { env } from '../config/env';
import type { CreateChatCompletionDto } from '../dto/chat.dto';
import type { AuthenticatedApiKey } from '../interfaces/auth.interface';
import type { OpenAiChatCompletion } from '../interfaces/openai.interface';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { HttpException } from '../exceptions/http.exception';
import { createChatCompletionId, createId } from '../utils/id';
import {
  mapFinishChunk,
  mapGrokToChatCompletion,
  mapRoleChunk,
  mapTextDeltaChunk,
  messagesToPrompt,
} from '../utils/openai-mapper';
import { resolveSafeCwd } from '../utils/path-safe';
import { initSse, writeSseData, writeSseDone } from '../utils/stream';
import { logger } from '../utils/logger';
import { auditService } from './audit.service';
import { documentService } from './document.service';
import { encryptionService } from './encryption.service';
import { grokCliService } from './grok-cli.service';

export interface ChatContext {
  apiKey: AuthenticatedApiKey;
  requestId: string;
  ip?: string;
  userAgent?: string;
}

/** Convert Node Buffer to a value accepted by Prisma Bytes fields. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toBytes(buf: Buffer): any {
  return Buffer.from(buf);
}

export class ChatService {
  async createCompletion(
    dto: CreateChatCompletionDto,
    ctx: ChatContext,
    res?: Response,
  ): Promise<OpenAiChatCompletion | void> {
    const model = dto.model || env.GROK_DEFAULT_MODEL;
    const stream = Boolean(dto.stream);
    const cwd = resolveSafeCwd(dto.cwd);
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
          cwd,
          prompt,
          completionId,
          chatRequestDbId,
          started,
        });
        return;
      }

      const result = await grokCliService.runOnce({
        prompt,
        model,
        cwd,
        stream: false,
        sessionId: dto.session_id,
      });

      const responseEnc = encryptionService.encrypt(result.text);
      const durationMs = Date.now() - started;

      await prisma.chatRequest.update({
        where: { id: chatRequestDbId },
        data: {
          status: CHAT_STATUS.SUCCESS,
          durationMs,
          grokSessionId: result.sessionId ?? null,
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
        },
        ip: ctx.ip,
      });

      return mapGrokToChatCompletion(model, result.raw, completionId);
    } catch (err) {
      await this.markFailed(chatRequestDbId, started, err);
      throw err;
    } finally {
      grokCliService.release();
    }
  }

  private async runStream(args: {
    dto: CreateChatCompletionDto;
    ctx: ChatContext;
    res: Response;
    model: string;
    cwd: string;
    prompt: string;
    completionId: string;
    chatRequestDbId: string;
    started: number;
  }): Promise<void> {
    const { dto, ctx, res, model, cwd, prompt, completionId, chatRequestDbId, started } =
      args;
    const created = Math.floor(Date.now() / 1000);
    const textParts: string[] = [];
    let grokSessionId: string | undefined;
    let stopReason: string | undefined;
    let clientClosed = false;

    res.on('close', () => {
      clientClosed = true;
    });

    initSse(res);
    writeSseData(res, mapRoleChunk(model, completionId, created));

    try {
      for await (const event of grokCliService.stream({
        prompt,
        model,
        cwd,
        stream: true,
        sessionId: dto.session_id,
      })) {
        if (clientClosed) break;

        if (event.type === 'text' && typeof event.data === 'string') {
          textParts.push(event.data);
          writeSseData(res, mapTextDeltaChunk(model, event.data, completionId, created));
        } else if (event.type === 'end') {
          stopReason = typeof event.stopReason === 'string' ? event.stopReason : undefined;
          if (typeof event.sessionId === 'string') {
            grokSessionId = event.sessionId;
          }
        }
      }

      if (!clientClosed) {
        writeSseData(res, mapFinishChunk(model, completionId, created, stopReason));
        writeSseDone(res);
        res.end();
      }

      const fullText = textParts.join('');
      const responseEnc = encryptionService.encrypt(fullText);
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
        },
        ip: ctx.ip,
      });
    } catch (err) {
      if (!clientClosed && !res.headersSent) {
        // should not happen after initSse
      } else if (!clientClosed && !res.writableEnded) {
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
    const isTimeout =
      err instanceof HttpException && err.code === 'grok_timeout';

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
