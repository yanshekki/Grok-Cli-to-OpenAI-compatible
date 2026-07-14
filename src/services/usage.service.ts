import { prisma } from '../config/database';
import { env } from '../config/env';

export class UsageService {
  async getSummary(options?: { from?: Date; to?: Date }) {
    const to = options?.to ?? new Date();
    const from =
      options?.from ?? new Date(to.getTime() - 24 * 60 * 60 * 1000);

    const createdAt = { gte: from, lte: to };

    const [total, success, errors, byModel, byKey, keys] = await Promise.all([
      prisma.chatRequest.count({ where: { createdAt } }),
      prisma.chatRequest.count({ where: { createdAt, status: 'success' } }),
      prisma.chatRequest.count({
        where: { createdAt, status: { in: ['error', 'timeout'] } },
      }),
      prisma.chatRequest.groupBy({
        by: ['model'],
        where: { createdAt },
        _count: { _all: true },
        orderBy: { _count: { model: 'desc' } },
        take: 20,
      }),
      prisma.chatRequest.groupBy({
        by: ['apiKeyId'],
        where: { createdAt },
        _count: { _all: true },
        orderBy: { _count: { apiKeyId: 'desc' } },
        take: 50,
      }),
      prisma.apiKey.findMany({
        select: {
          id: true,
          name: true,
          keyPrefix: true,
          rateLimit: true,
          isActive: true,
          lastUsedAt: true,
          mode: true,
          role: true,
        },
      }),
    ]);

    const keyMap = new Map(keys.map((k) => [k.id, k]));
    const windowMinutes = Math.max(
      1,
      Math.round((to.getTime() - from.getTime()) / 60_000),
    );

    const perKey = byKey.map((row) => {
      const meta = keyMap.get(row.apiKeyId);
      const count = row._count._all;
      const limitPerMin = meta?.rateLimit ?? 60;
      // Approximate capacity over the window (rateLimit is per-minute chat limiter)
      const capacity = limitPerMin * windowMinutes;
      const utilization = capacity > 0 ? Math.min(1, count / capacity) : 0;
      return {
        apiKeyId: row.apiKeyId,
        name: meta?.name ?? '(deleted)',
        keyPrefix: meta?.keyPrefix ?? '',
        rateLimit: limitPerMin,
        isActive: meta?.isActive ?? false,
        mode: meta?.mode ?? 'safe',
        role: meta?.role ?? 'client',
        lastUsedAt: meta?.lastUsedAt ?? null,
        requests: count,
        capacityEstimate: capacity,
        utilization,
      };
    });

    // Include keys with zero usage in window
    for (const k of keys) {
      if (!perKey.find((p) => p.apiKeyId === k.id)) {
        perKey.push({
          apiKeyId: k.id,
          name: k.name,
          keyPrefix: k.keyPrefix,
          rateLimit: k.rateLimit,
          isActive: k.isActive,
          mode: k.mode,
          role: k.role,
          lastUsedAt: k.lastUsedAt,
          requests: 0,
          capacityEstimate: k.rateLimit * windowMinutes,
          utilization: 0,
        });
      }
    }

    perKey.sort((a, b) => b.requests - a.requests);

    return {
      from: from.toISOString(),
      to: to.toISOString(),
      windowMinutes,
      totals: {
        requests: total,
        success,
        errors,
        errorRate: total > 0 ? errors / total : 0,
      },
      byModel: byModel.map((m) => ({
        model: m.model,
        requests: m._count._all,
      })),
      perKey,
      limits: {
        globalWindowMs: env.RATE_LIMIT_WINDOW_MS,
        globalMax: env.RATE_LIMIT_MAX,
        ipMax: env.RATE_LIMIT_IP_MAX,
        chatBurstMax: env.CHAT_BURST_MAX,
        blockFailedAuthThreshold: env.BLOCK_FAILED_AUTH_THRESHOLD,
        grokMaxConcurrent: env.GROK_MAX_CONCURRENT,
      },
    };
  }
}

export const usageService = new UsageService();
