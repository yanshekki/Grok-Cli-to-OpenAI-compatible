import type { GrokRunOptions } from './grok-run-options.interface';

/** Result of mapping a chat DTO + policy + features → Grok CLI invocation pieces */
export interface BuiltGrokRequest {
  prompt: string;
  promptJson?: string;
  jsonSchema?: string;
  toolsAllowlist?: string | null;
  toolsDenylist?: string | null;
  extra: Partial<GrokRunOptions>;
  estimatedPromptTokens: number;
}
