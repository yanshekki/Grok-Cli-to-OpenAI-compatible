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
