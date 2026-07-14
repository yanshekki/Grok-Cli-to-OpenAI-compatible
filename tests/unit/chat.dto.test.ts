import { describe, expect, it } from 'vitest';
import { createChatCompletionSchema } from '../../src/dto/chat.dto';

describe('createChatCompletionSchema', () => {
  it('accepts minimal valid body', () => {
    const parsed = createChatCompletionSchema.parse({
      messages: [{ role: 'user', content: 'hi' }],
    });
    expect(parsed.stream).toBe(false);
    expect(parsed.messages[0]?.content).toBe('hi');
  });

  it('normalizes array content parts to string', () => {
    const parsed = createChatCompletionSchema.parse({
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: 'hello' },
            { type: 'text', text: 'world' },
          ],
        },
      ],
    });
    expect(parsed.messages[0]?.content).toContain('hello');
    expect(parsed.messages[0]?.content).toContain('world');
  });

  it('rejects empty messages', () => {
    expect(() => createChatCompletionSchema.parse({ messages: [] })).toThrow();
  });

  it('accepts document_ids and session_id extensions', () => {
    const parsed = createChatCompletionSchema.parse({
      messages: [{ role: 'user', content: 'x' }],
      session_id: 'abc',
      document_ids: ['550e8400-e29b-41d4-a716-446655440000'],
    });
    expect(parsed.session_id).toBe('abc');
    expect(parsed.document_ids).toHaveLength(1);
  });
});
