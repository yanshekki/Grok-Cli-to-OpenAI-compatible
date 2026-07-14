import type { GrokResponseMeta, OpenAiChatCompletion, OpenAiChatCompletionChunk, OpenAiModelList } from '../interfaces/openai.interface';
import type { GrokJsonResult } from '../interfaces/grok.interface';
export interface MapCompletionOptions {
    completionId?: string;
    reasoningContent?: string | null;
    includeReasoning?: boolean;
    grok?: GrokResponseMeta;
}
export declare function mapGrokToChatCompletion(model: string, result: GrokJsonResult, options?: MapCompletionOptions): OpenAiChatCompletion;
export declare function mapTextDeltaChunk(model: string, content: string, completionId: string, created: number): OpenAiChatCompletionChunk;
/**
 * DeepSeek-compatible reasoning stream chunk.
 * Also sets Grok alias `thought` to the same string.
 */
export declare function mapReasoningDeltaChunk(model: string, reasoningContent: string, completionId: string, created: number, includeGrokAlias?: boolean): OpenAiChatCompletionChunk;
export declare function mapRoleChunk(model: string, completionId: string, created: number): OpenAiChatCompletionChunk;
export declare function mapFinishChunk(model: string, completionId: string, created: number, stopReason?: string, grok?: GrokResponseMeta): OpenAiChatCompletionChunk;
export declare function mapModelsList(models: string[]): OpenAiModelList;
/**
 * Build prompt from messages.
 * Multi-turn: uses role + content only (DeepSeek-style: prior reasoning_content not required).
 * If an assistant message only has reasoning_content, it is ignored unless content is empty
 * and we fall back (should not normally happen).
 */
export declare function messagesToPrompt(messages: Array<{
    role: string;
    content: string;
    reasoning_content?: string | null;
}>): string;
//# sourceMappingURL=openai-mapper.d.ts.map