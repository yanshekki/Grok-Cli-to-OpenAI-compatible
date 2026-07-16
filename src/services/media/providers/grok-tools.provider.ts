import { promises as fs } from 'node:fs';
import path from 'node:path';
import { createId } from '../../../utils/id';
import { logger } from '../../../utils/logger';
import { ExceptionFactory } from '../../../exceptions/exception.factory';
import { env } from '../../../config/env';
import { grokCliService } from '../../grok-cli.service';
import type {
  ImageEditRequest,
  ImageGenRequest,
  MediaArtifact,
  MediaProvider,
} from './media-provider.interface';

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif']);
const VIDEO_EXTS = new Set(['.mp4', '.webm', '.mov', '.mkv']);

function mimeFromExt(ext: string): string {
  switch (ext.toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.webp':
      return 'image/webp';
    case '.gif':
      return 'image/gif';
    case '.mp4':
      return 'video/mp4';
    case '.webm':
      return 'video/webm';
    case '.mov':
      return 'video/quicktime';
    default:
      return 'image/png';
  }
}

/**
 * Generate / edit images via Grok CLI (Imagine skill + tools).
 * Execution limits come from policyService (same as chat): maxTurns, timeout, tools, alwaysApprove.
 */
export class GrokToolsMediaProvider implements MediaProvider {
  readonly id = 'grok-tools';

  async editImage(req: ImageEditRequest): Promise<MediaArtifact[]> {
    const runId = createId();
    const sandbox = path.join(env.storageDir, 'media-runs', runId);
    await fs.mkdir(sandbox, { recursive: true });
    const srcName = 'input.png';
    await fs.writeFile(path.join(sandbox, srcName), req.imageBytes);
    if (req.maskBytes) {
      await fs.writeFile(path.join(sandbox, 'mask.png'), req.maskBytes);
    }
    const aspectHint = req.aspectRatio
      ? ` If multi-image edit needs a canvas, use aspect_ratio="${req.aspectRatio}".`
      : ' Preserve the source image aspect ratio unless the instruction requires otherwise.';
    const prompt =
      `Edit the image ./${srcName} according to the instruction and save the result as output.png in the current working directory.\n` +
      `Use the image_edit tool with the source file path.${aspectHint}\n` +
      `Instruction: ${req.prompt}\n` +
      `You must produce a real image file on disk (output.png).`;
    return this.runGrokCollectImages({
      ...req,
      prompt,
      sandbox,
    });
  }

  async generateImage(req: ImageGenRequest): Promise<MediaArtifact[]> {
    const runId = createId();
    const sandbox = path.join(env.storageDir, 'media-runs', runId);
    await fs.mkdir(sandbox, { recursive: true });
    const aspect =
      req.aspectRatio ||
      req.size ||
      '1:1';
    const prompt =
      `Generate an image for the following prompt and save it as a real PNG file in the current working directory as output.png.\n` +
      `Prompt: ${req.prompt}\n` +
      `Use the image_gen tool with aspect_ratio="${aspect}" (Grok Imagine).\n` +
      `You must produce a real image file on disk (output.png). Do not only describe the image.`;
    return this.runGrokCollectImages({
      ...req,
      prompt,
      sandbox,
    });
  }

  /**
   * Grok image_to_video: animate a source frame (duration 6 or 10 only).
   */
  async generateVideoFromImage(req: {
    prompt: string;
    imageBytes: Buffer;
    apiKeyId: string;
    model?: string;
    seconds?: number;
    aspectRatio?: string;
    timeoutMs?: number;
    maxTurns?: number | null;
    alwaysApprove?: boolean;
    permissionMode?: string | null;
  }): Promise<MediaArtifact[]> {
    const runId = createId();
    const sandbox = path.join(env.storageDir, 'media-runs', runId);
    await fs.mkdir(sandbox, { recursive: true });
    const srcName = 'frame.png';
    await fs.writeFile(path.join(sandbox, srcName), req.imageBytes);
    const seconds = req.seconds === 10 ? 10 : 6;
    const prompt =
      `Animate the image ./${srcName} into a short video and save it as output.mp4 in the current working directory.\n` +
      `Use the image_to_video tool with duration=${seconds} (Grok only supports 6 or 10 seconds).\n` +
      `Motion / camera instruction: ${req.prompt}\n` +
      `You must produce a real video file on disk (output.mp4).`;
    return this.runGrokCollectMedia({
      prompt,
      sandbox,
      model: req.model,
      timeoutMs: req.timeoutMs,
      maxTurns: req.maxTurns,
      alwaysApprove: req.alwaysApprove,
      permissionMode: req.permissionMode,
      collect: 'video',
      n: 1,
    });
  }

  private async runGrokCollectImages(
    req: ImageGenRequest & { prompt: string; sandbox: string },
  ): Promise<MediaArtifact[]> {
    return this.runGrokCollectMedia({
      ...req,
      collect: 'image',
      n: req.n ?? 1,
    });
  }

  private async runGrokCollectMedia(
    req: {
      prompt: string;
      sandbox: string;
      model?: string;
      timeoutMs?: number;
      maxTurns?: number | null;
      alwaysApprove?: boolean;
      permissionMode?: string | null;
      toolsAllowlist?: string | null;
      toolsDenylist?: string | null;
      collect: 'image' | 'video';
      n?: number;
    },
  ): Promise<MediaArtifact[]> {
    const { sandbox, prompt } = req;
    const listFn = req.collect === 'video' ? listVideoFiles : listImageFiles;
    const before = await listFn(sandbox);

    const timeoutMs = req.timeoutMs ?? env.GROK_TIMEOUT_MS;
    const maxTurns =
      req.maxTurns != null && req.maxTurns > 0 ? req.maxTurns : null;
    const alwaysApprove =
      req.alwaysApprove !== undefined
        ? req.alwaysApprove
        : env.GROK_ALWAYS_APPROVE;
    const permissionMode =
      req.permissionMode ??
      (alwaysApprove ? 'bypassPermissions' : null);

    try {
      const available = await grokCliService.isAvailable();
      if (!available) {
        throw ExceptionFactory.mediaProviderUnavailable(
          'Grok CLI is not available for media generation',
        );
      }

      logger.info(
        {
          model: req.model || env.GROK_DEFAULT_MODEL,
          timeoutMs,
          maxTurns,
          alwaysApprove,
          permissionMode,
          collect: req.collect,
          sandbox,
        },
        'Media gen: spawning Grok with policy-aligned options',
      );

      for await (const _ev of grokCliService.stream({
        prompt,
        model: req.model || env.GROK_DEFAULT_MODEL,
        cwd: sandbox,
        stream: true,
        timeoutMs,
        alwaysApprove,
        maxTurns,
        toolsAllowlist: req.toolsAllowlist ?? null,
        toolsDenylist: req.toolsDenylist ?? null,
        permissionMode,
        noSubagents: true,
      })) {
        /* consume stream */
      }
    } catch (err) {
      logger.warn({ err, sandbox, collect: req.collect }, 'Grok media gen failed');
      if (err && typeof err === 'object' && 'statusCode' in err) throw err;
      throw ExceptionFactory.mediaGenerationFailed(
        err instanceof Error ? err.message : 'Grok media generation failed',
      );
    }

    const afterList = [...(await listFn(sandbox))];
    const newFiles = afterList.filter((f) => !before.has(f));
    const candidates = newFiles.length ? newFiles : afterList;

    if (!candidates.length) {
      throw ExceptionFactory.mediaGenerationFailed(
        req.collect === 'video'
          ? 'Grok finished but no video file was found in the sandbox.'
          : 'Grok finished but no image file was found in the sandbox. Ensure imagesApi/tools are enabled and the key is agent (or admin session).',
        {
          reason:
            req.collect === 'video' ? 'no_video_in_sandbox' : 'no_image_in_sandbox',
        },
      );
    }

    const artifacts: MediaArtifact[] = [];
    for (const file of candidates.slice(0, Math.min(req.n ?? 1, 4))) {
      const bytes = await fs.readFile(file);
      const ext = path.extname(file);
      artifacts.push({
        bytes,
        mime: mimeFromExt(ext),
        originalName: path.basename(file),
        source: {
          provider: this.id,
          rawMeta: {
            sandbox,
            file,
            prompt,
            timeoutMs,
            maxTurns,
            alwaysApprove,
            collect: req.collect,
          },
        },
      });
    }

    if (process.env.MEDIA_KEEP_RUNS !== '1') {
      void fs.rm(sandbox, { recursive: true, force: true }).catch(() => undefined);
    }

    return artifacts;
  }
}

async function listImageFiles(dir: string): Promise<Set<string>> {
  return listMediaFiles(dir, IMAGE_EXTS);
}

async function listVideoFiles(dir: string): Promise<Set<string>> {
  return listMediaFiles(dir, VIDEO_EXTS);
}

async function listMediaFiles(
  dir: string,
  exts: Set<string>,
): Promise<Set<string>> {
  const out = new Set<string>();
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isFile()) continue;
      const ext = path.extname(e.name).toLowerCase();
      if (!exts.has(ext)) continue;
      out.add(path.join(dir, e.name));
    }
  } catch {
    /* empty */
  }
  return out;
}

export const grokToolsMediaProvider = new GrokToolsMediaProvider();
