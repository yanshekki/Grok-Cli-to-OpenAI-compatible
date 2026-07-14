import { createInterface } from 'node:readline';
import { execa } from 'execa';
import { env } from '../config/env';
import type {
  GrokJsonResult,
  GrokRunOptions,
  GrokRunResult,
  GrokStreamEvent,
} from '../interfaces/grok.interface';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { logger } from '../utils/logger';

export class GrokCliService {
  private active = 0;

  get activeCount(): number {
    return this.active;
  }

  get maxConcurrent(): number {
    return env.GROK_MAX_CONCURRENT;
  }

  tryAcquire(): boolean {
    if (this.active >= env.GROK_MAX_CONCURRENT) {
      return false;
    }
    this.active += 1;
    return true;
  }

  release(): void {
    this.active = Math.max(0, this.active - 1);
  }

  buildArgs(options: GrokRunOptions): string[] {
    const args = [
      '-p',
      options.prompt,
      '-m',
      options.model,
      '--cwd',
      options.cwd,
      '--output-format',
      options.stream ? 'streaming-json' : 'json',
    ];

    if (env.GROK_ALWAYS_APPROVE) {
      args.push('--always-approve');
    }

    if (options.sessionId) {
      args.push('-s', options.sessionId);
    }

    return args;
  }

  async runOnce(options: GrokRunOptions): Promise<GrokRunResult> {
    const args = this.buildArgs({ ...options, stream: false });
    const timeout = options.timeoutMs ?? env.GROK_TIMEOUT_MS;

    logger.debug({ bin: env.GROK_BIN, model: options.model, cwd: options.cwd }, 'Spawning grok');

    try {
      const result = await execa(env.GROK_BIN, args, {
        timeout,
        reject: false,
        env: this.sanitizedEnv(),
        maxBuffer: 20 * 1024 * 1024,
      });

      if (result.timedOut) {
        throw ExceptionFactory.grokTimeout();
      }

      if (result.exitCode !== 0) {
        const stderr = (result.stderr || '').slice(0, 2000);
        logger.error({ exitCode: result.exitCode, stderr }, 'Grok CLI failed');
        throw ExceptionFactory.grokError(
          `Grok CLI exited with code ${result.exitCode}`,
          { stderr },
        );
      }

      const raw = this.parseJsonResult(result.stdout || '');
      return {
        text: raw.text ?? '',
        stopReason: raw.stopReason,
        sessionId: raw.sessionId,
        raw,
      };
    } catch (err) {
      if (err instanceof Error && 'code' in err && (err as { code?: string }).code === 'ENOENT') {
        throw ExceptionFactory.grokNotAvailable(
          `Grok binary not found: ${env.GROK_BIN}. Install Grok CLI and ensure it is on PATH.`,
        );
      }
      throw err;
    }
  }

  async *stream(options: GrokRunOptions): AsyncGenerator<GrokStreamEvent> {
    const args = this.buildArgs({ ...options, stream: true });
    const timeout = options.timeoutMs ?? env.GROK_TIMEOUT_MS;

    const proc = execa(env.GROK_BIN, args, {
      timeout,
      reject: false,
      env: this.sanitizedEnv(),
      buffer: false,
    });

    if (!proc.stdout) {
      throw ExceptionFactory.grokError('Grok CLI produced no stdout');
    }

    const rl = createInterface({ input: proc.stdout });
    try {
      for await (const line of rl) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        try {
          const event = JSON.parse(trimmed) as GrokStreamEvent;
          yield event;
        } catch {
          logger.warn({ line: trimmed.slice(0, 200) }, 'Skipping non-JSON grok stream line');
        }
      }

      const result = await proc;
      if (result.timedOut) {
        throw ExceptionFactory.grokTimeout();
      }
      if (result.exitCode !== 0 && result.exitCode !== null) {
        const stderr = (result.stderr || '').toString().slice(0, 2000);
        throw ExceptionFactory.grokError(
          `Grok CLI exited with code ${result.exitCode}`,
          { stderr },
        );
      }
    } finally {
      rl.close();
      try {
        proc.kill('SIGTERM');
      } catch {
        /* ignore */
      }
    }
  }

  async isAvailable(): Promise<boolean> {
    try {
      const result = await execa(env.GROK_BIN, ['--version'], {
        timeout: 10_000,
        reject: false,
      });
      return result.exitCode === 0;
    } catch {
      return false;
    }
  }

  async listModelsFromCli(): Promise<string[]> {
    try {
      const result = await execa(env.GROK_BIN, ['models'], {
        timeout: 30_000,
        reject: false,
        env: this.sanitizedEnv(),
      });
      if (result.exitCode !== 0) {
        return [];
      }
      return this.parseModelsOutput(result.stdout || '');
    } catch {
      return [];
    }
  }

  parseModelsOutput(stdout: string): string[] {
    const models: string[] = [];
    for (const line of stdout.split('\n')) {
      const match = line.match(/^\s*[\*\-]\s+([a-zA-Z0-9._\-]+)/);
      if (match?.[1]) {
        models.push(match[1]);
      }
    }
    return [...new Set(models)];
  }

  parseJsonResult(stdout: string): GrokJsonResult {
    const trimmed = stdout.trim();
    if (!trimmed) {
      return { text: '' };
    }

    // Prefer last JSON object if CLI prints extra lines
    const lines = trimmed.split('\n').filter(Boolean);
    for (let i = lines.length - 1; i >= 0; i -= 1) {
      try {
        return JSON.parse(lines[i]!) as GrokJsonResult;
      } catch {
        /* try previous */
      }
    }

    try {
      return JSON.parse(trimmed) as GrokJsonResult;
    } catch {
      // Fallback: treat entire stdout as plain text
      return { text: trimmed };
    }
  }

  private sanitizedEnv(): NodeJS.ProcessEnv {
    const {
      DATABASE_URL: _db,
      ENCRYPTION_KEY: _enc,
      ADMIN_BOOTSTRAP_KEY: _admin,
      ...rest
    } = process.env;
    return rest;
  }
}

export const grokCliService = new GrokCliService();
