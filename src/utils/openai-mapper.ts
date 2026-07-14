import type {
  OpenAiChatCompletion,
  OpenAiChatCompletionChunk,
  OpenAiModel,
  OpenAiModelList,
} from '../interfaces/openai.interface';
import type { GrokJsonResult } from '../interfaces/grok.interface';
import { createChatCompletionId } from './id';

export function mapGrokToChatCompletion(
  model: string,
  result: GrokJsonResult,
  completionId = createChatCompletionId(),
): OpenAiChatCompletion {
  const finishReason = mapStopReason(result.stopReason);
  return {
    id: completionId,
    object: 'chat.completion',
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [
      {
        index: 0,
        message: {
          role: 'assistant',
          content: result.text ?? '',
        },
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
): OpenAiChatCompletionChunk {
  return {
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

export function messagesToPrompt(
  messages: Array<{ role: string; content: string }>,
): string {
  if (messages.length === 1) {
    return messages[0]?.content ?? '';
  }
  return messages.map((m) => `${m.role}: ${m.content}`).join('\n');
}
