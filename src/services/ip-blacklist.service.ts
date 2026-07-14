import { prisma } from '../config/database';
import { ipMatchesExact, normalizeIp } from '../utils/ip-match';
import { recordBlockedHit } from '../middlewares/connection-tracker';
import { env } from '../config/env';
import { createId } from '../utils/id';

/** Memory set of currently banned IPs (exact). */
const memoryBan = new Map<string, { expiresAt: number | null; reason?: string }>();

export class IpBlacklistService {
  private loaded = false;

  async ensureLoaded(): Promise<void> {
    if (this.loaded) return;
    await this.reload();
    this.loaded = true;
  }

  async reload(): Promise<void> {
    const now = new Date();
    const rows = await prisma.ipBlacklist.findMany();
    memoryBan.clear();
    for (const r of rows) {
      if (r.expiresAt && r.expiresAt <= now) {
        void prisma.ipBlacklist.delete({ where: { id: r.id } }).catch(() => undefined);
        continue;
      }
      memoryBan.set(normalizeIp(r.ip), {
        expiresAt: r.expiresAt ? r.expiresAt.getTime() : null,
        reason: r.reason ?? undefined,
      });
    }
  }

  isBlocked(ip: string): boolean {
    const now = Date.now();
    for (const [banned, hit] of memoryBan.entries()) {
      if (hit.expiresAt != null && now >= hit.expiresAt) {
        memoryBan.delete(banned);
        void prisma.ipBlacklist.deleteMany({ where: { ip: banned } }).catch(() => undefined);
        continue;
      }
      if (ipMatchesExact(ip, banned)) return true;
    }
    return false;
  }

  checkAndRecord(ip: string): boolean {
    const blocked = this.isBlocked(ip);
    if (blocked) recordBlockedHit();
    return blocked;
  }

  async ban(input: {
    ip: string;
    reason?: string;
    source?: string;
    expiresAt?: Date | null;
    createdBy?: string;
  }) {
    const ip = normalizeIp(input.ip);
    if (!ip || ip === 'unknown') {
      throw new Error('Invalid IP');
    }
    const expiresAt = input.expiresAt ?? null;
    const row = await prisma.ipBlacklist.upsert({
      where: { ip },
      create: {
        id: createId(),
        ip,
        reason: input.reason ?? null,
        source: input.source ?? 'manual',
        expiresAt,
        createdBy: input.createdBy ?? null,
      },
      update: {
        reason: input.reason ?? null,
        source: input.source ?? 'manual',
        expiresAt,
        createdBy: input.createdBy ?? null,
      },
    });
    memoryBan.set(ip, {
      expiresAt: expiresAt ? expiresAt.getTime() : null,
      reason: input.reason,
    });
    return row;
  }

  async unban(ip: string) {
    const key = normalizeIp(ip);
    memoryBan.delete(key);
    await prisma.ipBlacklist.deleteMany({ where: { ip: key } });
  }

  async list() {
    await this.ensureLoaded();
    const now = new Date();
    const rows = await prisma.ipBlacklist.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return rows.filter((r) => !r.expiresAt || r.expiresAt > now);
  }

  /** Auto temporary ban (auth abuse). */
  async autoBan(ip: string, reason: string, source: string): Promise<void> {
    const expiresAt = new Date(Date.now() + env.BLOCK_DURATION_MS);
    await this.ban({
      ip,
      reason,
      source,
      expiresAt,
    });
  }
}

export const ipBlacklistService = new IpBlacklistService();
