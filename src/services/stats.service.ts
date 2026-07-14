import { prisma } from '../config/database';
import { env } from '../config/env';
import { grokCliService } from './grok-cli.service';
import { ipBlacklistService } from './ip-blacklist.service';
import { ddosPolicyService } from './ddos-policy.service';
import { abuseGuardService } from './abuse-guard.service';
import {
  getAbuseCounters,
  getConnectionsSnapshot,
} from '../middlewares/connection-tracker';
import { DEFAULT_PORT } from '../cli/lib/paths';

export class StatsService {
  async getDashboard() {
    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const [
      totalChats,
      successChats,
      errorChats,
      chats24h,
      success24h,
      error24h,
      activeKeys,
      totalKeys,
      totalDocs,
      recentChats,
      statusGroups,
      model24h,
      banList,
    ] = await Promise.all([
      prisma.chatRequest.count(),
      prisma.chatRequest.count({ where: { status: 'success' } }),
      prisma.chatRequest.count({
        where: { status: { in: ['error', 'timeout'] } },
      }),
      prisma.chatRequest.count({ where: { createdAt: { gte: since24h } } }),
      prisma.chatRequest.count({
        where: { createdAt: { gte: since24h }, status: 'success' },
      }),
      prisma.chatRequest.count({
        where: {
          createdAt: { gte: since24h },
          status: { in: ['error', 'timeout'] },
        },
      }),
      prisma.apiKey.count({ where: { isActive: true } }),
      prisma.apiKey.count(),
      prisma.document.count({ where: { deletedAt: null } }),
      prisma.chatRequest.findMany({
        orderBy: { createdAt: 'desc' },
        take: 12,
        select: {
          id: true,
          requestId: true,
          model: true,
          status: true,
          durationMs: true,
          policyMode: true,
          createdAt: true,
          stream: true,
          apiKey: { select: { name: true, keyPrefix: true } },
        },
      }),
      prisma.chatRequest.groupBy({
        by: ['status'],
        _count: { status: true },
      }),
      prisma.chatRequest.groupBy({
        by: ['model'],
        where: { createdAt: { gte: since24h } },
        _count: { _all: true },
        orderBy: { _count: { model: 'desc' } },
        take: 6,
      }),
      ipBlacklistService.list().catch(() => []),
    ]);

    const policy = await ddosPolicyService.get().catch(() =>
      ddosPolicyService.getSync(),
    );
    const snap = getConnectionsSnapshot();
    const counters = getAbuseCounters();

    const successRateAll =
      totalChats > 0 ? Math.round((successChats / totalChats) * 1000) / 10 : 0;
    const successRate24h =
      chats24h > 0 ? Math.round((success24h / chats24h) * 1000) / 10 : 0;

    const encryptionReady = env.encryptionKey?.length === 32;

    return {
      generatedAt: new Date().toISOString(),
      totals: {
        chats: totalChats,
        success: successChats,
        errors: errorChats,
        chats24h,
        success24h,
        error24h,
        successRate: successRateAll,
        successRate24h,
        activeKeys,
        totalKeys,
        documents: totalDocs,
        bans: Array.isArray(banList) ? banList.length : 0,
        autoBanTotal: abuseGuardService.getAutoBanTotal(),
      },
      statusBreakdown: Object.fromEntries(
        statusGroups.map((g) => [g.status, g._count.status]),
      ),
      models24h: model24h.map((m) => ({
        model: m.model,
        requests: m._count._all,
      })),
      concurrency: {
        active: grokCliService.activeCount,
        max: grokCliService.maxConcurrent,
      },
      protection: {
        autoBanEnabled: policy.autoBanEnabled,
        autoAuthEnabled: policy.autoAuthEnabled,
        autoRateEnabled: policy.autoRateEnabled,
        autoConnEnabled: policy.autoConnEnabled,
        autoVelocityEnabled: policy.autoVelocityEnabled,
        proxyTrustHops: policy.proxyTrustHops,
        proxyIpSource: policy.proxyIpSource,
        rateLimitMax: policy.rateLimitMax,
        rateLimitIpMax: policy.rateLimitIpMax,
        whitelistCount: policy.whitelist?.length ?? 0,
        bans: Array.isArray(banList) ? banList.length : 0,
        rateLimitedHits: counters.rateLimitedHits,
        blockedHits: counters.blockedHits,
        activeConnections: snap.counts.active,
      },
      runtime: {
        port: env.PORT || DEFAULT_PORT,
        host: env.HOST,
        env: env.NODE_ENV,
        defaultPort: DEFAULT_PORT,
        encryptionReady,
        adminPanelEnabled: env.ADMIN_PANEL_ENABLED,
      },
      recentChats,
    };
  }
}

export const statsService = new StatsService();
