import { updateService } from '../../services/update.service';
import { fail, info, ok, warn } from '../lib/print';
import { resolveRuntimePaths } from '../lib/paths';
import { cmdRestart } from './restart';

/**
 * CLI must hard-exit: undici `fetch` keep-alive + open log FDs can leave
 * the event loop running so the shell appears stuck until Ctrl+C.
 */
function exitCli(code = 0): never {
  try {
    // Best-effort flush so stderr (console.warn) is not reordered after the shell prompt
    process.stdout.write('');
    process.stderr.write('');
  } catch {
    /* ignore */
  }
  process.exit(code);
}

export async function cmdUpdate(opts: {
  home?: string;
  forceHome?: boolean;
  check?: boolean;
  restart?: boolean;
  channel?: 'auto' | 'git' | 'npm-global' | 'npm-local';
}): Promise<void> {
  try {
    const infoVer = await updateService.getVersionInfo();
    info(`Current:  ${infoVer.current}`);
    info(`Channel:  ${infoVer.channel} (${infoVer.installSource})`);
    info(`npm:      ${infoVer.latestNpm ?? 'n/a'}`);
    info(`GitHub:   ${infoVer.latestGithub ?? 'n/a'}`);
    info(`Latest:   ${infoVer.latest ?? 'n/a'}`);
    info(`Update?:  ${infoVer.updateAvailable ? 'yes' : 'no / unknown'}`);

    if (opts.check) {
      if (infoVer.updateAvailable) {
        // use info (stdout) so message is not reordered vs shell prompt on hard exit
        info('⚠ Update available — run: gctoac update');
      } else {
        ok('Already up to date (or no newer npm/GitHub release found)');
      }
      exitCli(0);
    }

    if (!infoVer.updateAvailable && infoVer.channel !== 'git') {
      warn('No newer version detected; running update anyway…');
    }

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

    exitCli(0);
  } catch (e) {
    fail(e instanceof Error ? e.message : String(e));
    exitCli(1);
  }
}
