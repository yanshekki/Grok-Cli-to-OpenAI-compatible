import path from 'node:path';
import {
  ensureHomeDirs,
  resolveRuntimePaths,
  DEFAULT_PORT,
} from '../lib/paths';
import { ensureEnvFile, loadEnvIntoProcess } from '../lib/env-file';
import fs from 'node:fs';
import {
  clearPid,
  findPidsOnPort,
  isProcessRunning,
  readPid,
  startDetached,
  stopGateway,
} from '../lib/process-mgr';
import { baseUrls, fail, info, ok, warn } from '../lib/print';

function tailLog(file: string, maxLines = 30): string {
  try {
    if (!fs.existsSync(file)) return '';
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    return lines.slice(-maxLines).join('\n').trim();
  } catch {
    return '';
  }
}

export async function cmdStart(opts: {
  home?: string;
  port?: number;
  foreground?: boolean;
  forceHome?: boolean;
}): Promise<void> {
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });
  ensureHomeDirs(paths);

  const envFile = ensureEnvFile(paths, opts.port ?? DEFAULT_PORT);
  if (opts.port) {
    envFile.PORT = String(opts.port);
  }
  loadEnvIntoProcess(paths.envFile);

  const port = Number(opts.port || envFile.PORT || DEFAULT_PORT);

  const existing = readPid(paths.pidFile);
  if (existing && isProcessRunning(existing)) {
    fail(`Already running (pid ${existing}). Use: gctoac stop`);
    process.exitCode = 1;
    return;
  }
  if (existing && !isProcessRunning(existing)) {
    clearPid(paths.pidFile);
  }

  // Orphan: port busy but no valid pid file
  const orphans = findPidsOnPort(port);
  if (orphans.length) {
    warn(
      `Port ${port} already in use (pid ${orphans.join(', ')}). Cleaning up…`,
    );
    await stopGateway({ pidFile: paths.pidFile, port });
    await new Promise((r) => setTimeout(r, 400));
    const still = findPidsOnPort(port);
    if (still.length) {
      fail(
        `Port ${port} still in use (pid ${still.join(', ')}). Kill manually: kill ${still.join(' ')}`,
      );
      process.exitCode = 1;
      return;
    }
    ok(`Port ${port} freed`);
  }

  const env: NodeJS.ProcessEnv = {
    ...process.env,
    ...envFile,
    PORT: String(port),
    DATABASE_URL: envFile.DATABASE_URL || paths.databaseUrl,
    STORAGE_DIR: envFile.STORAGE_DIR || paths.storageDir,
    GCTOAC_HOME: paths.home,
  };

  if (opts.foreground) {
    info(`Starting foreground on port ${port}…`);
    for (const [k, v] of Object.entries(env)) {
      if (v !== undefined) process.env[k] = v;
    }
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require(path.join(paths.packageRoot, 'dist', 'server.js'));
    return;
  }

  const pid = startDetached(paths, env);
  await new Promise((r) => setTimeout(r, 800));
  if (!isProcessRunning(pid)) {
    clearPid(paths.pidFile);
    const errLog = path.join(paths.logsDir, 'gctoac.err.log');
    fail(`Server exited immediately (pid ${pid}).`);
    info(`  Logs: ${errLog}`);
    const tail = tailLog(errLog);
    if (tail) {
      info('--- last error log ---');
      console.error(tail);
      info('----------------------');
    }
    // If crash was EADDRINUSE, hint
    if (tail.includes('EADDRINUSE')) {
      warn(`Port still busy. Try: gctoac stop && gctoac start`);
    }
    process.exitCode = 1;
    return;
  }

  ok(`Started pid ${pid}`);
  const urls = baseUrls(port);
  info(`  API:   ${urls.api}`);
  info(`  Admin: ${urls.admin}`);
  info(`  Logs:  ${path.join(paths.logsDir, 'gctoac.out.log')}`);
}
