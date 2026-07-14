"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKey = createKey;
exports.listKeys = listKeys;
exports.revokeKey = revokeKey;
const node_crypto_1 = require("node:crypto");
const client_1 = require("@prisma/client");
function createApiKeySecret() {
    return `gk_live_${(0, node_crypto_1.randomBytes)(24).toString('base64url')}`;
}
function hashApiKey(rawKey) {
    return (0, node_crypto_1.createHash)('sha256').update(rawKey, 'utf8').digest('hex');
}
function apiKeyPrefix(rawKey) {
    return rawKey.slice(0, 16);
}
function openPrisma(databaseUrl) {
    return new client_1.PrismaClient({
        datasources: { db: { url: databaseUrl } },
    });
}
async function createKey(options) {
    const role = options.role === 'user' ? 'user' : 'admin';
    // Admin keys always agent; user defaults to safe
    const mode = role === 'admin' ? 'agent' : options.mode === 'agent' ? 'agent' : 'safe';
    const name = options.name?.trim() ||
        (role === 'admin' ? `admin-${new Date().toISOString().slice(0, 10)}` : 'client');
    const rateLimit = options.rateLimit ?? 120;
    const rawKey = options.rawKey?.trim() || createApiKeySecret();
    const keyHash = hashApiKey(rawKey);
    const keyPrefix = apiKeyPrefix(rawKey);
    const prisma = openPrisma(options.databaseUrl);
    try {
        const existing = await prisma.apiKey.findUnique({ where: { keyHash } });
        if (existing) {
            throw new Error('Generated key collides with an existing hash — retry');
        }
        const created = await prisma.apiKey.create({
            data: {
                id: (0, node_crypto_1.randomUUID)(),
                name,
                keyPrefix,
                keyHash,
                role,
                mode,
                rateLimit,
                isActive: true,
            },
        });
        return {
            id: created.id,
            name: created.name,
            role,
            mode,
            keyPrefix: created.keyPrefix,
            rawKey,
            rateLimit: created.rateLimit,
        };
    }
    finally {
        await prisma.$disconnect();
    }
}
async function listKeys(databaseUrl) {
    const prisma = openPrisma(databaseUrl);
    try {
        const rows = await prisma.apiKey.findMany({
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                name: true,
                role: true,
                mode: true,
                keyPrefix: true,
                isActive: true,
                rateLimit: true,
                createdAt: true,
                lastUsedAt: true,
            },
        });
        return rows;
    }
    finally {
        await prisma.$disconnect();
    }
}
async function revokeKey(databaseUrl, id) {
    const prisma = openPrisma(databaseUrl);
    try {
        const row = await prisma.apiKey.findUnique({ where: { id } });
        if (!row)
            return false;
        await prisma.apiKey.update({
            where: { id },
            data: { isActive: false },
        });
        return true;
    }
    finally {
        await prisma.$disconnect();
    }
}
//# sourceMappingURL=db-keys.js.map