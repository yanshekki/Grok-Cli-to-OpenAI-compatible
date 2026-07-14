import type { Response } from 'express';
import type { CreateChatCompletionDto } from '../dto/chat.dto';
import type { AuthenticatedApiKey } from '../interfaces/auth.interface';
import type { OpenAiChatCompletion } from '../interfaces/openai.interface';
export interface ChatContext {
    apiKey: AuthenticatedApiKey;
    requestId: string;
    ip?: string;
    userAgent?: string;
}
export declare class ChatService {
    createCompletion(dto: CreateChatCompletionDto, ctx: ChatContext, res?: Response): Promise<OpenAiChatCompletion | void>;
    private collectFromGrokStream;
    private buildAuditPayload;
    private runStream;
    private markFailed;
}
export declare const chatService: ChatService;
//# sourceMappingURL=chat.service.d.ts.map