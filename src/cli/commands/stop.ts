import { resolveRuntimePaths } from '../lib/paths';
import { stopProcess } from '../lib/process-mgr';
import { fail, ok } from '../lib/print';

export async function cmdStop(opts: { home?: string; forceHome?: boolean }): Promise<void> {
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });
  const stopped = await stopProcess(paths.pidFile);
  if (stopped) {
    ok('Stopped');
  } else {
    fail('Not running (no pid / process already dead)');
    process.exitCode = 1;
  }
}
