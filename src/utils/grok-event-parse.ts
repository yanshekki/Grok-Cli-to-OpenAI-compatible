import type {
  GrokToolCall,
  GrokUsage,
} from '../interfaces/grok-collected-output.interface';
import { createId } from './id';

/** Parse usage object from Grok end event. */
export function parseGrokUsage(raw: unknown): GrokUsage | undefined {
  if (!raw || typeof raw !== 'object') return undefined;
  const u = raw as Record<string, unknown>;
  const out: GrokUsage = {};
  if (typeof u.input_tokens === 'number') out.input_tokens = u.input_tokens;
  if (typeof u.output_tokens === 'number') out.output_tokens = u.output_tokens;
  if (typeof u.total_tokens === 'number') out.total_tokens = u.total_tokens;
  if (typeof u.reasoning_tokens === 'number') {
    out.reasoning_tokens = u.reasoning_tokens;
  }
  if (typeof u.cache_read_input_tokens === 'number') {
    out.cache_read_input_tokens = u.cache_read_input_tokens;
  }
  if (typeof u.inputTokens === 'number') out.input_tokens = u.inputTokens;
  if (typeof u.outputTokens === 'number') out.output_tokens = u.outputTokens;
  if (typeof u.totalTokens === 'number') out.total_tokens = u.totalTokens;
  if (
    out.input_tokens == null &&
    out.output_tokens == null &&
    out.total_tokens == null
  ) {
    return undefined;
  }
  if (out.total_tokens == null) {
    out.total_tokens = (out.input_tokens || 0) + (out.output_tokens || 0);
  }
  return out;
}

function newToolCallId(): string {
  return `call_${createId().replace(/-/g, '').slice(0, 24)}`;
}

/**
 * Extract OpenAI-style tool_calls from Grok stream events.
 * Handles multiple event shapes (tool_call, tool_use, function_call, batches).
 */
export function parseGrokToolCallEvent(event: {
  type?: string;
  data?: unknown;
  [k: string]: unknown;
}): GrokToolCall[] {
  const t = String(event.type || '').toLowerCase();
  const out: GrokToolCall[] = [];

  const push = (name: string, args: unknown, id?: string) => {
    if (!name) return;
    out.push({
      id: id || newToolCallId(),
      type: 'function',
      function: {
        name,
        arguments:
          typeof args === 'string' ? args : JSON.stringify(args ?? {}),
      },
    });
  };

  const fromObj = (d: Record<string, unknown>) => {
    const fn =
      d.function && typeof d.function === 'object'
        ? (d.function as { name?: string; arguments?: unknown })
        : undefined;
    const name = String(
      d.name ||
        d.tool ||
        d.toolName ||
        d.tool_name ||
        fn?.name ||
        '',
    );
    const args =
      d.arguments ??
      d.input ??
      d.parameters ??
      d.args ??
      fn?.arguments;
    push(name, args, typeof d.id === 'string' ? d.id : undefined);
  };

  if (
    t === 'tool_call' ||
    t === 'tool' ||
    t === 'function_call' ||
    t === 'tool_use' ||
    t === 'tool_request' ||
    t === 'invoke_tool'
  ) {
    const d =
      event.data && typeof event.data === 'object'
        ? (event.data as Record<string, unknown>)
        : (event as Record<string, unknown>);
    fromObj(d);
  }

  // Nested data.tool_calls
  const dataObj =
    event.data && typeof event.data === 'object'
      ? (event.data as Record<string, unknown>)
      : null;
  if (dataObj && Array.isArray(dataObj.tool_calls)) {
    for (const tc of dataObj.tool_calls) {
      if (tc && typeof tc === 'object') fromObj(tc as Record<string, unknown>);
    }
  }

  if (Array.isArray(event.tool_calls)) {
    for (const tc of event.tool_calls) {
      if (tc && typeof tc === 'object') fromObj(tc as Record<string, unknown>);
    }
  }

  // end event sometimes embeds tool_calls
  if (t === 'end' && Array.isArray(event.tool_calls)) {
    for (const tc of event.tool_calls) {
      if (tc && typeof tc === 'object') fromObj(tc as Record<string, unknown>);
    }
  }

  return out;
}

export function usageToOpenAi(u?: GrokUsage): {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
} {
  return {
    prompt_tokens: u?.input_tokens ?? 0,
    completion_tokens: u?.output_tokens ?? 0,
    total_tokens:
      u?.total_tokens ?? (u?.input_tokens || 0) + (u?.output_tokens || 0),
  };
}
