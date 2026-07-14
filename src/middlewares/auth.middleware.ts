import type { NextFunction, Request, Response } from 'express';
import { ROLES } from '../config/constants';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { apiKeyService } from '../services/api-key.service';
import { asyncHandler } from '../utils/async-handler';

function extractBearer(req: Request): string | null {
  const header = req.header('authorization');
  if (!header) return null;
  const [scheme, token] = header.split(/\s+/);
  if (!scheme || !token) return null;
  if (scheme.toLowerCase() !== 'bearer') return null;
  return token.trim();
}

export const requireApiKey = asyncHandler(async (req, _res, next) => {
  const token = extractBearer(req);
  if (!token) {
    throw ExceptionFactory.unauthorized('Missing Authorization: Bearer <api_key>');
  }
  req.apiKey = await apiKeyService.authenticate(token);
  next();
});

export const requireAdmin = asyncHandler(async (req, _res, next) => {
  if (!req.apiKey) {
    throw ExceptionFactory.unauthorized();
  }
  if (req.apiKey.role !== ROLES.ADMIN) {
    throw ExceptionFactory.forbidden('Admin role required');
  }
  next();
});

export function optionalApiKey(_req: Request, _res: Response, next: NextFunction): void {
  next();
}
