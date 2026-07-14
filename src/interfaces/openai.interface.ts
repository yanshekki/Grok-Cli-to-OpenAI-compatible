export type OpenAiRole = 'system' | 'user' | 'assistant' | 'tool' | 'function';

export interface OpenAiChatMessage {
  role: OpenAiRole | string;
  content: string | null | Array<Record<string, unknown>>;
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
}

export interface OpenAiChatCompletionChoice {
  index: number;
  message: {
    role: 'assistant';
    content: string;
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
    };
    finish_reason: 'stop' | 'length' | 'content_filter' | null;
  }>;
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
