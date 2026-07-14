import rateLimit from 'express-rate-limit';
import type { Request } from 'express';
import { env } from '../config/env';
import { ExceptionFactory } from '../exceptions/exception.factory';

export const globalRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => {
    if (req.apiKey?.id) return `key:${req.apiKey.id}`;
    return req.ip || 'unknown';
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
    return `chat-ip:${req.ip || 'unknown'}`;
  },
  handler: () => {
    throw ExceptionFactory.rateLimited('Chat rate limit exceeded for this API key');
  },
  validate: { xForwardedForHeader: false },
});
