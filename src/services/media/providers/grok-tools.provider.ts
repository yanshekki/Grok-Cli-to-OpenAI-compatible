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

function mimeFromExt(ext: string): string {
  switch (ext.toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.webp':
      return 'image/webp';
    case '.gif':
      return 'image/gif';
    default:
      return 'image/png';
  }
}

/**
 * Generate / edit images via Grok CLI built-in tools (image_gen / image_edit).
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
    const prompt =
      `Use the image_edit tool on ./${srcName} with this instruction and save result as output.png in the cwd.\n` +
      `Instruction: ${req.prompt}`;
    return this.runGrokCollectImages({
      prompt,
      model: req.model,
      n: req.n,
      timeoutMs: req.timeoutMs,
      sandbox,
      toolsAllowlist: 'image_edit,image_gen',
    });
  }

  async generateImage(req: ImageGenRequest): Promise<MediaArtifact[]> {
    const runId = createId();
    const sandbox = path.join(env.storageDir, 'media-runs', runId);
    await fs.mkdir(sandbox, { recursive: true });
    const sizeHint = req.size ? ` Target size roughly ${req.size}.` : '';
    const prompt =
      `Use the image_gen tool to generate an image for this prompt and save the result as a PNG file in the current working directory (e.g. output.png).\n` +
      `Prompt: ${req.prompt}${sizeHint}\n` +
      `Do not only describe the image — you must invoke image_gen and write a real image file.`;
    return this.runGrokCollectImages({
      prompt,
      model: req.model,
      n: req.n,
      timeoutMs: req.timeoutMs,
      sandbox,
      toolsAllowlist: 'image_gen',
    });
  }

  private async runGrokCollectImages(req: {
    prompt: string;
    model?: string;
    n?: number;
    timeoutMs?: number;
    sandbox: string;
    toolsAllowlist: string;
  }): Promise<MediaArtifact[]> {
    const { sandbox, prompt } = req;
    const before = await listImageFiles(sandbox);

    try {
      const available = await grokCliService.isAvailable();
      if (!available) {
        throw ExceptionFactory.mediaProviderUnavailable(
          'Grok CLI is not available for image generation',
        );
      }

      for await (const _ev of grokCliService.stream({
        prompt,
        model: req.model || env.GROK_DEFAULT_MODEL,
        cwd: sandbox,
        stream: true,
        timeoutMs: req.timeoutMs ?? Math.min(env.GROK_TIMEOUT_MS, 300_000),
        alwaysApprove: true,
        toolsAllowlist: req.toolsAllowlist,
        maxTurns: 8,
      })) {
        /* consume */
      }
    } catch (err) {
      logger.warn({ err, sandbox }, 'Grok tools image generation failed');
      if (err && typeof err === 'object' && 'statusCode' in err) throw err;
      throw ExceptionFactory.mediaGenerationFailed(
        err instanceof Error ? err.message : 'Grok image generation failed',
      );
    }

    const afterList = [...(await listImageFiles(sandbox))];
    const newFiles = afterList.filter((f) => !before.has(f));
    const candidates = newFiles.length ? newFiles : afterList;

    if (!candidates.length) {
      throw ExceptionFactory.mediaGenerationFailed(
        'Grok finished but no image file was found in the sandbox. Ensure image tools are available and agent mode is enabled.',
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
          rawMeta: { sandbox, file, prompt },
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
  const out = new Set<string>();
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isFile()) continue;
      const ext = path.extname(e.name).toLowerCase();
      if (!IMAGE_EXTS.has(ext)) continue;
      out.add(path.join(dir, e.name));
    }
  } catch {
    /* empty */
  }
  return out;
}

export const grokToolsMediaProvider = new GrokToolsMediaProvider();
