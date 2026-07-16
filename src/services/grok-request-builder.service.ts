import type { CreateChatCompletionDto } from '../dto/chat.dto';
import type { ApiFeatures } from '../interfaces/api-features.type';
import type { BuiltGrokRequest } from '../interfaces/built-grok-request.interface';
import type { GrokRunOptions } from '../interfaces/grok-run-options.interface';
import type { ResolvedPolicy } from '../interfaces/resolved-policy.interface';
import { ExceptionFactory } from '../exceptions/exception.factory';
import {
  flattenMessageContent,
  messageHasImageParts,
  messagesToPrompt,
} from '../utils/message-content';

function extractToolNames(tools: unknown[] | undefined): string[] {
  if (!tools?.length) return [];
  const names: string[] = [];
  for (const t of tools) {
    if (!t || typeof t !== 'object') continue;
    const o = t as Record<string, unknown>;
    // OpenAI function tools: { type:'function', function:{ name } }
    if (o.type === 'function' && o.function && typeof o.function === 'object') {
      const n = (o.function as { name?: string }).name;
      if (n) names.push(n);
      continue;
    }
    // Anthropic-style or bare name
    if (typeof o.name === 'string') names.push(o.name);
  }
  return [...new Set(names)];
}

function toolsToSystemHint(tools: unknown[] | undefined): string {
  if (!tools?.length) return '';
  try {
    return (
      `You have access to the following tools (execute via Grok built-in tools when applicable):\n` +
      JSON.stringify(tools, null, 2)
    );
  } catch {
    return '';
  }
}

function buildPromptJson(
  messages: CreateChatCompletionDto['messages'],
): string {
  const blocks: unknown[] = [];
  for (const m of messages) {
    const role = m.role || 'user';
    if (typeof m.content === 'string') {
      blocks.push({ type: 'text', text: `${role}: ${m.content}` });
      continue;
    }
    if (Array.isArray(m.content)) {
      blocks.push({ type: 'text', text: `${role}:` });
      for (const part of m.content) {
        if (!part || typeof part !== 'object') continue;
        const p = part as Record<string, unknown>;
        if (p.type === 'text' || typeof p.text === 'string') {
          blocks.push({ type: 'text', text: String(p.text ?? '') });
        } else if (p.type === 'image_url' || p.image_url) {
          const img =
            typeof p.image_url === 'object' && p.image_url
              ? (p.image_url as { url?: string })
              : { url: String(p.image_url || '') };
          blocks.push({
            type: 'image',
            source: img.url?.startsWith('data:')
              ? { type: 'base64', data: img.url }
              : { type: 'url', url: img.url },
          });
        } else if (p.type === 'image' || p.type === 'input_image') {
          blocks.push(p);
        }
      }
    }
  }
  return JSON.stringify(blocks);
}

/**
 * Validate feature gates and build Grok CLI request pieces from a chat DTO.
 */
export function buildGrokRequestFromChatDto(
  dto: CreateChatCompletionDto,
  policy: ResolvedPolicy,
  features: ApiFeatures,
): BuiltGrokRequest {
  // Strict sampling: reject params Grok cannot honor
  if (features.strictSampling) {
    if (
      dto.temperature != null ||
      dto.top_p != null ||
      dto.stop != null
    ) {
      throw ExceptionFactory.validation(
        'Sampling parameters (temperature/top_p/stop) are not supported by Grok CLI. Disable strictSampling in Admin → API features, or omit these fields.',
      );
    }
  }

  const hasImages = dto.messages.some((m) => messageHasImageParts(m.content));
  if (hasImages && !features.vision) {
    throw ExceptionFactory.forbidden(
      'Vision / image content is disabled (Admin → API features → vision).',
    );
  }

  if (
    (dto.tools?.length || dto.tool_choice != null || dto.functions?.length) &&
    !features.tools
  ) {
    throw ExceptionFactory.forbidden(
      'Tools are disabled (Admin → API features → tools).',
    );
  }

  const wantsSchema =
    dto.json_schema != null ||
    dto.response_format?.type === 'json_schema' ||
    dto.response_format?.type === 'json_object';
  if (wantsSchema && !features.structuredOutput) {
    throw ExceptionFactory.forbidden(
      'Structured output is disabled (Admin → API features → structuredOutput).',
    );
  }

  const effort = dto.reasoning_effort || dto.effort;
  if (effort && !features.reasoningEffort) {
    throw ExceptionFactory.forbidden(
      'reasoning_effort is disabled (Admin → API features → reasoningEffort).',
    );
  }

  if (dto.system_prompt_override && !features.systemOverride) {
    throw ExceptionFactory.forbidden('system_prompt_override is disabled.');
  }
  if (dto.rules && !features.rules) {
    throw ExceptionFactory.forbidden('rules is disabled.');
  }
  if (dto.permission_mode && !features.permissionMode) {
    throw ExceptionFactory.forbidden('permission_mode is disabled.');
  }
  if (dto.sandbox && !features.sandbox) {
    throw ExceptionFactory.forbidden('sandbox is disabled.');
  }
  if (dto.best_of_n && dto.best_of_n > 1 && !features.bestOfN) {
    throw ExceptionFactory.forbidden('best_of_n is disabled.');
  }
  if (dto.check && !features.checkLoop) {
    throw ExceptionFactory.forbidden('check loop is disabled.');
  }
  if ((dto.resume || dto.continue) && !features.sessionResume) {
    throw ExceptionFactory.forbidden('session resume is disabled.');
  }
  if (dto.no_subagents === false && !features.subagents) {
    // requesting subagents when disabled
  }
  if (dto.experimental_memory && !features.memory) {
    throw ExceptionFactory.forbidden('memory is disabled.');
  }

  // Build text prompt (preserve tool_calls / tool_call_id for multi-turn tools)
  type PromptMsg = {
    role: string;
    content: string;
    tool_call_id?: string;
    tool_calls?: Array<{
      id?: string;
      function?: { name?: string; arguments?: string };
    }>;
  };
  let messages: PromptMsg[] = dto.messages.map((m) => {
    const extra = m as {
      tool_call_id?: string;
      tool_calls?: PromptMsg['tool_calls'];
    };
    return {
      role: m.role,
      content: flattenMessageContent(m.content),
      tool_call_id: extra.tool_call_id,
      tool_calls: extra.tool_calls,
    };
  });

  if (dto.response_format?.type === 'json_object') {
    messages = [
      {
        role: 'system',
        content:
          'Respond with a single valid JSON object only. No markdown fences or commentary.',
      },
      ...messages,
    ];
  }

  const toolHint = features.tools ? toolsToSystemHint(dto.tools) : '';
  if (toolHint) {
    messages = [{ role: 'system', content: toolHint }, ...messages];
  }

  const prompt = messagesToPrompt(messages);
  const estimatedPromptTokens = Math.max(1, Math.ceil(prompt.length / 4));

  let promptJson: string | undefined;
  if (hasImages && features.vision) {
    promptJson = buildPromptJson(dto.messages);
  }

  let jsonSchema: string | undefined;
  if (features.structuredOutput) {
    if (dto.json_schema) {
      jsonSchema = JSON.stringify(dto.json_schema);
    } else if (
      dto.response_format?.type === 'json_schema' &&
      dto.response_format.json_schema?.schema
    ) {
      jsonSchema = JSON.stringify(dto.response_format.json_schema.schema);
    } else if (dto.response_format?.type === 'json_object') {
      jsonSchema = JSON.stringify({ type: 'object' });
    }
  }

  // Tools allowlist: request tool names ∪ policy allowlist
  let toolsAllowlist = policy.toolsAllowlist;
  let toolsDenylist = policy.toolsDenylist;
  if (features.tools && dto.tools?.length) {
    const names = extractToolNames(dto.tools);
    if (names.length) {
      const existing = toolsAllowlist ? toolsAllowlist.split(',') : [];
      toolsAllowlist = [...new Set([...existing, ...names])].join(',');
    }
  }
  if (features.forceDisableToolsInSafe && policy.mode === 'safe') {
    // keep policy denylist / allowlist as-is (already safe)
  }
  if (!features.webSearch) {
    // ensure web tools denied
    const deny = new Set(
      (toolsDenylist || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    );
    deny.add('web_search');
    deny.add('web_fetch');
    deny.add('WebSearch');
    deny.add('WebFetch');
    toolsDenylist = [...deny].join(',');
  }

  const extra: Partial<GrokRunOptions> = {
    reasoningEffort: effort || null,
    systemPromptOverride: dto.system_prompt_override || null,
    rules: dto.rules || null,
    permissionMode: dto.permission_mode || null,
    sandbox: dto.sandbox || null,
    allowRules: dto.allow || null,
    denyRules: dto.deny || null,
    disableWebSearch: dto.disable_web_search || !features.webSearch,
    noSubagents: dto.no_subagents ?? !features.subagents,
    noPlan: dto.no_plan ?? !features.planMode,
    noMemory: dto.no_memory ?? false,
    experimentalMemory: dto.experimental_memory && features.memory,
    bestOfN: features.bestOfN ? dto.best_of_n ?? null : null,
    check: Boolean(dto.check && features.checkLoop),
    verbatim: Boolean(dto.verbatim),
    agent: dto.agent || null,
    agentsJson: dto.agents ? JSON.stringify(dto.agents) : null,
    resumeSessionId: dto.resume || null,
    continueSession: Boolean(dto.continue),
    forkSession: Boolean(dto.fork_session),
  };

  return {
    prompt,
    promptJson,
    jsonSchema,
    toolsAllowlist,
    toolsDenylist,
    extra,
    estimatedPromptTokens,
  };
}

export function estimateCompletionTokens(text: string): number {
  return Math.max(0, Math.ceil((text || '').length / 4));
}
