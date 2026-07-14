import { cmdStart } from './start';
import { cmdStop } from './stop';

export async function cmdRestart(opts: {
  home?: string;
  port?: number;
  foreground?: boolean;
  forceHome?: boolean;
}): Promise<void> {
  process.exitCode = 0;
  await cmdStop(opts).catch(() => undefined);
  await new Promise((r) => setTimeout(r, 400));
  await cmdStart(opts);
}
