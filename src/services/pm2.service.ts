import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import { env } from '../config/env';
import {
  findPidsOnPort,
  isProcessRunning,
  killPid,
  readPid,
} from '../cli/lib/process-mgr';
import { getDefaultHome } from '../cli/lib/paths';

const execFileAsync = promisify(execFile);

export const PM2_APP_NAME = 'grok-openai-gateway';

function packageRoot(): string {
  return path.resolve(__dirname, '../..');
}

function gctoacPidFile(): string {
  // Prefer GCTOAC_HOME / project cwd pid (same as CLI)
  const home = process.env.GCTOAC_HOME?.trim() || getDefaultHome();
  const candidates = [
    path.join(process.cwd(), 'gctoac.pid'),
    path.join(home, 'gctoac.pid'),
  ];
  for (const f of candidates) {
    if (fs.existsSync(f)) return f;
  }
  return candidates[0]!;
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

function tailErrorLog(lines = 40): string {
  const errPath = path.join(packageRoot(), 'logs', 'pm2-error.log');
  try {
    if (!fs.existsSync(errPath)) return '';
    const raw = fs.readFileSync(errPath, 'utf8');
    return raw.split('\n').slice(-lines).join('\n');
  } catch {
    return '';
  }
}

function detectPortConflict(port: number): {
  conflict: boolean;
  pids: number[];
  gctoacPid: number | null;
  message: string | null;
} {
  const pids = findPidsOnPort(port);
  const gctoacPid = readPid(gctoacPidFile());
  const gctoacRunning = gctoacPid != null && isProcessRunning(gctoacPid);
  if (pids.length === 0) {
    return { conflict: false, pids: [], gctoacPid, message: null };
  }
  const viaGctoac = gctoacRunning && pids.includes(gctoacPid!);
  return {
    conflict: true,
    pids,
    gctoacPid: gctoacRunning ? gctoacPid : null,
    message: viaGctoac
      ? `Port ${port} is held by gctoac (pid ${gctoacPid}). Stop it first: gctoac stop — then PM2 start.`
      : `Port ${port} is in use (pid ${pids.join(', ')}). Free it before PM2 start.`,
  };
}

/** Free port / gctoac before PM2 binds — avoids EADDRINUSE crash loops */
async function freePortForPm2(port: number): Promise<string[]> {
  const notes: string[] = [];
  const pidFile = gctoacPidFile();
  const gctoacPid = readPid(pidFile);
  if (gctoacPid && isProcessRunning(gctoacPid)) {
    await killPid(gctoacPid);
    try {
      fs.unlinkSync(pidFile);
    } catch {
      /* ignore */
    }
    notes.push(`stopped gctoac pid ${gctoacPid}`);
  }
  for (const p of findPidsOnPort(port)) {
    await killPid(p);
    notes.push(`killed listener pid ${p}`);
  }
  await new Promise((r) => setTimeout(r, 500));
  return notes;
}

export class Pm2Service {
  isEnabled(): boolean {
    return env.PM2_ADMIN_ENABLED !== false;
  }

  async status() {
    const port = env.PORT;
    const portInfo = detectPortConflict(port);

    if (!this.isEnabled()) {
      return {
        enabled: false,
        available: false,
        message: 'PM2 admin disabled (PM2_ADMIN_ENABLED=false)',
        app: null,
        port,
        portConflict: portInfo,
      };
    }
    const bin = await whichPm2();
    if (!bin) {
      return {
        enabled: true,
        available: false,
        message: 'pm2 binary not found — run: npm install -g pm2',
        app: null,
        port,
        portConflict: portInfo,
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
          message: portInfo.conflict
            ? portInfo.message
            : `App "${PM2_APP_NAME}" not in pm2 list (use Start)`,
          app: null,
          appName: PM2_APP_NAME,
          port,
          portConflict: portInfo,
          lastError: portInfo.conflict ? tailErrorLog(15) : '',
        };
      }
      const envPm2 = app.pm2_env as Record<string, unknown> | undefined;
      const monit = app.monit as Record<string, number> | undefined;
      const status = String(envPm2?.status ?? 'unknown');
      const restarts = Number(envPm2?.restart_time ?? 0);
      const errored = status === 'errored' || status === 'stopped';
      let message = 'ok';
      if (status === 'errored') {
        message = portInfo.conflict
          ? portInfo.message!
          : 'Process errored — see logs (often EADDRINUSE if gctoac also running)';
      } else if (status === 'online' && portInfo.conflict && !portInfo.pids.includes(Number(envPm2?.pm_pid || 0))) {
        message = portInfo.message!;
      }

      return {
        enabled: true,
        available: true,
        message,
        appName: PM2_APP_NAME,
        app: {
          name: app.name,
          pm_id: app.pm_id,
          pid: envPm2?.pm_pid ?? app.pid,
          status,
          restarts,
          uptime: envPm2?.pm_uptime ?? null,
          memory: monit?.memory ?? null,
          cpu: monit?.cpu ?? null,
          exec_mode: envPm2?.exec_mode ?? null,
        },
        port,
        portConflict: portInfo,
        lastError: errored || restarts > 5 ? tailErrorLog(25) : '',
      };
    } catch (e) {
      return {
        enabled: true,
        available: true,
        message: e instanceof Error ? e.message : String(e),
        app: null,
        appName: PM2_APP_NAME,
        port,
        portConflict: portInfo,
        lastError: tailErrorLog(25),
      };
    }
  }

  async start() {
    const notes = await freePortForPm2(env.PORT);
    // Reset crash counter if previously errored
    try {
      await runPm2(['delete', PM2_APP_NAME]);
    } catch {
      /* not running */
    }
    const eco = path.join(packageRoot(), 'ecosystem.config.cjs');
    const result =
      fs.existsSync(eco)
        ? await runPm2(['start', eco])
        : await runPm2([
            'start',
            path.join(packageRoot(), 'dist', 'server.js'),
            '--name',
            PM2_APP_NAME,
          ]);
    return {
      ...result,
      notes: notes.length
        ? `Freed port before start: ${notes.join('; ')}`
        : 'Port was free',
    };
  }

  async stop() {
    try {
      return await runPm2(['stop', PM2_APP_NAME]);
    } catch (e) {
      // Also free port if orphan left
      await freePortForPm2(env.PORT);
      throw e;
    }
  }

  async restart() {
    const notes = await freePortForPm2(env.PORT);
    // Prefer delete+start after errored state (restart alone may keep bad state)
    try {
      const { stdout } = await runPm2(['jlist']);
      const list = JSON.parse(stdout || '[]') as Array<{ name?: string; pm2_env?: { status?: string } }>;
      const app = list.find((p) => p.name === PM2_APP_NAME);
      if (!app) {
        const started = await this.start();
        return { ...started, notes: `${notes.join('; ')}; started fresh` };
      }
      if (app.pm2_env?.status === 'errored') {
        await runPm2(['delete', PM2_APP_NAME]);
        const started = await this.start();
        return {
          ...started,
          notes: `${notes.join('; ')}; deleted errored app and started`,
        };
      }
    } catch {
      /* fall through to restart */
    }
    const result = await runPm2(['restart', PM2_APP_NAME]);
    return {
      ...result,
      notes: notes.length ? notes.join('; ') : 'restarted',
    };
  }

  async reload() {
    return runPm2(['reload', PM2_APP_NAME]);
  }

  async logs(lines = 100) {
    const n = Math.min(Math.max(lines, 10), 500);
    const root = packageRoot();
    const outPath = path.join(root, 'logs', 'pm2-out.log');
    const errPath = path.join(root, 'logs', 'pm2-error.log');
    const chunks: string[] = [];
    // Prefer error log first when diagnosing crashes
    for (const f of [errPath, outPath]) {
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
