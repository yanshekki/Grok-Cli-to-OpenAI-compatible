import type { GrokResponseMeta } from './grok-response-meta.interface';

export interface OpenAiChatCompletionChunk {
  id: string;
  object: 'chat.completion.chunk';
  created: number;
  model: string;
  choices: Array<{
    index: number;
    delta: {
      role?: 'assistant';
      content?: string;
      /** DeepSeek-compatible streaming CoT */
      reasoning_content?: string;
      /** Grok alias of reasoning_content */
      thought?: string;
    };
    finish_reason: 'stop' | 'length' | 'content_filter' | null;
  }>;
  /** Present on final chunk when available */
  grok?: GrokResponseMeta;
}
