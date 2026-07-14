import rateLimit from 'express-rate-limit';
import type { NextFunction, Request, Response } from 'express';
import { env } from '../config/env';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { ipBlacklistService } from '../services/ip-blacklist.service';
import { normalizeIp } from '../utils/ip-match';

/** In-memory failed auth tracker (persisted ban goes to IpBlacklist). */
const failedAuth = new Map<string, { count: number; resetAt: number }>();

function clientIp(req: Request): string {
  return normalizeIp(req.ip || req.socket.remoteAddress || 'unknown');
}

export function recordFailedAuth(req: Request): void {
  const ip = clientIp(req);
  const now = Date.now();
  const cur = failedAuth.get(ip);
  if (!cur || now > cur.resetAt) {
    failedAuth.set(ip, {
      count: 1,
      resetAt: now + env.BLOCK_FAILED_AUTH_WINDOW_MS,
    });
    return;
  }
  cur.count += 1;
  if (cur.count >= env.BLOCK_FAILED_AUTH_THRESHOLD) {
    failedAuth.delete(ip);
    void ipBlacklistService
      .autoBan(ip, 'Repeated failed authentication', 'auto-auth')
      .catch(() => undefined);
  }
}

export function clearFailedAuth(req: Request): void {
  failedAuth.delete(clientIp(req));
}

export function ipBlockMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  void ipBlacklistService.ensureLoaded().then(() => {
    const ip = clientIp(req);
    if (ipBlacklistService.checkAndRecord(ip)) {
      next(
        ExceptionFactory.forbidden(
          `IP ${ip} is blacklisted. Unban via Admin → DDoS Center, or: remove from ip_blacklist table.`,
        ),
      );
      return;
    }
    next();
  }).catch(next);
}

export const globalRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: (req: Request) => {
    if (!req.apiKey) return env.RATE_LIMIT_IP_MAX;
    return env.RATE_LIMIT_MAX;
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => {
    if (req.apiKey?.id) return `key:${req.apiKey.id}`;
    return `ip:${clientIp(req)}`;
  },
  handler: () => {
    throw ExceptionFactory.rateLimited();
  },
  validate: { xForwardedForHeader: false },
});

export const chatRateLimiter = rateLimit({
  windowMs: 60_000,
  max: (req: Request) => req.apiKey?.rateLimit ?? 60,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => {
    if (req.apiKey?.id) return `chat:${req.apiKey.id}`;
    return `chat-ip:${clientIp(req)}`;
  },
  handler: () => {
    throw ExceptionFactory.rateLimited('Chat rate limit exceeded for this API key');
  },
  validate: { xForwardedForHeader: false },
});

export const chatBurstLimiter = rateLimit({
  windowMs: 10_000,
  max: env.CHAT_BURST_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => {
    if (req.apiKey?.id) return `burst:${req.apiKey.id}`;
    return `burst-ip:${clientIp(req)}`;
  },
  handler: () => {
    throw ExceptionFactory.rateLimited('Chat burst rate limit exceeded');
  },
  validate: { xForwardedForHeader: false },
});
