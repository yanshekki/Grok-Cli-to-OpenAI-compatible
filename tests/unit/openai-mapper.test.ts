import { describe, expect, it } from 'vitest';
import {
  mapFinishChunk,
  mapGrokToChatCompletion,
  mapModelsList,
  mapRoleChunk,
  mapTextDeltaChunk,
  messagesToPrompt,
} from '../../src/utils/openai-mapper';

describe('openai-mapper', () => {
  it('messagesToPrompt uses single message content', () => {
    expect(messagesToPrompt([{ role: 'user', content: 'hi' }])).toBe('hi');
  });

  it('messagesToPrompt joins multi-turn messages', () => {
    expect(
      messagesToPrompt([
        { role: 'system', content: 'be brief' },
        { role: 'user', content: 'hi' },
      ]),
    ).toBe('system: be brief\nuser: hi');
  });

  it('maps grok json to OpenAI chat completion', () => {
    const res = mapGrokToChatCompletion(
      'grok-4.5',
      { text: 'pong', stopReason: 'EndTurn' },
      'chatcmpl_test',
    );
    expect(res.object).toBe('chat.completion');
    expect(res.model).toBe('grok-4.5');
    expect(res.choices[0]?.message.content).toBe('pong');
    expect(res.choices[0]?.finish_reason).toBe('stop');
    expect(res.id).toBe('chatcmpl_test');
  });

  it('maps streaming chunks', () => {
    const role = mapRoleChunk('m', 'id', 1);
    const delta = mapTextDeltaChunk('m', 'he', 'id', 1);
    const end = mapFinishChunk('m', 'id', 1, 'EndTurn');
    expect(role.choices[0]?.delta.role).toBe('assistant');
    expect(delta.choices[0]?.delta.content).toBe('he');
    expect(end.choices[0]?.finish_reason).toBe('stop');
  });

  it('maps model list', () => {
    const list = mapModelsList(['a', 'b']);
    expect(list.object).toBe('list');
    expect(list.data).toHaveLength(2);
    expect(list.data[0]?.owned_by).toBe('xai');
  });
});
