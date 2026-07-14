import { createHash, scryptSync, timingSafeEqual, randomBytes } from 'node:crypto';
import { prisma } from '../config/database';
import { AUDIT_ACTIONS, KEY_MODES, ROLES } from '../config/constants';
import type {
  ApiKeyCreatedEntity,
  ApiKeyPublicEntity,
} from '../entities/api-key.entity';
import type {
  AuthenticatedApiKey,
  ApiKeyMode,
  ApiKeyRole,
} from '../interfaces/auth.interface';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { apiKeyPrefix, createApiKeySecret, createId } from '../utils/id';
import { auditService } from './audit.service';

function hashApiKey(rawKey: string): string {
  return createHash('sha256').update(rawKey, 'utf8').digest('hex');
}

function verifyApiKey(rawKey: string, keyHash: string): boolean {
  const computed = hashApiKey(rawKey);
  try {
    return timingSafeEqual(Buffer.from(computed, 'hex'), Buffer.from(keyHash, 'hex'));
  } catch {
    return false;
  }
}

export function scryptHash(rawKey: string, salt = randomBytes(16)): string {
  const hash = scryptSync(rawKey, salt, 32);
  return `${salt.toString('hex')}:${hash.toString('hex')}`;
}

function mapPublic(r: {
  id: string;
  name: string;
  keyPrefix: string;
  role: string;
  mode: string;
  isActive: boolean;
  rateLimit: number;
  maxTurns: number | null;
  timeoutMs: number | null;
  createdAt: Date;
  lastUsedAt: Date | null;
}): ApiKeyPublicEntity {
  return {
    id: r.id,
    name: r.name,
    keyPrefix: r.keyPrefix,
    role: r.role as ApiKeyRole,
    mode: (r.mode === KEY_MODES.AGENT ? KEY_MODES.AGENT : KEY_MODES.SAFE) as ApiKeyMode,
    isActive: r.isActive,
    rateLimit: r.rateLimit,
    maxTurns: r.maxTurns,
    timeoutMs: r.timeoutMs,
    createdAt: r.createdAt,
    lastUsedAt: r.lastUsedAt,
  };
}

export class ApiKeyService {
  async authenticate(rawKey: string): Promise<AuthenticatedApiKey> {
    if (!rawKey || rawKey.length < 16) {
      throw ExceptionFactory.unauthorized();
    }

    const keyHash = hashApiKey(rawKey);
    const record = await prisma.apiKey.findUnique({ where: { keyHash } });

    if (!record || !record.isActive) {
      throw ExceptionFactory.unauthorized();
    }

    void prisma.apiKey
      .update({
        where: { id: record.id },
        data: { lastUsedAt: new Date() },
      })
      .catch(() => undefined);

    return {
      id: record.id,
      name: record.name,
      keyPrefix: record.keyPrefix,
      role: record.role as ApiKeyRole,
      mode: (record.mode === KEY_MODES.AGENT ? KEY_MODES.AGENT : KEY_MODES.SAFE) as ApiKeyMode,
      rateLimit: record.rateLimit,
      isActive: record.isActive,
      maxTurns: record.maxTurns,
      timeoutMs: record.timeoutMs,
    };
  }

  async create(input: {
    name: string;
    role?: ApiKeyRole;
    mode?: ApiKeyMode;
    rateLimit?: number;
    maxTurns?: number | null;
    timeoutMs?: number | null;
    actorApiKeyId?: string;
    ip?: string;
    rawKey?: string;
  }): Promise<ApiKeyCreatedEntity> {
    const key = input.rawKey ?? createApiKeySecret();
    const keyHash = hashApiKey(key);
    const prefix = apiKeyPrefix(key);

    const existing = await prisma.apiKey.findUnique({ where: { keyHash } });
    if (existing) {
      throw ExceptionFactory.validation('API key already exists');
    }

    const id = createId();
    const mode =
      input.role === ROLES.ADMIN
        ? KEY_MODES.AGENT
        : input.mode === KEY_MODES.AGENT
          ? KEY_MODES.AGENT
          : KEY_MODES.SAFE;

    const created = await prisma.apiKey.create({
      data: {
        id,
        name: input.name,
        keyPrefix: prefix,
        keyHash,
        role: input.role ?? ROLES.CLIENT,
        mode,
        rateLimit: input.rateLimit ?? 60,
        maxTurns: input.maxTurns ?? null,
        timeoutMs: input.timeoutMs ?? null,
      },
    });

    await auditService.log({
      apiKeyId: input.actorApiKeyId ?? created.id,
      action: AUDIT_ACTIONS.API_KEY_CREATE,
      resource: 'api_key',
      resourceId: created.id,
      meta: {
        name: created.name,
        role: created.role,
        mode: created.mode,
        keyPrefix: prefix,
      },
      ip: input.ip,
    });

    return { ...mapPublic(created), key };
  }

  async list(): Promise<ApiKeyPublicEntity[]> {
    const rows = await prisma.apiKey.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return rows.map(mapPublic);
  }

  async update(
    id: string,
    input: {
      name?: string;
      role?: ApiKeyRole;
      mode?: ApiKeyMode;
      rateLimit?: number;
      isActive?: boolean;
      maxTurns?: number | null;
      timeoutMs?: number | null;
    },
    actorApiKeyId: string,
    ip?: string,
  ): Promise<ApiKeyPublicEntity> {
    const existing = await prisma.apiKey.findUnique({ where: { id } });
    if (!existing) {
      throw ExceptionFactory.notFound('API key');
    }

    const updated = await prisma.apiKey.update({
      where: { id },
      data: {
        ...(input.name !== undefined ? { name: input.name } : {}),
        ...(input.role !== undefined ? { role: input.role } : {}),
        ...(input.mode !== undefined ? { mode: input.mode } : {}),
        ...(input.rateLimit !== undefined ? { rateLimit: input.rateLimit } : {}),
        ...(input.isActive !== undefined ? { isActive: input.isActive } : {}),
        ...(input.maxTurns !== undefined ? { maxTurns: input.maxTurns } : {}),
        ...(input.timeoutMs !== undefined ? { timeoutMs: input.timeoutMs } : {}),
      },
    });

    await auditService.log({
      apiKeyId: actorApiKeyId,
      action: AUDIT_ACTIONS.API_KEY_UPDATE,
      resource: 'api_key',
      resourceId: id,
      meta: input as Record<string, unknown>,
      ip,
    });

    return mapPublic(updated);
  }

  async revoke(id: string, actorApiKeyId: string, ip?: string): Promise<void> {
    const existing = await prisma.apiKey.findUnique({ where: { id } });
    if (!existing) {
      throw ExceptionFactory.notFound('API key');
    }

    await prisma.apiKey.update({
      where: { id },
      data: { isActive: false },
    });

    await auditService.log({
      apiKeyId: actorApiKeyId,
      action: AUDIT_ACTIONS.API_KEY_DELETE,
      resource: 'api_key',
      resourceId: id,
      meta: { keyPrefix: existing.keyPrefix },
      ip,
    });
  }
}

export const apiKeyService = new ApiKeyService();
export { hashApiKey, verifyApiKey };
