export declare class StatsService {
    getDashboard(): Promise<{
        totals: {
            chats: number;
            success: number;
            errors: number;
            chats24h: number;
            activeKeys: number;
            totalKeys: number;
            documents: number;
        };
        statusBreakdown: {
            [k: string]: number;
        };
        concurrency: {
            active: number;
            max: number;
        };
        recentChats: {
            status: string;
            model: string;
            apiKey: {
                name: string;
                keyPrefix: string;
            };
            id: string;
            createdAt: Date;
            requestId: string;
            durationMs: number | null;
            policyMode: string | null;
        }[];
    }>;
}
export declare const statsService: StatsService;
//# sourceMappingURL=stats.service.d.ts.map