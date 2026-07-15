import { KEY_MODES, ROLES } from '../../config/constants';
import type { AuthenticatedApiKey } from '../../interfaces';
import type { ApiKeyMode, ApiKeyRole } from '../../interfaces';
import { logger } from '../../utils/logger';
import { chatService } from '../chat.service';
import { chatQueueService } from './chat-queue.service';
import { jobWaiterRegistry } from './job-waiter';
import { queuePolicyService } from './queue-policy.service';
import { prisma } from '../../config/database';

function snapshotToApiKey(
  s: {
    id: string;
    name: string;
    keyPrefix: string;
    role: string;
    mode: string;
    rateLimit: number;
    isActive: boolean;
    maxTurns: number | null;
    timeoutMs: number | null;
    ipWhitelist: string[];
  },
): AuthenticatedApiKey {
  return {
    id: s.id,
    name: s.name,
    keyPrefix: s.keyPrefix,
    role: (s.role === ROLES.ADMIN ? ROLES.ADMIN : ROLES.CLIENT) as ApiKeyRole,
    mode: (s.mode === KEY_MODES.AGENT
      ? KEY_MODES.AGENT
      : KEY_MODES.SAFE) as ApiKeyMode,
    rateLimit: s.rateLimit,
    isActive: s.isActive,
    maxTurns: s.maxTurns,
    timeoutMs: s.timeoutMs,
    ipWhitelist: s.ipWhitelist || [],
  };
}

export class ChatWorkerService {
  private running = false;
  private active = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  start(): void {
    if (this.timer) return;
    this.running = true;
    void chatQueueService.reclaimAllInFlightOnBoot().then(() => {
      this.timer = setInterval(() => {
        void this.tick();
      }, 250);
      setTimeout(() => void this.tick(), 50).unref?.();
      logger.info(
        { workerId: chatQueueService.workerId },
        'Chat queue worker started',
      );
    });
  }

  stop(): void {
    this.running = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private async tick(): Promise<void> {
    if (!this.running) return;
    const policy = await queuePolicyService.get();
    if (!policy.enabled || policy.paused) return;

    // Fill up to globalConcurrency concurrent runs
    while (this.active < policy.globalConcurrency) {
      const jobId = await chatQueueService.claimNext(policy);
      if (!jobId) break;
      this.active += 1;
      void this.runJob(jobId).finally(() => {
        this.active -= 1;
      });
    }

    jobWaiterRegistry.purgeOlderThan(policy.maxWaitMs + 60_000);
  }

  private async runJob(jobId: string): Promise<void> {
    const policy = await queuePolicyService.get();
    const hb = setInterval(() => {
      void chatQueueService.heartbeat(jobId, policy);
    }, policy.leaseHeartbeatMs);

    try {
      const row = await prisma.chatJob.findUnique({ where: { id: jobId } });
      if (!row) return;

      if (row.cancelRequested) {
        await chatQueueService.markCancelled(jobId, 'Cancelled before start');
        return;
      }

      const payload = chatQueueService.decryptPayload(row);
      await chatQueueService.markRunning(jobId);
      jobWaiterRegistry.emitStarted(jobId);

      const res = jobWaiterRegistry.getResponse(jobId);
      const ctx = {
        apiKey: snapshotToApiKey(payload.apiKeySnapshot),
        requestId: payload.requestId,
        ip: payload.ip,
        userAgent: payload.userAgent,
      };

      const result = await chatService.executeCompletion(payload.dto, ctx, res, {
        fromQueue: true,
        jobId,
        sseAlreadyInit: Boolean(res && res.headersSent),
      });

      const still = await prisma.chatJob.findUnique({
        where: { id: jobId },
        select: { cancelRequested: true },
      });
      if (still?.cancelRequested) {
        await chatQueueService.markCancelled(jobId, 'Cancelled during run');
        return;
      }

      await chatQueueService.markSucceeded(jobId);
      jobWaiterRegistry.emitDone(jobId, result ?? undefined);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      logger.error({ err: error, jobId }, 'Chat job failed');
      const row = await prisma.chatJob.findUnique({
        where: { id: jobId },
        select: { attempt: true, maxAttempts: true },
      });
      const dead = !row || row.attempt >= row.maxAttempts;
      await chatQueueService.markFailed(jobId, error, dead);
      jobWaiterRegistry.emitError(jobId, error);
    } finally {
      clearInterval(hb);
    }
  }

  getActiveCount(): number {
    return this.active;
  }
}

export const chatWorkerService = new ChatWorkerService();
