import { prisma } from '../config/database';
import { grokCliService } from './grok-cli.service';

export class StatsService {
  async getDashboard() {
    const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const [
      totalChats,
      successChats,
      errorChats,
      chats24h,
      activeKeys,
      totalKeys,
      totalDocs,
      recentChats,
      statusGroups,
    ] = await Promise.all([
      prisma.chatRequest.count(),
      prisma.chatRequest.count({ where: { status: 'success' } }),
      prisma.chatRequest.count({
        where: { status: { in: ['error', 'timeout'] } },
      }),
      prisma.chatRequest.count({ where: { createdAt: { gte: since24h } } }),
      prisma.apiKey.count({ where: { isActive: true } }),
      prisma.apiKey.count(),
      prisma.document.count({ where: { deletedAt: null } }),
      prisma.chatRequest.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
          id: true,
          requestId: true,
          model: true,
          status: true,
          durationMs: true,
          policyMode: true,
          createdAt: true,
          apiKey: { select: { name: true, keyPrefix: true } },
        },
      }),
      prisma.chatRequest.groupBy({
        by: ['status'],
        _count: { status: true },
      }),
    ]);

    return {
      totals: {
        chats: totalChats,
        success: successChats,
        errors: errorChats,
        chats24h,
        activeKeys,
        totalKeys,
        documents: totalDocs,
      },
      statusBreakdown: Object.fromEntries(
        statusGroups.map((g) => [g.status, g._count.status]),
      ),
      concurrency: {
        active: grokCliService.activeCount,
        max: grokCliService.maxConcurrent,
      },
      recentChats,
    };
  }
}

export const statsService = new StatsService();
