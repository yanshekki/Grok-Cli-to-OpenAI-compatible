import {
  DEFAULT_PORT,
  resolveRuntimePaths,
} from '../lib/paths';
import { readEnvFile } from '../lib/env-file';
import { isProcessRunning, readPid } from '../lib/process-mgr';
import { baseUrls, fail, info, ok } from '../lib/print';

export async function cmdStatus(opts: {
  home?: string;
  forceHome?: boolean;
}): Promise<void> {
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });
  const env = readEnvFile(paths.envFile);
  const port = Number(env.PORT || DEFAULT_PORT);
  const pid = readPid(paths.pidFile);
  const running = pid ? isProcessRunning(pid) : false;
  const urls = baseUrls(port);

  info(`Home:    ${paths.home} (${paths.mode})`);
  info(`PID:     ${pid ?? '-'} ${running ? '(running)' : '(not running)'}`);
  info(`Port:    ${port}`);
  info(`API:     ${urls.api}`);
  info(`Admin:   ${urls.admin}`);

  let code = 0;
  try {
    const res = await fetch(urls.health, { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const body = (await res.json()) as { status?: string };
      ok(`Health:  ${body.status ?? res.status}`);
    } else {
      fail(`Health:  HTTP ${res.status}`);
      code = 1;
    }
  } catch {
    fail('Health:  unreachable');
    code = running ? 1 : 0;
  }

  if (!running) {
    code = code || 1;
  }

  // Hard-exit: undici keep-alive after fetch can leave the process hanging
  process.exit(code);
}
