import type { OpenAiChatMessage } from './open-ai-chat-message.interface';

export interface OpenAiChatCompletionRequest {
  model: string;
  messages: OpenAiChatMessage[];
  stream?: boolean;
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  n?: number;
  stop?: string | string[];
  user?: string;
  /** Extension: Grok working directory */
  cwd?: string;
  /** Extension: Grok session id for multi-turn */
  session_id?: string;
  /** Extension: attached document ids */
  document_ids?: string[];
  /**
   * Extension: include chain-of-thought as reasoning_content (DeepSeek-compatible).
   * Default true. When false, thought events are dropped from the response.
   */
  include_reasoning?: boolean;
}
