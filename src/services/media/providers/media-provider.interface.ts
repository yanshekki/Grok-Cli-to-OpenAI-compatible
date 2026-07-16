/** Pluggable media generation backends (Grok tools, HTTP providers, mock). */

export type MediaKind = 'image' | 'video' | 'audio' | 'file';

export interface MediaArtifact {
  bytes: Buffer;
  mime: string;
  originalName?: string;
  width?: number;
  height?: number;
  durationMs?: number;
  source: {
    provider: string;
    rawMeta?: unknown;
  };
}

export interface ImageGenRequest {
  prompt: string;
  model?: string;
  n?: number;
  size?: string;
  /** Working directory for tool-based providers */
  cwd?: string;
  apiKeyId: string;
  timeoutMs?: number;
}

export interface ImageEditRequest extends ImageGenRequest {
  imageBytes: Buffer;
  imageMime?: string;
  maskBytes?: Buffer;
}

export interface MediaProvider {
  readonly id: string;
  generateImage(req: ImageGenRequest): Promise<MediaArtifact[]>;
  editImage?(req: ImageEditRequest): Promise<MediaArtifact[]>;
}
