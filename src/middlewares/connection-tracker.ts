import type { NextFunction, Request, Response } from 'express';
import { randomUUID } from 'node:crypto';

export interface TrackedConnection {
  id: string;
  ip: string;
  method: string;
  path: string;
  userAgent: string;
  startedAt: number;
  finishedAt?: number;
  durationMs?: number;
  statusCode?: number;
  apiKeyId?: string;
  apiKeyPrefix?: string;
  apiKeyName?: string;
  state: 'active' | 'finished';
}

const MAX_RECENT = 200;
const active = new Map<string, TrackedConnection>();
const recent: TrackedConnection[] = [];
let blockedHits = 0;
let rateLimitedHits = 0;

function clientIp(req: Request): string {
  return req.ip || req.socket.remoteAddress || 'unknown';
}

export function connectionTrackerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // Skip static admin assets noise
  const url = req.originalUrl || req.url || '';
  if (
    url.startsWith('/admin/') &&
    !url.startsWith('/admin/api') &&
    (url.includes('.') || url === '/admin/' || url === '/admin')
  ) {
    next();
    return;
  }
  if (url === '/health' || url === '/ready') {
    next();
    return;
  }

  const id = randomUUID();
  const entry: TrackedConnection = {
    id,
    ip: clientIp(req),
    method: req.method,
    path: url.split('?')[0] || '/',
    userAgent: String(req.headers['user-agent'] || '').slice(0, 200),
    startedAt: Date.now(),
    state: 'active',
  };
  active.set(id, entry);

  const finish = () => {
    if (!active.has(id)) return;
    active.delete(id);
    entry.finishedAt = Date.now();
    entry.durationMs = entry.finishedAt - entry.startedAt;
    entry.statusCode = res.statusCode;
    entry.state = 'finished';
    if (req.apiKey) {
      entry.apiKeyId = req.apiKey.id;
      entry.apiKeyPrefix = req.apiKey.keyPrefix;
      entry.apiKeyName = req.apiKey.name;
    }
    if (res.statusCode === 429) rateLimitedHits += 1;
    recent.unshift({ ...entry });
    if (recent.length > MAX_RECENT) recent.length = MAX_RECENT;
  };

  res.on('finish', finish);
  res.on('close', finish);
  next();
}

export function getConnectionsSnapshot() {
  // Enrich still-active with key if set mid-request
  const activeList = Array.from(active.values()).map((e) => ({ ...e }));
  return {
    active: activeList,
    recent: recent.slice(0, 100),
    counts: {
      active: activeList.length,
      recent: recent.length,
      rateLimitedHits,
      blockedHits,
    },
  };
}

export function recordBlockedHit(): void {
  blockedHits += 1;
}

export function getAbuseCounters() {
  return { rateLimitedHits, blockedHits };
}
