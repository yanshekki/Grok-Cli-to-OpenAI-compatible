import { DEFAULT_PORT, resolveRuntimePaths } from '../lib/paths';
import { readEnvFile } from '../lib/env-file';
import { stopGateway } from '../lib/process-mgr';
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

  const { stoppedPid, freedPort } = await stopGateway({
    pidFile: paths.pidFile,
    port,
  });

  if (stoppedPid) {
    ok('Stopped (pid file)');
  }
  if (freedPort.length) {
    ok(`Freed port ${port} (killed orphan pid: ${freedPort.join(', ')})`);
  }

  if (!stoppedPid && freedPort.length === 0) {
    fail('Not running (no pid / process already dead)');
    info(`Port ${port} is free.`);
    process.exitCode = 1;
    return;
  }

  if (!stoppedPid && freedPort.length) {
    warn('Pid file was missing/stale; cleaned up process still bound to port.');
  }
}
