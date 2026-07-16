import { z } from 'zod';
import { MAX_MESSAGE_CHARS } from '../config/constants';

export const createImageGenerationSchema = z.object({
  prompt: z.string().min(1).max(MAX_MESSAGE_CHARS),
  model: z.string().min(1).max(128).optional(),
  n: z.number().int().min(1).max(4).optional().default(1),
  size: z
    .enum(['256x256', '512x512', '1024x1024', '1792x1024', '1024x1792'])
    .optional(),
  response_format: z.enum(['url', 'b64_json']).optional().default('b64_json'),
  user: z.string().max(128).optional(),
});

export type CreateImageGenerationDto = z.infer<
  typeof createImageGenerationSchema
>;

/** Multipart edits: prompt + response_format as form fields */
export const createImageEditSchema = z.object({
  prompt: z.string().min(1).max(MAX_MESSAGE_CHARS),
  model: z.string().min(1).max(128).optional(),
  n: z.coerce.number().int().min(1).max(4).optional().default(1),
  size: z
    .enum(['256x256', '512x512', '1024x1024', '1792x1024', '1024x1792'])
    .optional(),
  response_format: z.enum(['url', 'b64_json']).optional().default('b64_json'),
});

export type CreateImageEditDto = z.infer<typeof createImageEditSchema>;

export const mediaAssetIdParamSchema = z.object({
  id: z.string().uuid(),
});
