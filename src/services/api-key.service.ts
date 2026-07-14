import { createHash, scryptSync, timingSafeEqual, randomBytes } from 'node:crypto';
import { prisma } from '../config/database';
import { AUDIT_ACTIONS, ROLES } from '../config/constants';
import type {
  ApiKeyCreatedEntity,
  ApiKeyPublicEntity,
} from '../entities/api-key.entity';
import type { AuthenticatedApiKey, ApiKeyRole } from '../interfaces/auth.interface';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { apiKeyPrefix, createApiKeySecret, createId } from '../utils/id';
import { auditService } from './audit.service';

function hashApiKey(rawKey: string): string {
  // scrypt with fixed salt derived from key prefix material for lookup-friendly uniqueness
  // We store hash of full key; lookup uses SHA-256 fingerprint as unique keyHash
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

/** Optional slow hash for defense-in-depth when storing (not used for lookup) */
export function scryptHash(rawKey: string, salt = randomBytes(16)): string {
  const hash = scryptSync(rawKey, salt, 32);
  return `${salt.toString('hex')}:${hash.toString('hex')}`;
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

    // fire-and-forget last used
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
      rateLimit: record.rateLimit,
      isActive: record.isActive,
    };
  }

  async create(input: {
    name: string;
    role?: ApiKeyRole;
    rateLimit?: number;
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
    const created = await prisma.apiKey.create({
      data: {
        id,
        name: input.name,
        keyPrefix: prefix,
        keyHash,
        role: input.role ?? ROLES.CLIENT,
        rateLimit: input.rateLimit ?? 60,
      },
    });

    await auditService.log({
      apiKeyId: input.actorApiKeyId ?? created.id,
      action: AUDIT_ACTIONS.API_KEY_CREATE,
      resource: 'api_key',
      resourceId: created.id,
      meta: { name: created.name, role: created.role, keyPrefix: prefix },
      ip: input.ip,
    });

    return {
      id: created.id,
      name: created.name,
      keyPrefix: created.keyPrefix,
      role: created.role as ApiKeyRole,
      isActive: created.isActive,
      rateLimit: created.rateLimit,
      createdAt: created.createdAt,
      lastUsedAt: created.lastUsedAt,
      key,
    };
  }

  async list(): Promise<ApiKeyPublicEntity[]> {
    const rows = await prisma.apiKey.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return rows.map((r) => ({
      id: r.id,
      name: r.name,
      keyPrefix: r.keyPrefix,
      role: r.role as ApiKeyRole,
      isActive: r.isActive,
      rateLimit: r.rateLimit,
      createdAt: r.createdAt,
      lastUsedAt: r.lastUsedAt,
    }));
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

// re-export verify for tests
export { hashApiKey, verifyApiKey };
