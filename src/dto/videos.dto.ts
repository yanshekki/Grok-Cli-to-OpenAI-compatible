import { z } from 'zod';
import {
  GROK_ASPECT_RATIOS,
  MAX_MESSAGE_CHARS,
} from '../config/constants';

const aspectRatioEnum = z.enum(
  GROK_ASPECT_RATIOS as unknown as [string, ...string[]],
);

/** Snap to Grok image_to_video durations (6 or 10 only). */
function snapVideoSeconds(v: unknown): 6 | 10 {
  if (v === undefined || v === null || v === '') return 6;
  const n = Number(v);
  if (!Number.isFinite(n)) return 6;
  return n >= 8 ? 10 : 6;
}

export const createVideoSchema = z.object({
  prompt: z.string().min(1).max(MAX_MESSAGE_CHARS),
  model: z.string().min(1).max(128).optional(),
  /** Grok image_to_video: 6 or 10 only (default 6). */
  seconds: z.preprocess(snapVideoSeconds, z.union([z.literal(6), z.literal(10)])),
  aspect_ratio: aspectRatioEnum.optional(),
  /** Optional media-library asset id (image) for image_to_video */
  source_asset_id: z.string().uuid().optional(),
  /** Optional documents-library id (image file) for image_to_video */
  source_document_id: z.string().uuid().optional(),
});

export type CreateVideoDto = z.infer<typeof createVideoSchema>;

export const videoIdParamSchema = z.object({
  id: z.string().uuid(),
});
