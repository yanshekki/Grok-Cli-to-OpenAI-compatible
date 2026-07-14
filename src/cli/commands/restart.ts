import { cmdStart } from './start';
import { cmdStop } from './stop';
import { resolveRuntimePaths } from '../lib/paths';
import { readPreferredRunner } from '../lib/runner-info';
import { info } from '../lib/print';

export async function cmdRestart(opts: {
  home?: string;
  port?: number;
  foreground?: boolean;
  pm2?: boolean;
  forceHome?: boolean;
}): Promise<void> {
  process.exitCode = 0;
  await cmdStop(opts).catch(() => undefined);
  await new Promise((r) => setTimeout(r, 400));

  // Honor preferred_runner unless user explicitly chose --pm2 / --foreground
  let pm2 = opts.pm2;
  if (pm2 == null && !opts.foreground) {
    const paths = resolveRuntimePaths({
      home: opts.home,
      forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const preferred = readPreferredRunner(paths.packageRoot);
    if (preferred === 'pm2') {
      pm2 = true;
      info('Preferred runner is PM2 — restarting under PM2');
    }
  }

  await cmdStart({ ...opts, pm2 });
}
