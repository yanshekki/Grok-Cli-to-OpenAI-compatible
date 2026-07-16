import { describe, expect, it } from 'vitest';
import {
  parseGrokToolCallEvent,
  parseGrokUsage,
} from '../../src/utils/grok-event-parse';

describe('grok-event-parse', () => {
  it('parses usage camelCase and snake_case', () => {
    expect(
      parseGrokUsage({ input_tokens: 1, output_tokens: 2 })?.total_tokens,
    ).toBe(3);
    expect(
      parseGrokUsage({ inputTokens: 4, outputTokens: 5 })?.total_tokens,
    ).toBe(9);
  });

  it('parses multiple tool event shapes', () => {
    const a = parseGrokToolCallEvent({
      type: 'tool_use',
      name: 'search',
      input: { q: 'x' },
      id: 'id1',
    });
    expect(a[0]?.function.name).toBe('search');

    const b = parseGrokToolCallEvent({
      type: 'tool_call',
      data: {
        function: { name: 'fn', arguments: '{"a":1}' },
        id: 'id2',
      },
    });
    expect(b[0]?.function.name).toBe('fn');

    const c = parseGrokToolCallEvent({
      type: 'end',
      tool_calls: [
        {
          id: 'id3',
          function: { name: 'batch', arguments: '{}' },
        },
      ],
    });
    expect(c[0]?.function.name).toBe('batch');
  });
});
