"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = exports.AdminController = void 0;
const database_1 = require("../config/database");
const env_1 = require("../config/env");
const constants_1 = require("../config/constants");
const exception_factory_1 = require("../exceptions/exception.factory");
const async_handler_1 = require("../utils/async-handler");
const api_key_service_1 = require("../services/api-key.service");
const audit_service_1 = require("../services/audit.service");
const chat_admin_service_1 = require("../services/chat-admin.service");
const document_service_1 = require("../services/document.service");
const encryption_service_1 = require("../services/encryption.service");
const grok_cli_service_1 = require("../services/grok-cli.service");
const settings_service_1 = require("../services/settings.service");
const stats_service_1 = require("../services/stats.service");
const update_service_1 = require("../services/update.service");
class AdminController {
    me = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
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
    stats = (0, async_handler_1.asyncHandler)(async (_req, res) => {
        const data = await stats_service_1.statsService.getDashboard();
        res.json({ object: 'admin.stats', data });
    });
    listChats = (0, async_handler_1.asyncHandler)(async (req, res) => {
        const query = req.query;
        const data = await chat_admin_service_1.chatAdminService.list(query);
        res.json({ object: 'list', ...data });
    });
    getChat = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        const data = await chat_admin_service_1.chatAdminService.getDetail(String(req.params.id), req.apiKey.id, req.ip);
        res.json({ object: 'admin.chat', data });
    });
    listKeys = (0, async_handler_1.asyncHandler)(async (_req, res) => {
        const data = await api_key_service_1.apiKeyService.list();
        res.json({ object: 'list', data });
    });
    createKey = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        const body = req.body;
        const created = await api_key_service_1.apiKeyService.create({
            name: body.name,
            role: body.role,
            mode: body.mode,
            rateLimit: body.rateLimit,
            maxTurns: body.maxTurns,
            timeoutMs: body.timeoutMs,
            actorApiKeyId: req.apiKey.id,
            ip: req.ip,
        });
        res.status(201).json({ object: 'api_key', data: created });
    });
    updateKey = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        const body = req.body;
        const data = await api_key_service_1.apiKeyService.update(String(req.params.id), {
            name: body.name,
            role: body.role,
            mode: body.mode,
            rateLimit: body.rateLimit,
            isActive: body.isActive,
            maxTurns: body.maxTurns,
            timeoutMs: body.timeoutMs,
        }, req.apiKey.id, req.ip);
        res.json({ object: 'api_key', data });
    });
    revokeKey = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        await api_key_service_1.apiKeyService.revoke(String(req.params.id), req.apiKey.id, req.ip);
        res.json({ object: 'api_key.deleted', id: req.params.id, deleted: true });
    });
    listDocuments = (0, async_handler_1.asyncHandler)(async (req, res) => {
        const query = req.query;
        const where = { deletedAt: null };
        const [rows, total] = await Promise.all([
            database_1.prisma.document.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: query.limit,
                skip: query.offset,
                include: {
                    apiKey: { select: { id: true, name: true, keyPrefix: true } },
                },
            }),
            database_1.prisma.document.count({ where }),
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
    getDocument = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        const doc = await database_1.prisma.document.findFirst({
            where: { id: String(req.params.id), deletedAt: null },
            include: {
                apiKey: { select: { id: true, name: true, keyPrefix: true } },
            },
        });
        if (!doc)
            throw exception_factory_1.ExceptionFactory.notFound('Document');
        // decrypt using documentService path (owned by any key — admin bypass)
        let contentPreview = null;
        try {
            const buf = await document_service_1.documentService.readDecryptedContent(doc.apiKeyId, doc.id);
            const text = buf.toString('utf8');
            contentPreview = text.includes('\u0000')
                ? `[binary ${doc.sizeBytes} bytes]`
                : text.slice(0, 50_000);
        }
        catch {
            contentPreview = '[decrypt_failed]';
        }
        await audit_service_1.auditService.log({
            apiKeyId: req.apiKey.id,
            action: constants_1.AUDIT_ACTIONS.DOCUMENT_READ,
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
            },
        });
    });
    deleteDocument = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        const doc = await database_1.prisma.document.findFirst({
            where: { id: String(req.params.id), deletedAt: null },
        });
        if (!doc)
            throw exception_factory_1.ExceptionFactory.notFound('Document');
        await document_service_1.documentService.softDelete(doc.apiKeyId, doc.id, req.ip);
        res.json({ object: 'document.deleted', id: doc.id, deleted: true });
    });
    listAudit = (0, async_handler_1.asyncHandler)(async (req, res) => {
        const query = req.query;
        const where = query.action ? { action: query.action } : {};
        const [rows, total] = await Promise.all([
            database_1.prisma.auditLog.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: query.limit,
                skip: query.offset,
                include: {
                    apiKey: { select: { id: true, name: true, keyPrefix: true } },
                },
            }),
            database_1.prisma.auditLog.count({ where }),
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
    getSettings = (0, async_handler_1.asyncHandler)(async (_req, res) => {
        const data = await settings_service_1.settingsService.getAll();
        res.json({ object: 'admin.settings', data });
    });
    updateSettings = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        const body = req.body;
        const data = await settings_service_1.settingsService.update(body);
        await audit_service_1.auditService.log({
            apiKeyId: req.apiKey.id,
            action: constants_1.AUDIT_ACTIONS.SETTINGS_UPDATE,
            resource: 'settings',
            meta: body,
            ip: req.ip,
        });
        res.json({ object: 'admin.settings', data });
    });
    system = (0, async_handler_1.asyncHandler)(async (_req, res) => {
        let dbOk = false;
        try {
            await database_1.prisma.$queryRaw `SELECT 1`;
            dbOk = true;
        }
        catch {
            dbOk = false;
        }
        const grokOk = await grok_cli_service_1.grokCliService.isAvailable();
        let version = null;
        try {
            version = await update_service_1.updateService.getVersionInfo();
        }
        catch {
            version = null;
        }
        res.json({
            object: 'admin.system',
            data: {
                database: dbOk ? 'up' : 'down',
                grokCli: grokOk ? 'up' : 'down',
                concurrency: {
                    active: grok_cli_service_1.grokCliService.activeCount,
                    max: grok_cli_service_1.grokCliService.maxConcurrent,
                },
                version,
                updating: update_service_1.updateService.isUpdating(),
                env: {
                    nodeEnv: env_1.env.NODE_ENV,
                    grokSafeModeEnv: env_1.env.GROK_SAFE_MODE,
                    grokDefaultModel: env_1.env.GROK_DEFAULT_MODEL,
                    storageDir: env_1.env.storageDir,
                    adminPanelEnabled: env_1.env.ADMIN_PANEL_ENABLED,
                    port: env_1.env.PORT,
                },
                encryption: {
                    ready: Boolean(encryption_service_1.encryptionService),
                },
            },
        });
    });
    checkUpdate = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        const data = await update_service_1.updateService.getVersionInfo();
        await audit_service_1.auditService.log({
            apiKeyId: req.apiKey.id,
            action: constants_1.AUDIT_ACTIONS.SYSTEM_UPDATE_CHECK,
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
    runUpdate = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey)
            throw exception_factory_1.ExceptionFactory.unauthorized();
        const body = (req.body || {});
        const restart = body.restart !== false;
        await audit_service_1.auditService.log({
            apiKeyId: req.apiKey.id,
            action: constants_1.AUDIT_ACTIONS.SYSTEM_UPDATE,
            resource: 'system',
            meta: { restart, channel: body.channel || 'auto' },
            ip: req.ip,
        });
        if (restart) {
            const scheduled = update_service_1.updateService.scheduleUpdateAndRestart({
                home: process.env.GCTOAC_HOME,
                port: env_1.env.PORT,
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
        const result = await update_service_1.updateService.performUpdate({
            channel: body.channel || 'auto',
        });
        res.json({ object: 'admin.update', data: result });
    });
}
exports.AdminController = AdminController;
exports.adminController = new AdminController();
//# sourceMappingURL=admin.controller.js.map