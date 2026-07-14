"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsService = exports.StatsService = void 0;
const database_1 = require("../config/database");
const grok_cli_service_1 = require("./grok-cli.service");
class StatsService {
    async getDashboard() {
        const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const [totalChats, successChats, errorChats, chats24h, activeKeys, totalKeys, totalDocs, recentChats, statusGroups,] = await Promise.all([
            database_1.prisma.chatRequest.count(),
            database_1.prisma.chatRequest.count({ where: { status: 'success' } }),
            database_1.prisma.chatRequest.count({
                where: { status: { in: ['error', 'timeout'] } },
            }),
            database_1.prisma.chatRequest.count({ where: { createdAt: { gte: since24h } } }),
            database_1.prisma.apiKey.count({ where: { isActive: true } }),
            database_1.prisma.apiKey.count(),
            database_1.prisma.document.count({ where: { deletedAt: null } }),
            database_1.prisma.chatRequest.findMany({
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
            database_1.prisma.chatRequest.groupBy({
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
            statusBreakdown: Object.fromEntries(statusGroups.map((g) => [g.status, g._count.status])),
            concurrency: {
                active: grok_cli_service_1.grokCliService.activeCount,
                max: grok_cli_service_1.grokCliService.maxConcurrent,
            },
            recentChats,
        };
    }
}
exports.StatsService = StatsService;
exports.statsService = new StatsService();
//# sourceMappingURL=stats.service.js.map