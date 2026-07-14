import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import { env } from '../config/env';

const execFileAsync = promisify(execFile);

export const PM2_APP_NAME = 'grok-openai-gateway';

function packageRoot(): string {
  // dist/services -> package root
  return path.resolve(__dirname, '../..');
}

async function whichPm2(): Promise<string | null> {
  try {
    const { stdout } = await execFileAsync('which', ['pm2'], {
      timeout: 5000,
      env: process.env,
    });
    const p = stdout.trim();
    return p || null;
  } catch {
    return null;
  }
}

async function runPm2(args: string[]): Promise<{ stdout: string; stderr: string }> {
  const bin = await whichPm2();
  if (!bin) {
    throw new Error('pm2 not found on PATH. Install: npm i -g pm2');
  }
  try {
    const { stdout, stderr } = await execFileAsync(bin, args, {
      timeout: 60_000,
      maxBuffer: 5 * 1024 * 1024,
      env: process.env,
      cwd: packageRoot(),
    });
    return { stdout: stdout || '', stderr: stderr || '' };
  } catch (e) {
    const err = e as { stdout?: string; stderr?: string; message?: string };
    const msg = [err.stderr, err.stdout, err.message].filter(Boolean).join('\n');
    throw new Error(msg || 'pm2 command failed');
  }
}

export class Pm2Service {
  isEnabled(): boolean {
    return env.PM2_ADMIN_ENABLED !== false;
  }

  async status() {
    if (!this.isEnabled()) {
      return {
        enabled: false,
        available: false,
        message: 'PM2 admin disabled (PM2_ADMIN_ENABLED=false)',
        app: null,
      };
    }
    const bin = await whichPm2();
    if (!bin) {
      return {
        enabled: true,
        available: false,
        message: 'pm2 binary not found',
        app: null,
      };
    }
    try {
      const { stdout } = await runPm2(['jlist']);
      const list = JSON.parse(stdout || '[]') as Array<Record<string, unknown>>;
      const app =
        list.find((p) => p.name === PM2_APP_NAME) ||
        list.find((p) => String(p.name || '').includes('grok'));
      if (!app) {
        return {
          enabled: true,
          available: true,
          message: `App "${PM2_APP_NAME}" not found in pm2 list`,
          app: null,
          appName: PM2_APP_NAME,
        };
      }
      const envPm2 = app.pm2_env as Record<string, unknown> | undefined;
      const monit = app.monit as Record<string, number> | undefined;
      return {
        enabled: true,
        available: true,
        message: 'ok',
        appName: PM2_APP_NAME,
        app: {
          name: app.name,
          pm_id: app.pm_id,
          pid: envPm2?.pm_pid ?? app.pid,
          status: envPm2?.status ?? 'unknown',
          restarts: envPm2?.restart_time ?? 0,
          uptime: envPm2?.pm_uptime ?? null,
          memory: monit?.memory ?? null,
          cpu: monit?.cpu ?? null,
          exec_mode: envPm2?.exec_mode ?? null,
        },
      };
    } catch (e) {
      return {
        enabled: true,
        available: true,
        message: e instanceof Error ? e.message : String(e),
        app: null,
        appName: PM2_APP_NAME,
      };
    }
  }

  async start() {
    const eco = path.join(packageRoot(), 'ecosystem.config.cjs');
    if (fs.existsSync(eco)) {
      return runPm2(['start', eco]);
    }
    return runPm2(['start', path.join(packageRoot(), 'dist', 'server.js'), '--name', PM2_APP_NAME]);
  }

  async stop() {
    return runPm2(['stop', PM2_APP_NAME]);
  }

  async restart() {
    return runPm2(['restart', PM2_APP_NAME]);
  }

  async reload() {
    return runPm2(['reload', PM2_APP_NAME]);
  }

  async logs(lines = 100) {
    const n = Math.min(Math.max(lines, 10), 500);
    // Prefer file logs from ecosystem
    const root = packageRoot();
    const outPath = path.join(root, 'logs', 'pm2-out.log');
    const errPath = path.join(root, 'logs', 'pm2-error.log');
    const chunks: string[] = [];
    for (const f of [outPath, errPath]) {
      if (fs.existsSync(f)) {
        const raw = fs.readFileSync(f, 'utf8');
        const tail = raw.split('\n').slice(-n).join('\n');
        chunks.push(`===== ${path.basename(f)} =====\n${tail}`);
      }
    }
    if (chunks.length) {
      return { stdout: chunks.join('\n\n'), stderr: '' };
    }
    try {
      return await runPm2([
        'logs',
        PM2_APP_NAME,
        '--nostream',
        '--lines',
        String(n),
      ]);
    } catch (e) {
      return {
        stdout: '',
        stderr: e instanceof Error ? e.message : String(e),
      };
    }
  }
}

export const pm2Service = new Pm2Service();
