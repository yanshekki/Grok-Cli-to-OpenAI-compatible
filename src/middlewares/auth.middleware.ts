import type { NextFunction, Request, Response } from 'express';
import { ROLES } from '../config/constants';
import { ExceptionFactory } from '../exceptions/exception.factory';
import {
  clearFailedAuth,
  recordFailedAuth,
} from './rate-limit.middleware';
import { apiKeyService } from '../services/api-key.service';
import { asyncHandler } from '../utils/async-handler';
import { ipAllowed } from '../utils/ip-match';
import { requestIp } from '../utils/client-ip';

function extractBearer(req: Request): string | null {
  const header = req.header('authorization');
  if (!header) return null;
  const [scheme, token] = header.split(/\s+/);
  if (!scheme || !token) return null;
  if (scheme.toLowerCase() !== 'bearer') return null;
  return token.trim();
}

function clientIp(req: Request): string {
  return requestIp(req);
}

function normalizeRole(role: string | undefined): string {
  return String(role || '')
    .trim()
    .toLowerCase();
}

export const requireApiKey = asyncHandler(async (req, _res, next) => {
  const token = extractBearer(req);
  if (!token) {
    recordFailedAuth(req);
    throw ExceptionFactory.unauthorized('Missing Authorization: Bearer <api_key>');
  }
  try {
    req.apiKey = await apiKeyService.authenticate(token);
    clearFailedAuth(req);
  } catch (err) {
    recordFailedAuth(req);
    throw err;
  }

  // Per-key IP whitelist (empty / null = allow all)
  const wl = req.apiKey.ipWhitelist;
  if (Array.isArray(wl) && wl.length > 0) {
    const ip = clientIp(req);
    if (!ipAllowed(ip, wl)) {
      throw ExceptionFactory.forbidden(
        `API key not allowed from IP ${ip} (whitelist enforced). Clear whitelist or add this IP.`,
      );
    }
  }

  next();
});

export const requireAdmin = asyncHandler(async (req, _res, next) => {
  if (!req.apiKey) {
    throw ExceptionFactory.unauthorized();
  }
  if (normalizeRole(req.apiKey.role) !== ROLES.ADMIN) {
    throw ExceptionFactory.forbidden(
      `Admin role required (this key has role "${req.apiKey.role}"). Create an admin key: gctoac key create`,
    );
  }
  next();
});

export function optionalApiKey(_req: Request, _res: Response, next: NextFunction): void {
  next();
}
