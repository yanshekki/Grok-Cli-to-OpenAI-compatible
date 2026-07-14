import { createHash, randomBytes, randomUUID } from 'node:crypto';
import { PrismaClient } from '@prisma/client';

export type KeyRole = 'admin' | 'user';
export type KeyMode = 'safe' | 'agent';

export interface CreatedKey {
  id: string;
  name: string;
  role: KeyRole;
  mode: KeyMode;
  keyPrefix: string;
  rawKey: string;
  rateLimit: number;
}

export interface ListedKey {
  id: string;
  name: string;
  role: string;
  mode: string;
  keyPrefix: string;
  isActive: boolean;
  rateLimit: number;
  createdAt: Date;
  lastUsedAt: Date | null;
}

function createApiKeySecret(): string {
  return `gk_live_${randomBytes(24).toString('base64url')}`;
}

function hashApiKey(rawKey: string): string {
  return createHash('sha256').update(rawKey, 'utf8').digest('hex');
}

function apiKeyPrefix(rawKey: string): string {
  return rawKey.slice(0, 16);
}

function openPrisma(databaseUrl: string): PrismaClient {
  return new PrismaClient({
    datasources: { db: { url: databaseUrl } },
  });
}

export async function createKey(options: {
  databaseUrl: string;
  name?: string;
  role?: KeyRole;
  mode?: KeyMode;
  rateLimit?: number;
  rawKey?: string;
}): Promise<CreatedKey> {
  const role: KeyRole = options.role === 'user' ? 'user' : 'admin';
  // Admin keys always agent; user defaults to safe
  const mode: KeyMode =
    role === 'admin' ? 'agent' : options.mode === 'agent' ? 'agent' : 'safe';
  const name =
    options.name?.trim() ||
    (role === 'admin' ? `admin-${new Date().toISOString().slice(0, 10)}` : 'client');
  const rateLimit = options.rateLimit ?? 120;
  const rawKey = options.rawKey?.trim() || createApiKeySecret();
  const keyHash = hashApiKey(rawKey);
  const keyPrefix = apiKeyPrefix(rawKey);

  const prisma = openPrisma(options.databaseUrl);
  try {
    const existing = await prisma.apiKey.findUnique({ where: { keyHash } });
    if (existing) {
      throw new Error('Generated key collides with an existing hash — retry');
    }

    const created = await prisma.apiKey.create({
      data: {
        id: randomUUID(),
        name,
        keyPrefix,
        keyHash,
        role,
        mode,
        rateLimit,
        isActive: true,
      },
    });

    return {
      id: created.id,
      name: created.name,
      role,
      mode,
      keyPrefix: created.keyPrefix,
      rawKey,
      rateLimit: created.rateLimit,
    };
  } finally {
    await prisma.$disconnect();
  }
}

export async function listKeys(databaseUrl: string): Promise<ListedKey[]> {
  const prisma = openPrisma(databaseUrl);
  try {
    const rows = await prisma.apiKey.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        role: true,
        mode: true,
        keyPrefix: true,
        isActive: true,
        rateLimit: true,
        createdAt: true,
        lastUsedAt: true,
      },
    });
    return rows;
  } finally {
    await prisma.$disconnect();
  }
}

export async function revokeKey(databaseUrl: string, id: string): Promise<boolean> {
  const prisma = openPrisma(databaseUrl);
  try {
    const row = await prisma.apiKey.findUnique({ where: { id } });
    if (!row) return false;
    await prisma.apiKey.update({
      where: { id },
      data: { isActive: false },
    });
    return true;
  } finally {
    await prisma.$disconnect();
  }
}
