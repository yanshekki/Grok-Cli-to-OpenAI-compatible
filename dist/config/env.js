"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = require("dotenv");
const zod_1 = require("zod");
const node_path_1 = __importDefault(require("node:path"));
(0, dotenv_1.config)();
const envSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'test', 'production']).default('development'),
    PORT: zod_1.z.coerce.number().int().positive().default(3847),
    HOST: zod_1.z.string().default('0.0.0.0'),
    DATABASE_URL: zod_1.z.string().min(1),
    ENCRYPTION_KEY: zod_1.z.string().min(1),
    ADMIN_BOOTSTRAP_KEY: zod_1.z.string().optional(),
    GCTOAC_HOME: zod_1.z.string().optional(),
    GROK_BIN: zod_1.z.string().default('grok'),
    GROK_DEFAULT_MODEL: zod_1.z.string().default('grok-4.5'),
    GROK_DEFAULT_CWD: zod_1.z.string().default('.'),
    GROK_CWD_ALLOWLIST: zod_1.z.string().default(''),
    GROK_TIMEOUT_MS: zod_1.z.coerce.number().int().positive().default(600_000),
    GROK_MAX_CONCURRENT: zod_1.z.coerce.number().int().positive().default(4),
    GROK_ALWAYS_APPROVE: zod_1.z
        .string()
        .default('true')
        .transform((v) => v === 'true' || v === '1'),
    /** Force all keys into safe mode when true (overrides per-key agent). */
    GROK_SAFE_MODE: zod_1.z
        .string()
        .default('false')
        .transform((v) => v === 'true' || v === '1'),
    GROK_SAFE_MAX_TURNS: zod_1.z.coerce.number().int().positive().default(4),
    GROK_SAFE_TIMEOUT_MS: zod_1.z.coerce.number().int().positive().default(120_000),
    ADMIN_PANEL_ENABLED: zod_1.z
        .string()
        .default('true')
        .transform((v) => v === 'true' || v === '1'),
    CORS_ORIGINS: zod_1.z.string().default('http://localhost:3847,http://127.0.0.1:3847'),
    RATE_LIMIT_WINDOW_MS: zod_1.z.coerce.number().int().positive().default(60_000),
    RATE_LIMIT_MAX: zod_1.z.coerce.number().int().positive().default(120),
    BODY_LIMIT: zod_1.z.string().default('1mb'),
    UPLOAD_MAX_BYTES: zod_1.z.coerce.number().int().positive().default(10 * 1024 * 1024),
    DOCUMENT_DB_MAX_BYTES: zod_1.z.coerce.number().int().positive().default(1024 * 1024),
    STORAGE_DIR: zod_1.z.string().default('./storage'),
    LOG_LEVEL: zod_1.z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
    TRUST_PROXY: zod_1.z
        .string()
        .default('true')
        .transform((v) => v === 'true' || v === '1'),
});
function parseEncryptionKey(raw) {
    const trimmed = raw.trim();
    // base64
    try {
        const buf = Buffer.from(trimmed, 'base64');
        if (buf.length === 32)
            return buf;
    }
    catch {
        /* fall through */
    }
    // hex
    if (/^[0-9a-fA-F]{64}$/.test(trimmed)) {
        return Buffer.from(trimmed, 'hex');
    }
    throw new Error('ENCRYPTION_KEY must be a 32-byte key encoded as base64 or 64-char hex (openssl rand -base64 32)');
}
const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
    const details = parsed.error.issues
        .map((i) => `${i.path.join('.')}: ${i.message}`)
        .join('; ');
    throw new Error(`Invalid environment configuration: ${details}`);
}
const data = parsed.data;
const encryptionKey = parseEncryptionKey(data.ENCRYPTION_KEY);
const cwdAllowlist = data.GROK_CWD_ALLOWLIST
    ? data.GROK_CWD_ALLOWLIST.split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((p) => node_path_1.default.resolve(p))
    : [node_path_1.default.resolve(data.GROK_DEFAULT_CWD)];
exports.env = {
    ...data,
    encryptionKey,
    corsOrigins: data.CORS_ORIGINS.split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    cwdAllowlist,
    storageDir: node_path_1.default.resolve(data.STORAGE_DIR),
    defaultCwd: node_path_1.default.resolve(data.GROK_DEFAULT_CWD),
    isProd: data.NODE_ENV === 'production',
    isDev: data.NODE_ENV === 'development',
};
//# sourceMappingURL=env.js.map