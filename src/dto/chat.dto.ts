import { z } from 'zod';
import {
  MAX_MESSAGES,
  MAX_MESSAGE_CHARS,
  MAX_DOCUMENTS_PER_CHAT,
} from '../config/constants';

const messageContentSchema = z.union([
  z.string().max(MAX_MESSAGE_CHARS),
  z.array(z.record(z.unknown())).transform((parts) => {
    return parts
      .map((p) => {
        if (typeof p === 'object' && p && 'text' in p && typeof p.text === 'string') {
          return p.text;
        }
        if (typeof p === 'object' && p && 'type' in p && p.type === 'text' && 'text' in p) {
          return String(p.text);
        }
        return '';
      })
      .join('\n');
  }),
  z.null().transform(() => ''),
]);

export const createChatCompletionSchema = z.object({
  model: z.string().min(1).max(128).optional(),
  messages: z
    .array(
      z.object({
        role: z.string().min(1).max(32),
        content: messageContentSchema,
        name: z.string().max(64).optional(),
      }),
    )
    .min(1)
    .max(MAX_MESSAGES),
  stream: z.boolean().optional().default(false),
  temperature: z.number().min(0).max(2).optional(),
  max_tokens: z.number().int().positive().optional(),
  top_p: z.number().min(0).max(1).optional(),
  n: z.number().int().positive().max(1).optional(),
  stop: z.union([z.string(), z.array(z.string())]).optional(),
  user: z.string().max(128).optional(),
  cwd: z.string().max(1024).optional(),
  session_id: z.string().max(128).optional(),
  document_ids: z.array(z.string().uuid()).max(MAX_DOCUMENTS_PER_CHAT).optional(),
});

export type CreateChatCompletionDto = z.infer<typeof createChatCompletionSchema>;
