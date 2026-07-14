export interface ChatListQuery {
    limit?: number;
    offset?: number;
    status?: string;
    apiKeyId?: string;
    model?: string;
    q?: string;
}
export declare function parseStoredResponse(raw: string | null): {
    content: string | null;
    reasoning_content: string | null;
    raw: string | null;
};
export declare class ChatAdminService {
    list(query: ChatListQuery): Promise<{
        items: {
            id: string;
            requestId: string;
            model: string;
            stream: boolean;
            status: string;
            durationMs: number | null;
            policyMode: string | null;
            errorMessage: string | null;
            ip: string | null;
            createdAt: Date;
            apiKey: {
                name: string;
                id: string;
                keyPrefix: string;
                mode: string;
            };
            promptPreview: string;
            contentPreview: string;
            hasReasoning: boolean;
        }[];
        total: number;
        limit: number;
        offset: number;
    }>;
    getDetail(id: string, actorApiKeyId: string, ip?: string): Promise<{
        id: string;
        requestId: string;
        model: string;
        stream: boolean;
        status: string;
        durationMs: number | null;
        grokSessionId: string | null;
        policyMode: string | null;
        errorMessage: string | null;
        ip: string | null;
        userAgent: string | null;
        createdAt: Date;
        apiKey: {
            name: string;
            id: string;
            keyPrefix: string;
            role: string;
            mode: string;
        };
        documents: {
            id: string;
            originalName: string;
            mimeType: string;
            sizeBytes: number;
        }[];
        prompt: string;
        response: {
            content: string | null;
            reasoning_content: string | null;
            raw: string | null;
        };
    }>;
}
export declare const chatAdminService: ChatAdminService;
//# sourceMappingURL=chat-admin.service.d.ts.map