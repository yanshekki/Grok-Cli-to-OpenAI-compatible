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
import { chatService } from '../services/chat.service';
import { documentService } from '../services/document.service';
import type { AdminPlaygroundChatDto } from '../dto/chat.dto';
import type {
  ConversationListQueryDto,
  CreateConversationDto,
  UpdateConversationDto,
} from '../dto/conversation.dto';
import { conversationService } from '../services/conversation.service';
import { encryptionService } from '../services/encryption.service';
import { grokCliService } from '../services/grok-cli.service';
import { settingsService } from '../services/settings.service';
import { statsService } from '../services/stats.service';
import { updateService } from '../services/update.service';
import { usageService } from '../services/usage.service';
import { modelsService } from '../services/models.service';
import { ipBlacklistService } from '../services/ip-blacklist.service';
import {
  ddosPolicyService,
  defaultDdosPolicyFromEnv,
  ddosPreset,
} from '../services/ddos-policy.service';
import { abuseGuardService } from '../services/abuse-guard.service';
import { pm2Service } from '../services/pm2.service';
import { systemHealthService } from '../services/system-health.service';
import {
  getAbuseCounters,
  getConnectionsSnapshot,
} from '../middlewares/connection-tracker';
import { isImageMime, isTextualMime } from '../config/constants';
import type { ApiKeyMode, ApiKeyRole } from '../interfaces/auth.interface';
import { adminIpBanSchema } from '../dto/admin.dto';
import type { DdosPolicyUpdateDto } from '../dto/ddos.dto';
import { normalizeIp } from '../utils/ip-match';
import { requestIp } from '../utils/client-ip';

type CreateKeyBody = z.infer<typeof adminCreateKeySchema>;
type UpdateKeyBody = z.infer<typeof adminUpdateKeySchema>;
type UpdateSettingsBody = z.infer<typeof adminUpdateSettingsSchema>;
type IpBanBody = z.infer<typeof adminIpBanSchema>;

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
      requestIp(req),
    );
    res.json({ object: 'admin.chat', data });
  });

  listKeys = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as AdminListQueryDto & {
      role?: string;
      mode?: string;
      isActive?: string;
      all?: string;
    };
    const isActiveRaw = query.isActive;
    let isActive: boolean | undefined;
    if (isActiveRaw === 'true' || isActiveRaw === '1') isActive = true;
    if (isActiveRaw === 'false' || isActiveRaw === '0') isActive = false;
    const all =
      query.all === '1' || query.all === 'true' || query.all === 'yes';
    const result = await apiKeyService.list({
      q: query.q,
      role: query.role,
      mode: query.mode,
      isActive,
      limit: query.limit,
      offset: query.offset,
      all,
    });
    res.json({
      object: 'list',
      total: result.total,
      limit: result.limit,
      offset: result.offset,
      data: result.data,
    });
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
      ipWhitelist: body.ipWhitelist,
      actorApiKeyId: req.apiKey.id,
      ip: requestIp(req),
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
        ipWhitelist: body.ipWhitelist,
      },
      req.apiKey.id,
      requestIp(req),
    );
    res.json({ object: 'api_key', data });
  });

  revokeKey = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    await apiKeyService.revoke(String(req.params.id), req.apiKey.id, requestIp(req));
    res.json({ object: 'api_key.deleted', id: req.params.id, deleted: true });
  });

  listDocuments = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as AdminListQueryDto & {
      storageType?: string;
    };
    const where: Record<string, unknown> = { deletedAt: null };
    if (query.apiKeyId) where.apiKeyId = query.apiKeyId;
    if (query.storageType === 'db' || query.storageType === 'filesystem') {
      where.storageType = query.storageType;
    }
    const q = query.q?.trim();
    if (q) {
      where.OR = [
        { originalName: { contains: q } },
        { mimeType: { contains: q } },
        { checksumSha256: { contains: q } },
      ];
    }
    const createdAt: { gte?: Date; lte?: Date } = {};
    if (query.from) {
      const d = new Date(query.from);
      if (!Number.isNaN(d.getTime())) createdAt.gte = d;
    }
    if (query.to) {
      const d = new Date(query.to);
      if (!Number.isNaN(d.getTime())) createdAt.lte = d;
    }
    if (Object.keys(createdAt).length) where.createdAt = createdAt;

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
      limit: query.limit,
      offset: query.offset,
      meta: {
        storageDir: env.storageDir,
        documentDbMaxBytes: env.DOCUMENT_DB_MAX_BYTES,
        uploadMaxBytes: env.UPLOAD_MAX_BYTES,
      },
      data: rows.map((d) => ({
        id: d.id,
        originalName: d.originalName,
        mimeType: d.mimeType,
        sizeBytes: d.sizeBytes,
        storageType: d.storageType,
        storagePath: d.storagePath,
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

    let contentPreview: string | null = null;
    let imageDataUrl: string | null = null;
    let isBinary = false;
    try {
      const buf = await documentService.readDecryptedContent(doc.apiKeyId, doc.id);
      if (isImageMime(doc.mimeType)) {
        const b64 = buf.toString('base64');
        imageDataUrl = `data:${doc.mimeType};base64,${b64}`;
        contentPreview = `[image ${doc.sizeBytes} bytes]`;
      } else if (
        doc.mimeType === 'application/pdf' ||
        buf.includes(0) ||
        !isTextualMime(doc.mimeType)
      ) {
        isBinary = true;
        contentPreview = null;
      } else {
        const text = buf.toString('utf8');
        if (text.includes('\u0000')) {
          isBinary = true;
          contentPreview = null;
        } else {
          contentPreview = text.slice(0, 50_000);
        }
      }
    } catch {
      contentPreview = '[decrypt_failed]';
    }

    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.DOCUMENT_READ,
      resource: 'document',
      resourceId: doc.id,
      ip: requestIp(req),
    });

    res.json({
      object: 'admin.document',
      data: {
        id: doc.id,
        originalName: doc.originalName,
        mimeType: doc.mimeType,
        sizeBytes: doc.sizeBytes,
        storageType: doc.storageType,
        storagePath: doc.storagePath,
        checksumSha256: doc.checksumSha256,
        createdAt: doc.createdAt,
        apiKey: doc.apiKey,
        content: contentPreview,
        imageDataUrl,
        isImage: isImageMime(doc.mimeType),
        isBinary,
      },
    });
  });

  downloadDocument = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const doc = await prisma.document.findFirst({
      where: { id: String(req.params.id), deletedAt: null },
    });
    if (!doc) throw ExceptionFactory.notFound('Document');

    const buf = await documentService.readDecryptedContent(doc.apiKeyId, doc.id);

    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.DOCUMENT_DOWNLOAD,
      resource: 'document',
      resourceId: doc.id,
      meta: { originalName: doc.originalName, sizeBytes: doc.sizeBytes },
      ip: requestIp(req),
    });

    const safeName = doc.originalName.replace(/[\r\n"]/g, '_');
    const encoded = encodeURIComponent(doc.originalName);
    res.setHeader('Content-Type', doc.mimeType || 'application/octet-stream');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${safeName}"; filename*=UTF-8''${encoded}`,
    );
    res.setHeader('Content-Length', String(buf.length));
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.status(200).send(buf);
  });

  deleteDocument = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const doc = await prisma.document.findFirst({
      where: { id: String(req.params.id), deletedAt: null },
    });
    if (!doc) throw ExceptionFactory.notFound('Document');
    await documentService.softDelete(doc.apiKeyId, doc.id, requestIp(req));
    res.json({ object: 'document.deleted', id: doc.id, deleted: true });
  });

  listAudit = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as AdminListQueryDto & {
      resource?: string;
    };
    const where: Record<string, unknown> = {};
    if (query.action) where.action = query.action;
    if (query.resource) where.resource = query.resource;
    if (query.apiKeyId) where.apiKeyId = query.apiKeyId;
    const createdAt: { gte?: Date; lte?: Date } = {};
    if (query.from) {
      const d = new Date(query.from);
      if (!Number.isNaN(d.getTime())) createdAt.gte = d;
    }
    if (query.to) {
      const d = new Date(query.to);
      if (!Number.isNaN(d.getTime())) createdAt.lte = d;
    }
    if (Object.keys(createdAt).length) where.createdAt = createdAt;
    const q = query.q?.trim();
    if (q) {
      where.OR = [
        { action: { contains: q } },
        { resource: { contains: q } },
        { resourceId: { contains: q } },
        { ip: { contains: q } },
        { apiKey: { name: { contains: q } } },
        { apiKey: { keyPrefix: { contains: q } } },
      ];
    }
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
      limit: query.limit,
      offset: query.offset,
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
    // Admin UI may only turn the panel OFF. Re-enable requires: gctoac admin on
    if (body.adminPanelEnabled === true) {
      throw ExceptionFactory.validation(
        'Cannot enable Admin panel from UI. Use CLI: gctoac admin on',
      );
    }
    const data = await settingsService.update(body);
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.SETTINGS_UPDATE,
      resource: 'settings',
      meta: body as Record<string, unknown>,
      ip: requestIp(req),
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
    let software = null as Awaited<
      ReturnType<typeof systemHealthService.getSoftwareReport>
    > | null;
    try {
      software = await systemHealthService.getSoftwareReport();
    } catch {
      software = null;
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
        software,
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
      ip: requestIp(req),
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
      ip: requestIp(req),
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

  // ——— DDoS control ———
  ddosConnections = asyncHandler(async (_req: Request, res: Response) => {
    res.json({
      object: 'admin.ddos.connections',
      data: getConnectionsSnapshot(),
    });
  });

  ddosBlacklist = asyncHandler(async (_req: Request, res: Response) => {
    const items = await ipBlacklistService.list();
    res.json({ object: 'list', data: items });
  });

  ddosBan = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = req.body as IpBanBody;
    const ip = normalizeIp(body.ip);
    let expiresAt: Date | null = null;
    if (body.ttlSeconds != null && body.ttlSeconds > 0) {
      expiresAt = new Date(Date.now() + body.ttlSeconds * 1000);
    }
    const row = await ipBlacklistService.ban({
      ip,
      reason: body.reason,
      source: 'manual',
      expiresAt,
      createdBy: req.apiKey.id,
    });
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.IP_BAN,
      resource: 'ip_blacklist',
      resourceId: row.id,
      meta: { ip, reason: body.reason, expiresAt },
      ip: requestIp(req),
    });
    res.status(201).json({ object: 'admin.ddos.ban', data: row });
  });

  ddosUnban = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const ip = normalizeIp(decodeURIComponent(String(req.params.ip || '')));
    await ipBlacklistService.unban(ip);
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.IP_UNBAN,
      resource: 'ip_blacklist',
      meta: { ip },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.ddos.unban', ip, deleted: true });
  });

  ddosStats = asyncHandler(async (_req: Request, res: Response) => {
    const counters = getAbuseCounters();
    const snap = getConnectionsSnapshot();
    const policy = await ddosPolicyService.get();
    // top IPs from recent
    const counts = new Map<string, number>();
    for (const c of snap.recent) {
      counts.set(c.ip, (counts.get(c.ip) || 0) + 1);
    }
    const topIps = [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([ip, n]) => ({
        ip,
        requests: n,
        concurrent: abuseGuardService.getConcurrent(ip),
      }));
    res.json({
      object: 'admin.ddos.stats',
      data: {
        ...counters,
        activeConnections: snap.counts.active,
        topIps,
        autoBanTotal: abuseGuardService.getAutoBanTotal(),
        policySummary: ddosPolicyService.summary(policy),
      },
    });
  });

  ddosPolicyGet = asyncHandler(async (_req: Request, res: Response) => {
    const policy = await ddosPolicyService.get();
    res.json({
      object: 'admin.ddos.policy',
      data: policy,
      defaults: defaultDdosPolicyFromEnv(),
      presets: {
        relaxed: ddosPreset('relaxed'),
        balanced: ddosPreset('balanced'),
        strict: ddosPreset('strict'),
      },
    });
  });

  ddosPolicyPut = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = req.body as DdosPolicyUpdateDto;
    const policy = await ddosPolicyService.update(body);
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.DDOS_POLICY_UPDATE,
      resource: 'ddos_policy',
      meta: { keys: Object.keys(body || {}) },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.ddos.policy', data: policy });
  });

  ddosPolicyReset = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const policy = await ddosPolicyService.resetToEnvDefaults();
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.DDOS_POLICY_UPDATE,
      resource: 'ddos_policy',
      meta: { reset: true },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.ddos.policy', data: policy, reset: true });
  });

  ddosEvents = asyncHandler(async (_req: Request, res: Response) => {
    res.json({
      object: 'list',
      data: abuseGuardService.getEvents(50),
      total: abuseGuardService.getAutoBanTotal(),
    });
  });

  // ——— PM2 ———
  pm2Status = asyncHandler(async (_req: Request, res: Response) => {
    const data = await pm2Service.status();
    res.json({ object: 'admin.pm2.status', data });
  });

  pm2Start = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    // Prefer scheduled switch so this process can hand off cleanly
    const scheduled = pm2Service.scheduleSwitch('pm2', {
      home: process.env.GCTOAC_HOME,
      port: env.PORT,
    });
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PM2_START,
      resource: 'pm2',
      meta: { scheduled: true },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.pm2.start', data: scheduled });
  });

  pm2Stop = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const out = await pm2Service.stop();
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PM2_STOP,
      resource: 'pm2',
      ip: requestIp(req),
    });
    res.json({ object: 'admin.pm2.stop', data: out });
  });

  pm2Restart = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const out = await pm2Service.restart();
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PM2_RESTART,
      resource: 'pm2',
      ip: requestIp(req),
    });
    res.json({ object: 'admin.pm2.restart', data: out });
  });

  pm2Reload = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const out = await pm2Service.reload();
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PM2_RELOAD,
      resource: 'pm2',
      ip: requestIp(req),
    });
    res.json({ object: 'admin.pm2.reload', data: out });
  });

  pm2Logs = asyncHandler(async (req: Request, res: Response) => {
    const lines = Number(req.query.lines) || 100;
    const out = await pm2Service.logs(lines);
    res.json({ object: 'admin.pm2.logs', data: out });
  });

  pm2ClearLogs = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = (req.body || {}) as { which?: string };
    const which =
      body.which === 'error' || body.which === 'out' ? body.which : 'all';
    const out = await pm2Service.clearLogs({ which });
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PM2_CONFIG,
      resource: 'pm2_logs',
      meta: {
        cleared: out.cleared.map((c) => c.label),
        which,
      },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.pm2.logs.clear', data: out });
  });

  pm2GetConfig = asyncHandler(async (_req: Request, res: Response) => {
    res.json({
      object: 'admin.pm2.config',
      data: { config: pm2Service.getConfig() },
    });
  });

  pm2SaveConfig = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = (req.body || {}) as Record<string, unknown>;
    const restart = body.restart !== false;
    const port =
      body.port != null && body.port !== ''
        ? Number(body.port)
        : undefined;
    const { restart: _r, port: _p, ...cfgBody } = body;
    const out = await pm2Service.applyConfig(cfgBody, { restart, port });
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PM2_CONFIG,
      resource: 'pm2',
      meta: {
        restart,
        name: out.config.name,
        port: out.port,
        portChanged: Boolean(out.portChange),
      },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.pm2.config', data: out });
  });

  pm2ResetConfig = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const config = pm2Service.resetConfig();
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PM2_CONFIG,
      resource: 'pm2',
      meta: { reset: true },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.pm2.config', data: { config, reset: true } });
  });

  pm2Switch = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = (req.body || {}) as { mode?: string };
    const mode = body.mode === 'pm2' ? 'pm2' : body.mode === 'gctoac' ? 'gctoac' : null;
    if (!mode) {
      throw ExceptionFactory.validation('mode must be "pm2" or "gctoac"');
    }
    const scheduled = pm2Service.scheduleSwitch(mode, {
      home: process.env.GCTOAC_HOME,
      port: env.PORT,
    });
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PM2_SWITCH,
      resource: 'pm2',
      meta: { mode },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.pm2.switch', data: scheduled });
  });

  listConversations = asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as ConversationListQueryDto;
    const data = await conversationService.list(query);
    res.json({ object: 'list', ...data });
  });

  getConversation = asyncHandler(async (req: Request, res: Response) => {
    const data = await conversationService.getById(String(req.params.id));
    res.json({ object: 'admin.conversation', data });
  });

  createConversation = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = req.body as CreateConversationDto;
    const data = await conversationService.create(body);
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.CONVERSATION_CREATE,
      resource: 'conversation',
      resourceId: data.id,
      meta: { messageCount: data.messageCount, title: data.title },
      ip: requestIp(req),
    });
    res.status(201).json({ object: 'admin.conversation', data });
  });

  updateConversation = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = req.body as UpdateConversationDto;
    const data = await conversationService.update(String(req.params.id), body);
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.CONVERSATION_UPDATE,
      resource: 'conversation',
      resourceId: data.id,
      meta: {
        title: data.title,
        messageCount: data.messageCount,
        fields: Object.keys(body),
      },
      ip: requestIp(req),
    });
    res.json({ object: 'admin.conversation', data });
  });

  deleteConversation = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const id = String(req.params.id);
    const data = await conversationService.remove(id);
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.CONVERSATION_DELETE,
      resource: 'conversation',
      resourceId: id,
      ip: requestIp(req),
    });
    res.json({ object: 'admin.conversation.deleted', data });
  });

  /**
   * Admin chat playground — run completion as a selected API key (by id).
   * Auth is still the admin bearer; no raw client key required.
   */
  playgroundChat = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const body = req.body as AdminPlaygroundChatDto;
    const { apiKeyId, ...dto } = body;

    let actor = req.apiKey;
    if (apiKeyId && apiKeyId !== req.apiKey.id) {
      actor = await apiKeyService.getByIdForAuth(apiKeyId);
    }

    const stream = Boolean(dto.stream);
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PLAYGROUND_CHAT,
      resource: 'playground',
      resourceId: actor.id,
      meta: {
        asKeyId: actor.id,
        asKeyName: actor.name,
        model: dto.model,
        stream,
      },
      ip: requestIp(req),
    });

    const result = await chatService.createCompletion(
      dto,
      {
        apiKey: actor,
        requestId: req.requestId,
        ip: requestIp(req),
        userAgent: req.header('user-agent') ?? undefined,
      },
      stream ? res : undefined,
    );

    if (!stream && result) {
      res.status(200).json(result);
    }
  });

  /** Upload document owned by selected API key (admin playground). */
  playgroundUpload = asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    if (!req.file) {
      throw ExceptionFactory.validation('File field "file" is required');
    }
    const asKeyId = String(
      (req.body && (req.body as { apiKeyId?: string }).apiKeyId) ||
        req.apiKey.id,
    );
    const actor =
      asKeyId === req.apiKey.id
        ? req.apiKey
        : await apiKeyService.getByIdForAuth(asKeyId);

    const doc = await documentService.upload({
      apiKeyId: actor.id,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      buffer: req.file.buffer,
      ip: requestIp(req),
    });

    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.PLAYGROUND_UPLOAD,
      resource: 'document',
      resourceId: doc.id,
      meta: { asKeyId: actor.id, originalName: doc.originalName },
      ip: requestIp(req),
    });

    res.status(201).json({ object: 'document', data: doc });
  });
}

export const adminController = new AdminController();
