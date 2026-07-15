import { createHash, scryptSync, timingSafeEqual, randomBytes } from 'node:crypto';
import { prisma } from '../config/database';
import { AUDIT_ACTIONS, KEY_MODES, ROLES } from '../config/constants';
import type { ApiKeyCreatedEntity, ApiKeyPublicEntity } from '../entities';
import type {
  AuthenticatedApiKey,
  ApiKeyMode,
  ApiKeyRole,
} from '../interfaces';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { apiKeyPrefix, createApiKeySecret, createId } from '../utils/id';
import { parseIpList, serializeIpList } from '../utils/ip-match';
import { auditService } from './audit.service';
import { normalizeApiKeyRole } from './role-normalize.service';

/** Legacy: plain SHA-256 hex (64 chars). */
export function hashApiKeySha256(rawKey: string): string {
  return createHash('sha256').update(rawKey, 'utf8').digest('hex');
}

/** Preferred: scrypt$saltHex$hashHex */
export function scryptHash(rawKey: string, salt = randomBytes(16)): string {
  const hash = scryptSync(rawKey, salt, 32);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

/** New keys: scrypt. Prefer scryptHash for clarity. */
export function hashApiKey(rawKey: string): string {
  return scryptHash(rawKey);
}

export function verifyApiKey(rawKey: string, keyHash: string): boolean {
  try {
    if (keyHash.startsWith('scrypt$')) {
      const parts = keyHash.split('$');
      if (parts.length !== 3) return false;
      const salt = Buffer.from(parts[1]!, 'hex');
      const expected = Buffer.from(parts[2]!, 'hex');
      const actual = scryptSync(rawKey, salt, expected.length);
      return timingSafeEqual(actual, expected);
    }
    // Legacy SHA-256
    const computed = hashApiKeySha256(rawKey);
    return timingSafeEqual(Buffer.from(computed, 'hex'), Buffer.from(keyHash, 'hex'));
  } catch {
    return false;
  }
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
  ipWhitelist?: string | null;
  createdAt: Date;
  lastUsedAt: Date | null;
}): ApiKeyPublicEntity {
  return {
    id: r.id,
    name: r.name,
    keyPrefix: r.keyPrefix,
    role: normalizeApiKeyRole(r.role) as ApiKeyRole,
    mode: (r.mode === KEY_MODES.AGENT ? KEY_MODES.AGENT : KEY_MODES.SAFE) as ApiKeyMode,
    isActive: r.isActive,
    rateLimit: r.rateLimit,
    maxTurns: r.maxTurns,
    timeoutMs: r.timeoutMs,
    ipWhitelist: parseIpList(r.ipWhitelist),
    createdAt: r.createdAt,
    lastUsedAt: r.lastUsedAt,
  };
}

export class ApiKeyService {
  async authenticate(rawKey: string): Promise<AuthenticatedApiKey> {
    if (!rawKey || rawKey.length < 16) {
      throw ExceptionFactory.unauthorized();
    }

    // Prefer O(1) legacy SHA-256 lookup; scrypt rows match via keyPrefix + verify
    const shaHash = hashApiKeySha256(rawKey);
    let record = await prisma.apiKey.findUnique({ where: { keyHash: shaHash } });

    if (!record) {
      const prefix = apiKeyPrefix(rawKey);
      const candidates = await prisma.apiKey.findMany({
        where: { keyPrefix: prefix, isActive: true },
        take: 20,
      });
      for (const row of candidates) {
        if (verifyApiKey(rawKey, row.keyHash)) {
          record = row;
          break;
        }
      }
    }

    if (!record || !record.isActive) {
      throw ExceptionFactory.unauthorized();
    }

    // Opportunistic migrate legacy SHA-256 → scrypt
    if (!record.keyHash.startsWith('scrypt$')) {
      const upgraded = scryptHash(rawKey);
      void prisma.apiKey
        .update({
          where: { id: record.id },
          data: { keyHash: upgraded, lastUsedAt: new Date() },
        })
        .catch(() => undefined);
    } else {
      void prisma.apiKey
        .update({
          where: { id: record.id },
          data: { lastUsedAt: new Date() },
        })
        .catch(() => undefined);
    }

    return {
      id: record.id,
      name: record.name,
      keyPrefix: record.keyPrefix,
      role: normalizeApiKeyRole(record.role) as ApiKeyRole,
      mode: (record.mode === KEY_MODES.AGENT ? KEY_MODES.AGENT : KEY_MODES.SAFE) as ApiKeyMode,
      rateLimit: record.rateLimit,
      isActive: record.isActive,
      maxTurns: record.maxTurns,
      timeoutMs: record.timeoutMs,
      ipWhitelist: parseIpList(record.ipWhitelist),
    };
  }

  async create(input: {
    name: string;
    role?: ApiKeyRole;
    mode?: ApiKeyMode;
    rateLimit?: number;
    maxTurns?: number | null;
    timeoutMs?: number | null;
    ipWhitelist?: string[];
    actorApiKeyId?: string;
    ip?: string;
    rawKey?: string;
  }): Promise<ApiKeyCreatedEntity> {
    const key = input.rawKey ?? createApiKeySecret();
    const keyHash = scryptHash(key);
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

    const wl = input.ipWhitelist ? parseIpList(input.ipWhitelist) : [];

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
        ipWhitelist: serializeIpList(wl),
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
        ipWhitelist: wl,
      },
      ip: input.ip,
    });

    return { ...mapPublic(created), key };
  }

  async list(query?: {
    q?: string;
    role?: string;
    mode?: string;
    isActive?: boolean;
    limit?: number;
    offset?: number;
    all?: boolean;
  }): Promise<{ data: ApiKeyPublicEntity[]; total: number; limit: number; offset: number }> {
    const where: {
      role?: string;
      mode?: string;
      isActive?: boolean;
      OR?: Array<Record<string, unknown>>;
    } = {};
    if (query?.role) where.role = query.role;
    if (query?.mode) where.mode = query.mode;
    if (query?.isActive !== undefined) where.isActive = query.isActive;
    const q = query?.q?.trim();
    if (q) {
      where.OR = [
        { name: { contains: q } },
        { keyPrefix: { contains: q } },
      ];
    }

    const total = await prisma.apiKey.count({ where });
    if (query?.all) {
      const rows = await prisma.apiKey.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      });
      return {
        data: rows.map(mapPublic),
        total,
        limit: total,
        offset: 0,
      };
    }

    const limit = Math.min(Math.max(query?.limit ?? 20, 1), 200);
    const offset = Math.max(query?.offset ?? 0, 0);
    const rows = await prisma.apiKey.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limit,
      skip: offset,
    });
    return {
      data: rows.map(mapPublic),
      total,
      limit,
      offset,
    };
  }

  /** Load key identity for admin playground (no raw secret). */
  async getByIdForAuth(id: string): Promise<AuthenticatedApiKey> {
    const record = await prisma.apiKey.findUnique({ where: { id } });
    if (!record || !record.isActive) {
      throw ExceptionFactory.notFound('API key');
    }
    return {
      id: record.id,
      name: record.name,
      keyPrefix: record.keyPrefix,
      role: normalizeApiKeyRole(record.role) as ApiKeyRole,
      mode: (record.mode === KEY_MODES.AGENT
        ? KEY_MODES.AGENT
        : KEY_MODES.SAFE) as ApiKeyMode,
      rateLimit: record.rateLimit,
      isActive: record.isActive,
      maxTurns: record.maxTurns,
      timeoutMs: record.timeoutMs,
      ipWhitelist: parseIpList(record.ipWhitelist),
    };
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
      ipWhitelist?: string[] | null;
    },
    actorApiKeyId: string,
    ip?: string,
  ): Promise<ApiKeyPublicEntity> {
    const existing = await prisma.apiKey.findUnique({ where: { id } });
    if (!existing) {
      throw ExceptionFactory.notFound('API key');
    }

    const data: Record<string, unknown> = {
      ...(input.name !== undefined ? { name: input.name } : {}),
      ...(input.role !== undefined ? { role: input.role } : {}),
      ...(input.mode !== undefined ? { mode: input.mode } : {}),
      ...(input.rateLimit !== undefined ? { rateLimit: input.rateLimit } : {}),
      ...(input.isActive !== undefined ? { isActive: input.isActive } : {}),
      ...(input.maxTurns !== undefined ? { maxTurns: input.maxTurns } : {}),
      ...(input.timeoutMs !== undefined ? { timeoutMs: input.timeoutMs } : {}),
    };
    if (input.ipWhitelist !== undefined) {
      data.ipWhitelist = serializeIpList(
        input.ipWhitelist === null ? [] : parseIpList(input.ipWhitelist),
      );
    }

    const updated = await prisma.apiKey.update({
      where: { id },
      data,
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
