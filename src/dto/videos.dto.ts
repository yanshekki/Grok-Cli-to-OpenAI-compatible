import { z } from 'zod';
import { MAX_MESSAGE_CHARS } from '../config/constants';

export const createVideoSchema = z.object({
  prompt: z.string().min(1).max(MAX_MESSAGE_CHARS),
  model: z.string().min(1).max(128).optional(),
  seconds: z.number().int().min(1).max(60).optional(),
});

export type CreateVideoDto = z.infer<typeof createVideoSchema>;

export const videoIdParamSchema = z.object({
  id: z.string().uuid(),
});
