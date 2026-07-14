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
  isProcessRunning,
  readPid,
  startDetached,
} from '../lib/process-mgr';
import { baseUrls, fail, info, ok } from '../lib/print';

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

  const existing = readPid(paths.pidFile);
  if (existing && isProcessRunning(existing)) {
    fail(`Already running (pid ${existing}). Use: gctoac stop`);
    process.exitCode = 1;
    return;
  }
  if (existing && !isProcessRunning(existing)) {
    clearPid(paths.pidFile);
  }

  const envFile = ensureEnvFile(paths, opts.port ?? DEFAULT_PORT);
  if (opts.port) {
    envFile.PORT = String(opts.port);
  }
  loadEnvIntoProcess(paths.envFile);

  const port = Number(opts.port || envFile.PORT || DEFAULT_PORT);
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
    // Apply env then require server (side-effect bootstrap)
    for (const [k, v] of Object.entries(env)) {
      if (v !== undefined) process.env[k] = v;
    }
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require(path.join(paths.packageRoot, 'dist', 'server.js'));
    return;
  }

  const pid = startDetached(paths, env);
  // Brief wait: catch immediate crash (e.g. missing deps / bad env)
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
    process.exitCode = 1;
    return;
  }

  ok(`Started pid ${pid}`);
  const urls = baseUrls(port);
  info(`  API:   ${urls.api}`);
  info(`  Admin: ${urls.admin}`);
  info(`  Logs:  ${path.join(paths.logsDir, 'gctoac.out.log')}`);
}
