"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdKeyCreate = cmdKeyCreate;
exports.cmdKeyList = cmdKeyList;
exports.cmdKeyRevoke = cmdKeyRevoke;
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const db_keys_1 = require("../lib/db-keys");
const print_1 = require("../lib/print");
function printCreatedKey(key, port) {
    (0, print_1.ok)('API key created (store it securely — shown once):');
    (0, print_1.info)(`  id:     ${key.id}`);
    (0, print_1.info)(`  name:   ${key.name}`);
    (0, print_1.info)(`  role:   ${key.role}`);
    (0, print_1.info)(`  mode:   ${key.mode}`);
    (0, print_1.info)(`  prefix: ${key.keyPrefix}`);
    (0, print_1.info)(`  key:    ${key.rawKey}`);
    (0, print_1.info)('');
    (0, print_1.info)(`Admin:  http://127.0.0.1:${port}/admin/`);
    (0, print_1.info)(`Paste the key above into the Admin panel login.`);
    (0, print_1.info)('');
    (0, print_1.info)('Example:');
    (0, print_1.info)(`  curl -s http://127.0.0.1:${port}/admin/api/me -H "Authorization: Bearer ${key.rawKey}"`);
}
async function cmdKeyCreate(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const env = (0, env_file_1.ensureEnvFile)(paths);
    (0, env_file_1.loadEnvIntoProcess)(paths.envFile);
    const role = opts.role === 'user' ? 'user' : 'admin';
    const mode = opts.mode === 'agent' ? 'agent' : 'safe';
    const databaseUrl = env.DATABASE_URL || paths.databaseUrl;
    const port = env.PORT || paths_1.DEFAULT_PORT;
    const key = await (0, db_keys_1.createKey)({
        databaseUrl,
        name: opts.name,
        role,
        mode,
        rateLimit: opts.rateLimit,
    });
    printCreatedKey(key, port);
}
async function cmdKeyList(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const env = (0, env_file_1.ensureEnvFile)(paths);
    (0, env_file_1.loadEnvIntoProcess)(paths.envFile);
    const databaseUrl = env.DATABASE_URL || paths.databaseUrl;
    const keys = await (0, db_keys_1.listKeys)(databaseUrl);
    if (keys.length === 0) {
        (0, print_1.warn)('No API keys. Create one: gctoac key create');
        return;
    }
    (0, print_1.info)(`${'id'.padEnd(38)} ${'role'.padEnd(7)} ${'mode'.padEnd(7)} ${'active'.padEnd(7)} ${'prefix'.padEnd(18)} name`);
    for (const k of keys) {
        (0, print_1.info)(`${k.id.padEnd(38)} ${k.role.padEnd(7)} ${k.mode.padEnd(7)} ${String(k.isActive).padEnd(7)} ${k.keyPrefix.padEnd(18)} ${k.name}`);
    }
    (0, print_1.info)('');
    (0, print_1.info)('Plaintext keys are not stored. Create a new one: gctoac key create');
}
async function cmdKeyRevoke(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const env = (0, env_file_1.ensureEnvFile)(paths);
    (0, env_file_1.loadEnvIntoProcess)(paths.envFile);
    const databaseUrl = env.DATABASE_URL || paths.databaseUrl;
    const okRevoke = await (0, db_keys_1.revokeKey)(databaseUrl, opts.id);
    if (!okRevoke) {
        (0, print_1.fail)(`Key not found: ${opts.id}`);
        process.exitCode = 1;
        return;
    }
    (0, print_1.ok)(`Revoked key ${opts.id}`);
}
//# sourceMappingURL=key.js.map