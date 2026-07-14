import { DEFAULT_PORT, resolveRuntimePaths } from '../lib/paths';
import { readEnvFile } from '../lib/env-file';
import { stopGateway } from '../lib/process-mgr';
import { stopPm2App } from '../lib/pm2-runner';
import { fail, info, ok, warn } from '../lib/print';

export async function cmdStop(opts: {
  home?: string;
  forceHome?: boolean;
  port?: number;
}): Promise<void> {
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });
  const env = readEnvFile(paths.envFile);
  const port = Number(opts.port || env.PORT || DEFAULT_PORT);

  // Stop PM2 app if used as runner
  let stoppedPm2 = false;
  try {
    stoppedPm2 = await stopPm2App(paths);
    if (stoppedPm2) ok('Stopped PM2 app');
  } catch {
    /* ignore */
  }

  const { stoppedPid, freedPort } = await stopGateway({
    pidFile: paths.pidFile,
    port,
  });

  if (stoppedPid) {
    ok('Stopped (gctoac pid file)');
  }
  if (freedPort.length) {
    ok(`Freed port ${port} (killed orphan pid: ${freedPort.join(', ')})`);
  }

  if (!stoppedPid && !stoppedPm2 && freedPort.length === 0) {
    fail('Not running (no pid / PM2 app / process already dead)');
    info(`Port ${port} is free.`);
    process.exitCode = 1;
    return;
  }

  if (!stoppedPid && freedPort.length && !stoppedPm2) {
    warn('Pid file was missing/stale; cleaned up process still bound to port.');
  }
}
