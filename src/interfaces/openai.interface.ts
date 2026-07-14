export type OpenAiRole = 'system' | 'user' | 'assistant' | 'tool' | 'function';

export interface OpenAiChatMessage {
  role: OpenAiRole | string;
  content: string | null | Array<Record<string, unknown>>;
  /** DeepSeek-compatible: prior turn reasoning (optional; often ignored in multi-turn) */
  reasoning_content?: string | null;
  name?: string;
}

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

/** Grok-native metadata (extension; ignored by standard OpenAI clients) */
export interface GrokResponseMeta {
  sessionId?: string;
  stopReason?: string;
  requestId?: string;
}

export interface OpenAiChatCompletionChoice {
  index: number;
  message: {
    role: 'assistant';
    content: string;
    /** DeepSeek-compatible chain-of-thought */
    reasoning_content?: string | null;
    /**
     * Grok alias of reasoning_content (same text).
     * Kept for Grok-oriented clients; mainstream clients use reasoning_content.
     */
    thought?: string | null;
  };
  finish_reason: 'stop' | 'length' | 'content_filter' | null;
  logprobs: null;
}

export interface OpenAiChatCompletion {
  id: string;
  object: 'chat.completion';
  created: number;
  model: string;
  choices: OpenAiChatCompletionChoice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  /** Grok-native extension block */
  grok?: GrokResponseMeta;
}

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

export interface OpenAiModel {
  id: string;
  object: 'model';
  created: number;
  owned_by: string;
}

export interface OpenAiModelList {
  object: 'list';
  data: OpenAiModel[];
}
