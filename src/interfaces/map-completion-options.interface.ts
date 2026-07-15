import type { GrokResponseMeta } from './grok-response-meta.interface';

/** Options when mapping Grok CLI output → OpenAI chat.completion */
export interface MapCompletionOptions {
  completionId?: string;
  reasoningContent?: string | null;
  includeReasoning?: boolean;
  grok?: GrokResponseMeta;
}
