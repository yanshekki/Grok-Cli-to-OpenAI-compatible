import path from 'node:path';
import {
  ensureHomeDirs,
  resolveRuntimePaths,
  DEFAULT_PORT,
} from '../lib/paths';
import { ensureEnvFile, loadEnvIntoProcess } from '../lib/env-file';
import {
  isProcessRunning,
  readPid,
  startDetached,
} from '../lib/process-mgr';
import { baseUrls, fail, info, ok, warn } from '../lib/print';

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
  ok(`Started pid ${pid}`);
  const urls = baseUrls(port);
  info(`  API:   ${urls.api}`);
  info(`  Admin: ${urls.admin}`);
  info(`  Logs:  ${path.join(paths.logsDir, 'gctoac.out.log')}`);
  warn('First run? Ensure ENCRYPTION_KEY is set and gctoac setup was completed.');
}
