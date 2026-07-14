import type { Request } from 'express';
import { normalizeIp } from './ip-match';

/**
 * How to resolve the real client IP when behind reverse proxies.
 * - auto: CF-Connecting-IP → True-Client-IP → X-Real-IP → Express req.ip / XFF → socket
 * - cloudflare: prefer CF-Connecting-IP / True-Client-IP
 * - nginx: prefer X-Real-IP then X-Forwarded-For
 * - x-forwarded-for: use Express trust-proxy / XFF chain
 * - socket: always use TCP peer (ignore headers)
 */
export type ProxyIpSource =
  | 'auto'
  | 'cloudflare'
  | 'nginx'
  | 'x-forwarded-for'
  | 'socket';

export type ProxyIpConfig = {
  /** Express trust proxy hops; 0 = do not trust any proxy headers */
  trustHops: number;
  source: ProxyIpSource;
};

const DEFAULT_CFG: ProxyIpConfig = {
  trustHops: 1,
  source: 'auto',
};

let runtimeCfg: ProxyIpConfig = { ...DEFAULT_CFG };

export function getProxyIpConfig(): ProxyIpConfig {
  return runtimeCfg;
}

export function setProxyIpConfig(partial: Partial<ProxyIpConfig>): ProxyIpConfig {
  runtimeCfg = {
    trustHops: clampHops(
      partial.trustHops != null ? partial.trustHops : runtimeCfg.trustHops,
    ),
    source: normalizeSource(partial.source ?? runtimeCfg.source),
  };
  return runtimeCfg;
}

export function resetProxyIpConfig(cfg?: ProxyIpConfig): void {
  runtimeCfg = cfg
    ? {
        trustHops: clampHops(cfg.trustHops),
        source: normalizeSource(cfg.source),
      }
    : { ...DEFAULT_CFG };
}

function clampHops(n: number): number {
  if (!Number.isFinite(n)) return 1;
  return Math.max(0, Math.min(10, Math.floor(n)));
}

function normalizeSource(s: unknown): ProxyIpSource {
  const v = String(s || 'auto');
  if (
    v === 'cloudflare' ||
    v === 'nginx' ||
    v === 'x-forwarded-for' ||
    v === 'socket' ||
    v === 'auto'
  ) {
    return v;
  }
  return 'auto';
}

function header(req: Request, name: string): string {
  const raw = req.headers[name];
  if (!raw) return '';
  const v = Array.isArray(raw) ? raw[0] : raw;
  return String(v || '').trim();
}

function firstIpFromList(value: string): string {
  // "client, proxy1, proxy2"
  const part = value.split(',')[0]?.trim() || '';
  return part;
}

/** Prefer middleware-resolved clientIp; fall back to live resolve. */
export function requestIp(req: Request): string {
  if (req.clientIp) return req.clientIp;
  return getClientIp(req);
}

/**
 * Resolve client IP for rate-limit / ban / audit / DDoS.
 * Always returns a normalized string (may be "unknown").
 */
export function getClientIp(req: Request, override?: Partial<ProxyIpConfig>): string {
  const cfg: ProxyIpConfig = {
    trustHops: clampHops(override?.trustHops ?? runtimeCfg.trustHops),
    source: normalizeSource(override?.source ?? runtimeCfg.source),
  };

  const socketRaw =
    req.socket?.remoteAddress ||
    (req.connection as { remoteAddress?: string } | undefined)?.remoteAddress ||
    '';
  const socketIp = socketRaw ? normalizeIp(socketRaw) : '';

  if (cfg.source === 'socket' || cfg.trustHops <= 0) {
    return socketIp || 'unknown';
  }

  const pickHeader = (name: string): string | null => {
    const h = header(req, name);
    if (!h) return null;
    const ip = normalizeIp(firstIpFromList(h));
    return ip && ip !== 'unknown' ? ip : null;
  };

  // Cloudflare
  if (cfg.source === 'cloudflare' || cfg.source === 'auto') {
    const cf =
      pickHeader('cf-connecting-ip') || pickHeader('true-client-ip');
    if (cf) return cf;
    if (cfg.source === 'cloudflare') {
      // fall through to XFF / express when CF header missing
    }
  }

  // nginx (and similar): X-Real-IP is set by the proxy to the client
  if (cfg.source === 'nginx' || cfg.source === 'auto') {
    const real = pickHeader('x-real-ip');
    if (real) return real;
  }

  // Express trust proxy populates req.ip from X-Forwarded-For
  if (
    cfg.source === 'x-forwarded-for' ||
    cfg.source === 'auto' ||
    cfg.source === 'nginx' ||
    cfg.source === 'cloudflare'
  ) {
    if (req.ip) {
      const fromExpress = normalizeIp(req.ip);
      if (fromExpress && fromExpress !== 'unknown') return fromExpress;
    }
    const xff = header(req, 'x-forwarded-for');
    if (xff) {
      // With N trusted hops, client is typically the left-most entry
      // when proxies append. Express already handles this for req.ip;
      // here we use left-most as a last-resort parse.
      const parts = xff
        .split(',')
        .map((s) => normalizeIp(s.trim()))
        .filter(Boolean);
      if (parts.length) {
        // If hops=1, left-most is original client when format is client, proxy
        return parts[0]!;
      }
    }
  }

  return socketIp || 'unknown';
}

/** Express `trust proxy` setting from hops count. */
export function expressTrustProxySetting(hops: number): boolean | number {
  const n = clampHops(hops);
  if (n <= 0) return false;
  return n;
}
