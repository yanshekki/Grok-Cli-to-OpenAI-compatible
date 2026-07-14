import { updateService } from '../../services/update.service';
import { fail, info, ok, warn } from '../lib/print';
import { resolveRuntimePaths } from '../lib/paths';
import { cmdRestart } from './restart';

export async function cmdUpdate(opts: {
  home?: string;
  forceHome?: boolean;
  check?: boolean;
  restart?: boolean;
  channel?: 'auto' | 'git' | 'npm-global' | 'npm-local';
}): Promise<void> {
  const infoVer = await updateService.getVersionInfo();
  info(`Current:  ${infoVer.current}`);
  info(`Channel:  ${infoVer.channel} (${infoVer.installSource})`);
  info(`npm:      ${infoVer.latestNpm ?? 'n/a'}`);
  info(`GitHub:   ${infoVer.latestGithub ?? 'n/a'}`);
  info(`Latest:   ${infoVer.latest ?? 'n/a'}`);
  info(`Update?:  ${infoVer.updateAvailable ? 'yes' : 'no / unknown'}`);

  if (opts.check) {
    if (infoVer.updateAvailable) {
      warn('Update available — run: gctoac update');
      process.exitCode = 0;
    } else {
      ok('Already up to date (or no newer npm/GitHub release found)');
    }
    return;
  }

  if (!infoVer.updateAvailable && infoVer.channel !== 'git') {
    warn('No newer version detected; running update anyway…');
  }

  try {
    const result = await updateService.performUpdate({
      channel: opts.channel || 'auto',
    });
    for (const line of result.log) {
      info(line);
    }
    ok(result.message);
    info(`Version: ${result.fromVersion} → ${result.toVersion ?? '?'}`);

    if (opts.restart !== false && result.restartRequired) {
      info('Restarting gateway…');
      const paths = resolveRuntimePaths({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
      });
      await cmdRestart({
        home: paths.home,
        forceHome: true,
      });
    } else if (result.restartRequired) {
      warn('Restart required: gctoac restart');
    }
  } catch (e) {
    fail(e instanceof Error ? e.message : String(e));
    process.exitCode = 1;
  }
}
