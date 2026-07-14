import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import type { RuntimePaths } from './paths';

export function readPid(pidFile: string): number | null {
  try {
    if (!fs.existsSync(pidFile)) return null;
    const n = Number(fs.readFileSync(pidFile, 'utf8').trim());
    return Number.isFinite(n) && n > 0 ? n : null;
  } catch {
    return null;
  }
}

export function isProcessRunning(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

export function writePid(pidFile: string, pid: number): void {
  fs.mkdirSync(path.dirname(pidFile), { recursive: true });
  fs.writeFileSync(pidFile, String(pid), 'utf8');
}

export function clearPid(pidFile: string): void {
  try {
    fs.unlinkSync(pidFile);
  } catch {
    /* ignore */
  }
}

export function startDetached(paths: RuntimePaths, env: NodeJS.ProcessEnv): number {
  const serverJs = path.join(paths.packageRoot, 'dist', 'server.js');
  if (!fs.existsSync(serverJs)) {
    throw new Error(`Server not built: ${serverJs}. Run npm run build first.`);
  }

  const outLog = path.join(paths.logsDir, 'gctoac.out.log');
  const errLog = path.join(paths.logsDir, 'gctoac.err.log');
  const outFd = fs.openSync(outLog, 'a');
  const errFd = fs.openSync(errLog, 'a');

  const child = spawn(process.execPath, [serverJs], {
    detached: true,
    stdio: ['ignore', outFd, errFd],
    env: {
      ...process.env,
      ...env,
      GCTOAC_HOME: paths.home,
    },
    cwd: paths.packageRoot,
  });

  // Close parent copies of log FDs so the CLI event loop can exit
  try {
    fs.closeSync(outFd);
  } catch {
    /* ignore */
  }
  try {
    fs.closeSync(errFd);
  } catch {
    /* ignore */
  }

  child.unref();
  if (!child.pid) {
    throw new Error('Failed to spawn server process');
  }
  writePid(paths.pidFile, child.pid);
  return child.pid;
}

export async function stopProcess(pidFile: string, timeoutMs = 10_000): Promise<boolean> {
  const pid = readPid(pidFile);
  if (!pid) return false;
  if (!isProcessRunning(pid)) {
    clearPid(pidFile);
    return false;
  }

  try {
    process.kill(pid, 'SIGTERM');
  } catch {
    clearPid(pidFile);
    return false;
  }

  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (!isProcessRunning(pid)) {
      clearPid(pidFile);
      return true;
    }
    await new Promise((r) => setTimeout(r, 200));
  }

  try {
    process.kill(pid, 'SIGKILL');
  } catch {
    /* ignore */
  }
  clearPid(pidFile);
  return true;
}
