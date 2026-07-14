import type { Request, Response } from 'express';
import { prisma } from '../config/database';
import { env } from '../config/env';
import { AUDIT_ACTIONS } from '../config/constants';
import type {
  AdminListQueryDto,
  adminCreateKeySchema,
  adminUpdateKeySchema,
  adminUpdateSettingsSchema,
} from '../dto/admin.dto';
import type { z } from 'zod';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { asyncHandler } from '../utils/async-handler';
import { apiKeyService } from '../services/api-key.service';
import { auditService } from '../services/audit.service';
import { chatAdminService } from '../services/chat-admin.service';
import { documentService } from '../services/document.service';
import { encryptionService } from '../services/encryption.service';
import { grokCliService } from '../services/grok-cli.service';
import { settingsService } from '../services/settings.service';
import { statsService } from '../services/stats.service';
import { updateService } from '../services/update.service';
import { usageService } from '../services/usage.service';
import { modelsService } from '../services/models.service';
import { isImageMime } from '../config/constants';
import type { ApiKeyMode, ApiKeyRole } from '../interfaces/auth.interface';

type CreateKeyBody = z.infer<typeof adminCreateKeySchema>;
type UpdateKeyBody = z.infer<typeof adminUpdateKeySchema>;
type UpdateSettingsBody = z.infer<typeof adminUpdateSettingsSchema>;

export class AdminController {
  me = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    res.json({
      object: 'admin.me',
      data: {
        id: req.apiKey.id,
        name: req.apiKey.name,
        keyPrefix: req.apiKey.keyPrefix,
        role: req.apiKey.role,
        mode: req.apiKey.mode,
      },
    });
  });

  stats = asyncHandler(async (_req: Request, res: Response) => {
    const data = await statsService.getDashboard();
    res.json({ object: 'admin.stats', data });
  });

  usage = asyncHandler(async (req: Request, res: Response) => {
    const fromRaw = typeof req.query.from === 'string' ? req.query.from : undefined;
    const toRaw = typeof req.query.to === 'string' ? req.query.to : undefined;
    const from = fromRaw ? new Date(fromRaw) : undefined;
    const to = toRaw ? new Date(toRaw) : undefined;
    const data = await usageService.getSummary({
      from: from && !Number.isNaN(from.getTime()) ? from : undefined,
      to: to && !Number.isNaN(to.getTime()) ? to : undefined,
    });
    res.json({ object: 'admin.usage', data });
  });

  models = asyncHandler(async (req: Request, res: Response) => {
    const refreshRaw = req.query.refresh;
    const refresh =
      refreshRaw === '1' || refreshRaw === 'true' || refreshRaw === 'yes';
    const data = await modelsService.getModelCatalog(refresh);
    const settings = await settingsService.getAll();
    res.json({
      object: 'admin.models',
      data: {
        ...data,
        defaultModel: settings.defaultModel || data.defaultModel,
      },
    });
  });

  listChats = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as AdminListQueryDto;
    const data = await chatAdminService.list(query);
    res.json({ object: 'list', ...data });
  });

  getChat = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const data = await chatAdminService.getDetail(
      String(req.params.id),
      req.apiKey.id,
      req.ip,
    );
    res.json({ object: 'admin.chat', data });
  });

  listKeys = asyncHandler(async (_req: Request, res: Response) => {
    const data = await apiKeyService.list();
    res.json({ object: 'list', data });
  });

  createKey = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = req.body as CreateKeyBody;
    const created = await apiKeyService.create({
      name: body.name,
      role: body.role as ApiKeyRole,
      mode: body.mode as ApiKeyMode,
      rateLimit: body.rateLimit,
      maxTurns: body.maxTurns,
      timeoutMs: body.timeoutMs,
      actorApiKeyId: req.apiKey.id,
      ip: req.ip,
    });
    res.status(201).json({ object: 'api_key', data: created });
  });

  updateKey = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = req.body as UpdateKeyBody;
    const data = await apiKeyService.update(
      String(req.params.id),
      {
        name: body.name,
        role: body.role as ApiKeyRole | undefined,
        mode: body.mode as ApiKeyMode | undefined,
        rateLimit: body.rateLimit,
        isActive: body.isActive,
        maxTurns: body.maxTurns,
        timeoutMs: body.timeoutMs,
      },
      req.apiKey.id,
      req.ip,
    );
    res.json({ object: 'api_key', data });
  });

  revokeKey = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    await apiKeyService.revoke(String(req.params.id), req.apiKey.id, req.ip);
    res.json({ object: 'api_key.deleted', id: req.params.id, deleted: true });
  });

  listDocuments = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as AdminListQueryDto;
    const where = { deletedAt: null as Date | null };
    const [rows, total] = await Promise.all([
      prisma.document.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: query.limit,
        skip: query.offset,
        include: {
          apiKey: { select: { id: true, name: true, keyPrefix: true } },
        },
      }),
      prisma.document.count({ where }),
    ]);
    res.json({
      object: 'list',
      total,
      data: rows.map((d) => ({
        id: d.id,
        originalName: d.originalName,
        mimeType: d.mimeType,
        sizeBytes: d.sizeBytes,
        storageType: d.storageType,
        checksumSha256: d.checksumSha256,
        createdAt: d.createdAt,
        apiKey: d.apiKey,
      })),
    });
  });

  getDocument = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const doc = await prisma.document.findFirst({
      where: { id: String(req.params.id), deletedAt: null },
      include: {
        apiKey: { select: { id: true, name: true, keyPrefix: true } },
      },
    });
    if (!doc) throw ExceptionFactory.notFound('Document');

    // decrypt using documentService path (owned by any key — admin bypass)
    let contentPreview: string | null = null;
    let imageDataUrl: string | null = null;
    try {
      const buf = await documentService.readDecryptedContent(doc.apiKeyId, doc.id);
      if (isImageMime(doc.mimeType)) {
        const b64 = buf.toString('base64');
        imageDataUrl = `data:${doc.mimeType};base64,${b64}`;
        contentPreview = `[image ${doc.sizeBytes} bytes]`;
      } else {
        const text = buf.toString('utf8');
        contentPreview = text.includes('\u0000')
          ? `[binary ${doc.sizeBytes} bytes]`
          : text.slice(0, 50_000);
      }
    } catch {
      contentPreview = '[decrypt_failed]';
    }

    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.DOCUMENT_READ,
      resource: 'document',
      resourceId: doc.id,
      ip: req.ip,
    });

    res.json({
      object: 'admin.document',
      data: {
        id: doc.id,
        originalName: doc.originalName,
        mimeType: doc.mimeType,
        sizeBytes: doc.sizeBytes,
        checksumSha256: doc.checksumSha256,
        createdAt: doc.createdAt,
        apiKey: doc.apiKey,
        content: contentPreview,
        imageDataUrl,
        isImage: isImageMime(doc.mimeType),
      },
    });
  });

  deleteDocument = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const doc = await prisma.document.findFirst({
      where: { id: String(req.params.id), deletedAt: null },
    });
    if (!doc) throw ExceptionFactory.notFound('Document');
    await documentService.softDelete(doc.apiKeyId, doc.id, req.ip);
    res.json({ object: 'document.deleted', id: doc.id, deleted: true });
  });

  listAudit = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as AdminListQueryDto;
    const where = query.action ? { action: query.action } : {};
    const [rows, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: query.limit,
        skip: query.offset,
        include: {
          apiKey: { select: { id: true, name: true, keyPrefix: true } },
        },
      }),
      prisma.auditLog.count({ where }),
    ]);
    res.json({
      object: 'list',
      total,
      data: rows.map((r) => ({
        id: r.id,
        action: r.action,
        resource: r.resource,
        resourceId: r.resourceId,
        metaJson: r.metaJson,
        ip: r.ip,
        createdAt: r.createdAt,
        apiKey: r.apiKey,
      })),
    });
  });

  getSettings = asyncHandler(async (_req: Request, res: Response) => {
    const data = await settingsService.getAll();
    res.json({ object: 'admin.settings', data });
  });

  updateSettings = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = req.body as UpdateSettingsBody;
    const data = await settingsService.update(body);
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.SETTINGS_UPDATE,
      resource: 'settings',
      meta: body as Record<string, unknown>,
      ip: req.ip,
    });
    res.json({ object: 'admin.settings', data });
  });

  system = asyncHandler(async (_req: Request, res: Response) => {
    let dbOk = false;
    try {
      await prisma.$queryRaw`SELECT 1`;
      dbOk = true;
    } catch {
      dbOk = false;
    }
    const grokOk = await grokCliService.isAvailable();
    let version = null as Awaited<
      ReturnType<typeof updateService.getVersionInfo>
    > | null;
    try {
      version = await updateService.getVersionInfo();
    } catch {
      version = null;
    }
    res.json({
      object: 'admin.system',
      data: {
        database: dbOk ? 'up' : 'down',
        grokCli: grokOk ? 'up' : 'down',
        concurrency: {
          active: grokCliService.activeCount,
          max: grokCliService.maxConcurrent,
        },
        version,
        updating: updateService.isUpdating(),
        env: {
          nodeEnv: env.NODE_ENV,
          grokSafeModeEnv: env.GROK_SAFE_MODE,
          grokDefaultModel: env.GROK_DEFAULT_MODEL,
          storageDir: env.storageDir,
          adminPanelEnabled: env.ADMIN_PANEL_ENABLED,
          port: env.PORT,
        },
        encryption: {
          ready: Boolean(encryptionService),
        },
      },
    });
  });

  checkUpdate = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const data = await updateService.getVersionInfo();
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.SYSTEM_UPDATE_CHECK,
      resource: 'system',
      meta: {
        current: data.current,
        latest: data.latest,
        updateAvailable: data.updateAvailable,
      },
      ip: req.ip,
    });
    res.json({ object: 'admin.update_check', data });
  });

  runUpdate = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = (req.body || {}) as {
      restart?: boolean;
      channel?: 'auto' | 'git' | 'npm-global' | 'npm-local';
    };
    const restart = body.restart !== false;

    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.SYSTEM_UPDATE,
      resource: 'system',
      meta: { restart, channel: body.channel || 'auto' },
      ip: req.ip,
    });

    if (restart) {
      const scheduled = updateService.scheduleUpdateAndRestart({
        home: process.env.GCTOAC_HOME,
        port: env.PORT,
      });
      res.json({
        object: 'admin.update',
        data: {
          ...scheduled,
          mode: 'scheduled_restart',
        },
      });
      return;
    }

    const result = await updateService.performUpdate({
      channel: body.channel || 'auto',
    });
    res.json({ object: 'admin.update', data: result });
  });
}

export const adminController = new AdminController();
