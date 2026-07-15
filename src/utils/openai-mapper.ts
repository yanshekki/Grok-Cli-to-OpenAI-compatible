import type { GrokJsonResult } from '../interfaces/grok-json-result.interface';
import type { GrokResponseMeta } from '../interfaces/grok-response-meta.interface';
import type { MapCompletionOptions } from '../interfaces/map-completion-options.interface';
import type { OpenAiChatCompletion } from '../interfaces/open-ai-chat-completion.interface';
import type { OpenAiChatCompletionChunk } from '../interfaces/open-ai-chat-completion-chunk.interface';
import type { OpenAiModel } from '../interfaces/open-ai-model.interface';
import type { OpenAiModelList } from '../interfaces/open-ai-model-list.interface';
import { createChatCompletionId } from './id';

export type { MapCompletionOptions } from '../interfaces/map-completion-options.interface';

export function mapGrokToChatCompletion(
  model: string,
  result: GrokJsonResult,
  options: MapCompletionOptions = {},
): OpenAiChatCompletion {
  const completionId = options.completionId ?? createChatCompletionId();
  const includeReasoning = options.includeReasoning !== false;
  const reasoning =
    includeReasoning && options.reasoningContent
      ? options.reasoningContent
      : null;

  const message: OpenAiChatCompletion['choices'][0]['message'] = {
    role: 'assistant',
    content: result.text ?? '',
  };

  if (includeReasoning && reasoning) {
    message.reasoning_content = reasoning;
    message.thought = reasoning; // Grok alias
  } else if (includeReasoning) {
    message.reasoning_content = null;
    message.thought = null;
  }

  const finishReason = mapStopReason(result.stopReason ?? options.grok?.stopReason);

  const response: OpenAiChatCompletion = {
    id: completionId,
    object: 'chat.completion',
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [
      {
        index: 0,
        message,
        finish_reason: finishReason,
        logprobs: null,
      },
    ],
    usage: {
      prompt_tokens: 0,
      completion_tokens: 0,
      total_tokens: 0,
    },
  };

  const grok = buildGrokMeta(result, options.grok);
  if (grok) {
    response.grok = grok;
  }

  return response;
}

export function mapTextDeltaChunk(
  model: string,
  content: string,
  completionId: string,
  created: number,
): OpenAiChatCompletionChunk {
  return {
    id: completionId,
    object: 'chat.completion.chunk',
    created,
    model,
    choices: [
      {
        index: 0,
        delta: { content },
        finish_reason: null,
      },
    ],
  };
}

/**
 * DeepSeek-compatible reasoning stream chunk.
 * Also sets Grok alias `thought` to the same string.
 */
export function mapReasoningDeltaChunk(
  model: string,
  reasoningContent: string,
  completionId: string,
  created: number,
  includeGrokAlias = true,
): OpenAiChatCompletionChunk {
  const delta: OpenAiChatCompletionChunk['choices'][0]['delta'] = {
    reasoning_content: reasoningContent,
  };
  if (includeGrokAlias) {
    delta.thought = reasoningContent;
  }
  return {
    id: completionId,
    object: 'chat.completion.chunk',
    created,
    model,
    choices: [
      {
        index: 0,
        delta,
        finish_reason: null,
      },
    ],
  };
}

export function mapRoleChunk(
  model: string,
  completionId: string,
  created: number,
): OpenAiChatCompletionChunk {
  return {
    id: completionId,
    object: 'chat.completion.chunk',
    created,
    model,
    choices: [
      {
        index: 0,
        delta: { role: 'assistant', content: '' },
        finish_reason: null,
      },
    ],
  };
}

export function mapFinishChunk(
  model: string,
  completionId: string,
  created: number,
  stopReason?: string,
  grok?: GrokResponseMeta,
): OpenAiChatCompletionChunk {
  const chunk: OpenAiChatCompletionChunk = {
    id: completionId,
    object: 'chat.completion.chunk',
    created,
    model,
    choices: [
      {
        index: 0,
        delta: {},
        finish_reason: mapStopReason(stopReason),
      },
    ],
  };
  if (grok && (grok.sessionId || grok.stopReason || grok.requestId)) {
    chunk.grok = grok;
  }
  return chunk;
}

export function mapModelsList(models: string[]): OpenAiModelList {
  const data: OpenAiModel[] = models.map((id) => ({
    id,
    object: 'model',
    created: Math.floor(Date.now() / 1000),
    owned_by: 'xai',
  }));
  return { object: 'list', data };
}

function mapStopReason(stopReason?: string): 'stop' | 'length' | 'content_filter' {
  if (!stopReason) return 'stop';
  const lower = stopReason.toLowerCase();
  if (lower.includes('length') || lower.includes('max')) return 'length';
  if (lower.includes('filter') || lower.includes('content')) return 'content_filter';
  return 'stop';
}

function buildGrokMeta(
  result: GrokJsonResult,
  extra?: GrokResponseMeta,
): GrokResponseMeta | undefined {
  const meta: GrokResponseMeta = {
    sessionId: extra?.sessionId ?? result.sessionId,
    stopReason: extra?.stopReason ?? result.stopReason,
    requestId: extra?.requestId ?? result.requestId,
  };
  if (!meta.sessionId && !meta.stopReason && !meta.requestId) {
    return undefined;
  }
  return meta;
}

/**
 * Build prompt from messages.
 * Multi-turn: uses role + content only (DeepSeek-style: prior reasoning_content not required).
 * If an assistant message only has reasoning_content, it is ignored unless content is empty
 * and we fall back (should not normally happen).
 */
export function messagesToPrompt(
  messages: Array<{ role: string; content: string; reasoning_content?: string | null }>,
): string {
  if (messages.length === 1) {
    return messages[0]?.content ?? '';
  }
  return messages
    .map((m) => {
      // Mainstream: only final answer content participates in context
      return `${m.role}: ${m.content}`;
    })
    .join('\n');
}
