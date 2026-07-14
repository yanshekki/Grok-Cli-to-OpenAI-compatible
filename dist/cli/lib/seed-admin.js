"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = seedAdmin;
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
/**
 * Seed bootstrap admin API key using PrismaClient directly (no tsx / npx).
 */
async function seedAdmin(options) {
    const databaseUrl = options?.databaseUrl || process.env.DATABASE_URL;
    if (!databaseUrl) {
        throw new Error('DATABASE_URL is required for seed');
    }
    const prisma = new client_1.PrismaClient({
        datasources: { db: { url: databaseUrl } },
    });
    try {
        const existingAdmin = await prisma.apiKey.findFirst({
            where: { role: 'admin', isActive: true },
        });
        if (existingAdmin) {
            await prisma.apiKey.update({
                where: { id: existingAdmin.id },
                data: { mode: 'agent' },
            });
            const port = String(options?.port ?? process.env.PORT ?? '3847');
            console.log('Admin API key already exists:');
            console.log(`  id:     ${existingAdmin.id}`);
            console.log(`  name:   ${existingAdmin.name}`);
            console.log(`  prefix: ${existingAdmin.keyPrefix}`);
            console.log('  mode:   agent (ensured)');
            console.log(`Admin panel: http://127.0.0.1:${port}/admin/`);
            console.log('Plaintext key is not recoverable.');
            console.log('Create a new admin key (printed once): gctoac key create');
            return {
                created: false,
                id: existingAdmin.id,
                name: existingAdmin.name,
                keyPrefix: existingAdmin.keyPrefix,
            };
        }
        const rawKey = options?.bootstrapKey?.trim() ||
            process.env.ADMIN_BOOTSTRAP_KEY?.trim() ||
            createApiKeySecret();
        const keyHash = hashApiKey(rawKey);
        const prefix = apiKeyPrefix(rawKey);
        const created = await prisma.apiKey.create({
            data: {
                id: (0, node_crypto_1.randomUUID)(),
                name: 'bootstrap-admin',
                keyPrefix: prefix,
                keyHash,
                role: 'admin',
                mode: 'agent',
                rateLimit: 120,
            },
        });
        const port = String(options?.port ?? process.env.PORT ?? '3847');
        console.log('Created bootstrap admin API key (store it securely — shown once):');
        console.log(`  id:   ${created.id}`);
        console.log(`  key:  ${rawKey}`);
        console.log('');
        console.log(`Admin panel: http://127.0.0.1:${port}/admin/`);
        console.log('CLI: gctoac start | gctoac status | gctoac open');
        console.log('API example:');
        console.log(`  curl -s http://127.0.0.1:${port}/admin/api/me -H "Authorization: Bearer ${rawKey}"`);
        return {
            created: true,
            id: created.id,
            name: created.name,
            keyPrefix: created.keyPrefix,
            rawKey,
        };
    }
    finally {
        await prisma.$disconnect();
    }
}
//# sourceMappingURL=seed-admin.js.map