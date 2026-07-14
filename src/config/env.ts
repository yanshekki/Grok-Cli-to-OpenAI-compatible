import { config as loadDotenv } from 'dotenv';
import { z } from 'zod';
import path from 'node:path';

loadDotenv();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
  HOST: z.string().default('0.0.0.0'),
  DATABASE_URL: z.string().min(1),
  ENCRYPTION_KEY: z.string().min(1),
  ADMIN_BOOTSTRAP_KEY: z.string().optional(),

  GROK_BIN: z.string().default('grok'),
  GROK_DEFAULT_MODEL: z.string().default('grok-4.5'),
  GROK_DEFAULT_CWD: z.string().default('.'),
  GROK_CWD_ALLOWLIST: z.string().default(''),
  GROK_TIMEOUT_MS: z.coerce.number().int().positive().default(600_000),
  GROK_MAX_CONCURRENT: z.coerce.number().int().positive().default(4),
  GROK_ALWAYS_APPROVE: z
    .string()
    .default('true')
    .transform((v) => v === 'true' || v === '1'),

  CORS_ORIGINS: z.string().default('http://localhost:3000'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(60_000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(120),
  BODY_LIMIT: z.string().default('1mb'),
  UPLOAD_MAX_BYTES: z.coerce.number().int().positive().default(10 * 1024 * 1024),
  DOCUMENT_DB_MAX_BYTES: z.coerce.number().int().positive().default(1024 * 1024),
  STORAGE_DIR: z.string().default('./storage'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
  TRUST_PROXY: z
    .string()
    .default('true')
    .transform((v) => v === 'true' || v === '1'),
});

function parseEncryptionKey(raw: string): Buffer {
  const trimmed = raw.trim();
  // base64
  try {
    const buf = Buffer.from(trimmed, 'base64');
    if (buf.length === 32) return buf;
  } catch {
    /* fall through */
  }
  // hex
  if (/^[0-9a-fA-F]{64}$/.test(trimmed)) {
    return Buffer.from(trimmed, 'hex');
  }
  throw new Error(
    'ENCRYPTION_KEY must be a 32-byte key encoded as base64 or 64-char hex (openssl rand -base64 32)',
  );
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
      .map((p) => path.resolve(p))
  : [path.resolve(data.GROK_DEFAULT_CWD)];

export const env = {
  ...data,
  encryptionKey,
  corsOrigins: data.CORS_ORIGINS.split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  cwdAllowlist,
  storageDir: path.resolve(data.STORAGE_DIR),
  defaultCwd: path.resolve(data.GROK_DEFAULT_CWD),
  isProd: data.NODE_ENV === 'production',
  isDev: data.NODE_ENV === 'development',
};

export type Env = typeof env;
