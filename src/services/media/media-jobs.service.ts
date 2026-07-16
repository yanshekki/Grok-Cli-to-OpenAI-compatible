import { prisma } from '../../config/database';
import { ExceptionFactory } from '../../exceptions/exception.factory';
import { createId } from '../../utils/id';
import { toPersistentApiKeyId } from '../../utils/api-key-id';
import { apiFeaturesService } from '../api-features.service';
import { mediaStoreService } from './media-store.service';
import { mockMediaProvider } from './providers/mock.provider';
import type { AuthenticatedApiKey } from '../../interfaces';
import { KEY_MODES, ROLES } from '../../config/constants';

export type MediaJobPublic = {
  id: string;
  object: 'video';
  status: string;
  model: string | null;
  prompt: string | null;
  created_at: number;
  completed_at: number | null;
  error: string | null;
  result_asset_id: string | null;
};

function toPublic(row: {
  id: string;
  status: string;
  model: string | null;
  prompt: string | null;
  createdAt: Date;
  completedAt: Date | null;
  errorMessage: string | null;
  resultAssetId: string | null;
}): MediaJobPublic {
  return {
    id: row.id,
    object: 'video',
    status: row.status,
    model: row.model,
    prompt: row.prompt,
    created_at: Math.floor(row.createdAt.getTime() / 1000),
    completed_at: row.completedAt
      ? Math.floor(row.completedAt.getTime() / 1000)
      : null,
    error: row.errorMessage,
    result_asset_id: row.resultAssetId,
  };
}

/**
 * Async video jobs (OpenAI-style poll model).
 * Mock provider completes immediately with a tiny PNG labeled as video placeholder
 * unless real video bytes available — status completed + asset for download.
 */
export class MediaJobsService {
  async createVideo(input: {
    apiKey: AuthenticatedApiKey;
    prompt: string;
    model?: string;
    seconds?: number;
  }): Promise<MediaJobPublic> {
    const features = await apiFeaturesService.get();
    if (!features.videoApi) {
      throw ExceptionFactory.mediaNotSupported(
        'Video API is disabled (Admin → API features → videoApi)',
      );
    }
    const isAdmin = input.apiKey.role === ROLES.ADMIN;
    const isAgent = input.apiKey.mode === KEY_MODES.AGENT;
    if (!isAdmin && !isAgent) {
      throw ExceptionFactory.mediaForbidden(
        'Video generation requires agent-mode or admin API key',
      );
    }

    const owner = await toPersistentApiKeyId(input.apiKey.id);
    const id = createId();
    const row = await prisma.mediaJob.create({
      data: {
        id,
        apiKeyId: owner,
        kind: 'video',
        status: 'queued',
        prompt: input.prompt,
        model: input.model ?? null,
        provider:
          (process.env.MEDIA_PROVIDER || 'mock').toLowerCase() === 'mock'
            ? 'mock'
            : 'grok-tools',
      },
    });

    // Fire-and-forget process
    void this.processVideoJob(row.id, input.apiKey.id, input.prompt).catch(
      () => undefined,
    );

    return toPublic(row);
  }

  private async processVideoJob(
    jobId: string,
    apiKeyId: string,
    prompt: string,
  ): Promise<void> {
    await prisma.mediaJob.update({
      where: { id: jobId },
      data: { status: 'in_progress', startedAt: new Date() },
    });

    try {
      // Real video gen is heavy; mock stores a placeholder image asset
      // (clients still poll job → content). Label mime as video/mp4 only if real.
      const arts = await mockMediaProvider.generateImage({
        prompt: `[video placeholder] ${prompt}`,
        apiKeyId,
        n: 1,
      });
      const art = arts[0]!;
      const stored = await mediaStoreService.save({
        apiKeyId,
        kind: 'video',
        mime: 'image/png', // placeholder until real mp4 provider
        bytes: art.bytes,
        originalName: `video-${jobId.slice(0, 8)}.png`,
        source: 'generation',
        provider: art.source.provider,
        prompt,
        meta: { kind: 'video_placeholder', note: 'Mock video uses PNG placeholder' },
      });

      await prisma.mediaJob.update({
        where: { id: jobId },
        data: {
          status: 'completed',
          resultAssetId: stored.id,
          completedAt: new Date(),
        },
      });
    } catch (err) {
      await prisma.mediaJob.update({
        where: { id: jobId },
        data: {
          status: 'failed',
          errorMessage:
            err instanceof Error ? err.message : 'Video generation failed',
          completedAt: new Date(),
        },
      });
    }
  }

  async getJob(apiKeyId: string, jobId: string): Promise<MediaJobPublic> {
    const owner = await toPersistentApiKeyId(apiKeyId);
    const row = await prisma.mediaJob.findFirst({
      where: { id: jobId, apiKeyId: owner },
    });
    if (!row) throw ExceptionFactory.notFound('Video job');
    return toPublic(row);
  }

  async getJobContent(
    apiKeyId: string,
    jobId: string,
  ): Promise<{ bytes: Buffer; mime: string; originalName: string | null }> {
    const job = await this.getJob(apiKeyId, jobId);
    if (job.status !== 'completed' || !job.result_asset_id) {
      throw ExceptionFactory.validation(
        `Video job is not ready (status=${job.status})`,
      );
    }
    return mediaStoreService.readBytes(job.result_asset_id, apiKeyId);
  }
}

export const mediaJobsService = new MediaJobsService();
