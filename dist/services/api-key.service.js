"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyService = exports.ApiKeyService = void 0;
exports.scryptHash = scryptHash;
exports.hashApiKey = hashApiKey;
exports.verifyApiKey = verifyApiKey;
const node_crypto_1 = require("node:crypto");
const database_1 = require("../config/database");
const constants_1 = require("../config/constants");
const exception_factory_1 = require("../exceptions/exception.factory");
const id_1 = require("../utils/id");
const audit_service_1 = require("./audit.service");
function hashApiKey(rawKey) {
    return (0, node_crypto_1.createHash)('sha256').update(rawKey, 'utf8').digest('hex');
}
function verifyApiKey(rawKey, keyHash) {
    const computed = hashApiKey(rawKey);
    try {
        return (0, node_crypto_1.timingSafeEqual)(Buffer.from(computed, 'hex'), Buffer.from(keyHash, 'hex'));
    }
    catch {
        return false;
    }
}
function scryptHash(rawKey, salt = (0, node_crypto_1.randomBytes)(16)) {
    const hash = (0, node_crypto_1.scryptSync)(rawKey, salt, 32);
    return `${salt.toString('hex')}:${hash.toString('hex')}`;
}
function mapPublic(r) {
    return {
        id: r.id,
        name: r.name,
        keyPrefix: r.keyPrefix,
        role: r.role,
        mode: (r.mode === constants_1.KEY_MODES.AGENT ? constants_1.KEY_MODES.AGENT : constants_1.KEY_MODES.SAFE),
        isActive: r.isActive,
        rateLimit: r.rateLimit,
        maxTurns: r.maxTurns,
        timeoutMs: r.timeoutMs,
        createdAt: r.createdAt,
        lastUsedAt: r.lastUsedAt,
    };
}
class ApiKeyService {
    async authenticate(rawKey) {
        if (!rawKey || rawKey.length < 16) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        const keyHash = hashApiKey(rawKey);
        const record = await database_1.prisma.apiKey.findUnique({ where: { keyHash } });
        if (!record || !record.isActive) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        void database_1.prisma.apiKey
            .update({
            where: { id: record.id },
            data: { lastUsedAt: new Date() },
        })
            .catch(() => undefined);
        return {
            id: record.id,
            name: record.name,
            keyPrefix: record.keyPrefix,
            role: record.role,
            mode: (record.mode === constants_1.KEY_MODES.AGENT ? constants_1.KEY_MODES.AGENT : constants_1.KEY_MODES.SAFE),
            rateLimit: record.rateLimit,
            isActive: record.isActive,
            maxTurns: record.maxTurns,
            timeoutMs: record.timeoutMs,
        };
    }
    async create(input) {
        const key = input.rawKey ?? (0, id_1.createApiKeySecret)();
        const keyHash = hashApiKey(key);
        const prefix = (0, id_1.apiKeyPrefix)(key);
        const existing = await database_1.prisma.apiKey.findUnique({ where: { keyHash } });
        if (existing) {
            throw exception_factory_1.ExceptionFactory.validation('API key already exists');
        }
        const id = (0, id_1.createId)();
        const mode = input.role === constants_1.ROLES.ADMIN
            ? constants_1.KEY_MODES.AGENT
            : input.mode === constants_1.KEY_MODES.AGENT
                ? constants_1.KEY_MODES.AGENT
                : constants_1.KEY_MODES.SAFE;
        const created = await database_1.prisma.apiKey.create({
            data: {
                id,
                name: input.name,
                keyPrefix: prefix,
                keyHash,
                role: input.role ?? constants_1.ROLES.CLIENT,
                mode,
                rateLimit: input.rateLimit ?? 60,
                maxTurns: input.maxTurns ?? null,
                timeoutMs: input.timeoutMs ?? null,
            },
        });
        await audit_service_1.auditService.log({
            apiKeyId: input.actorApiKeyId ?? created.id,
            action: constants_1.AUDIT_ACTIONS.API_KEY_CREATE,
            resource: 'api_key',
            resourceId: created.id,
            meta: {
                name: created.name,
                role: created.role,
                mode: created.mode,
                keyPrefix: prefix,
            },
            ip: input.ip,
        });
        return { ...mapPublic(created), key };
    }
    async list() {
        const rows = await database_1.prisma.apiKey.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return rows.map(mapPublic);
    }
    async update(id, input, actorApiKeyId, ip) {
        const existing = await database_1.prisma.apiKey.findUnique({ where: { id } });
        if (!existing) {
            throw exception_factory_1.ExceptionFactory.notFound('API key');
        }
        const updated = await database_1.prisma.apiKey.update({
            where: { id },
            data: {
                ...(input.name !== undefined ? { name: input.name } : {}),
                ...(input.role !== undefined ? { role: input.role } : {}),
                ...(input.mode !== undefined ? { mode: input.mode } : {}),
                ...(input.rateLimit !== undefined ? { rateLimit: input.rateLimit } : {}),
                ...(input.isActive !== undefined ? { isActive: input.isActive } : {}),
                ...(input.maxTurns !== undefined ? { maxTurns: input.maxTurns } : {}),
                ...(input.timeoutMs !== undefined ? { timeoutMs: input.timeoutMs } : {}),
            },
        });
        await audit_service_1.auditService.log({
            apiKeyId: actorApiKeyId,
            action: constants_1.AUDIT_ACTIONS.API_KEY_UPDATE,
            resource: 'api_key',
            resourceId: id,
            meta: input,
            ip,
        });
        return mapPublic(updated);
    }
    async revoke(id, actorApiKeyId, ip) {
        const existing = await database_1.prisma.apiKey.findUnique({ where: { id } });
        if (!existing) {
            throw exception_factory_1.ExceptionFactory.notFound('API key');
        }
        await database_1.prisma.apiKey.update({
            where: { id },
            data: { isActive: false },
        });
        await audit_service_1.auditService.log({
            apiKeyId: actorApiKeyId,
            action: constants_1.AUDIT_ACTIONS.API_KEY_DELETE,
            resource: 'api_key',
            resourceId: id,
            meta: { keyPrefix: existing.keyPrefix },
            ip,
        });
    }
}
exports.ApiKeyService = ApiKeyService;
exports.apiKeyService = new ApiKeyService();
//# sourceMappingURL=api-key.service.js.map