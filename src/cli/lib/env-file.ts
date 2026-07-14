import fs from 'node:fs';
import path from 'node:path';
import { randomBytes } from 'node:crypto';
import type { RuntimePaths } from './paths';
import { DEFAULT_PORT } from './paths';

export function readEnvFile(filePath: string): Record<string, string> {
  if (!fs.existsSync(filePath)) return {};
  const out: Record<string, string> = {};
  for (const line of fs.readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

export function writeEnvFile(filePath: string, vars: Record<string, string>): void {
  const lines = Object.entries(vars).map(([k, v]) => {
    const needsQuote = /[\s#"'\\]/.test(v) || v.includes('=');
    return needsQuote ? `${k}="${v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"` : `${k}=${v}`;
  });
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, lines.join('\n') + '\n', { mode: 0o600 });
}

export function upsertEnvFile(
  filePath: string,
  updates: Record<string, string>,
): Record<string, string> {
  const current = readEnvFile(filePath);
  const next = { ...current, ...updates };
  writeEnvFile(filePath, next);
  return next;
}

export function ensureEnvFile(paths: RuntimePaths, port = DEFAULT_PORT): Record<string, string> {
  const existing = readEnvFile(paths.envFile);
  if (Object.keys(existing).length > 0 && existing.ENCRYPTION_KEY) {
    // keep user config; ensure critical paths
    return upsertEnvFile(paths.envFile, {
      DATABASE_URL: paths.databaseUrl,
      STORAGE_DIR: paths.storageDir,
      PORT: existing.PORT || String(port),
    });
  }

  const encryptionKey = randomBytes(32).toString('base64');
  const vars: Record<string, string> = {
    NODE_ENV: 'production',
    PORT: String(port),
    HOST: '0.0.0.0',
    DATABASE_URL: paths.databaseUrl,
    ENCRYPTION_KEY: encryptionKey,
    GROK_BIN: 'grok',
    GROK_DEFAULT_MODEL: 'grok-4.5',
    GROK_DEFAULT_CWD: paths.home,
    GROK_CWD_ALLOWLIST: paths.home,
    GROK_TIMEOUT_MS: '600000',
    GROK_MAX_CONCURRENT: '4',
    GROK_ALWAYS_APPROVE: 'true',
    GROK_SAFE_MODE: 'false',
    GROK_SAFE_MAX_TURNS: '4',
    GROK_SAFE_TIMEOUT_MS: '120000',
    ADMIN_PANEL_ENABLED: 'true',
    CORS_ORIGINS: `http://localhost:${port},http://127.0.0.1:${port}`,
    RATE_LIMIT_WINDOW_MS: '60000',
    RATE_LIMIT_MAX: '120',
    BODY_LIMIT: '1mb',
    UPLOAD_MAX_BYTES: '10485760',
    DOCUMENT_DB_MAX_BYTES: '1048576',
    STORAGE_DIR: paths.storageDir,
    LOG_LEVEL: 'info',
    TRUST_PROXY: 'true',
  };
  writeEnvFile(paths.envFile, vars);
  return vars;
}

export function loadEnvIntoProcess(filePath: string): void {
  const vars = readEnvFile(filePath);
  for (const [k, v] of Object.entries(vars)) {
    if (process.env[k] === undefined) {
      process.env[k] = v;
    }
  }
}
