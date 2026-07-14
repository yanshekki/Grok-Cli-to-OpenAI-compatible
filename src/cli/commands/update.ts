import { updateService } from '../../services/update.service';
import { fail, info, ok, warn } from '../lib/print';
import { ensureHomeDirs, resolveRuntimePaths } from '../lib/paths';
import { ensureEnvFile, loadEnvIntoProcess } from '../lib/env-file';
import { runPrisma } from '../lib/run-prisma';
import { cmdRestart } from './restart';

/**
 * Always hard-exit. undici fetch keep-alive + any leftover handles can leave
 * the CLI stuck until Ctrl+C even after printing "done".
 */
function exitCli(code = 0): never {
  try {
    process.stdout.write('');
    process.stderr.write('');
  } catch {
    /* ignore */
  }
  // eslint-disable-next-line no-process-exit
  process.exit(code);
}

function applyMigrations(packageRoot: string, databaseUrl: string): void {
  info('Applying database migrations…');
  const env = {
    ...process.env,
    DATABASE_URL: databaseUrl,
  };
  try {
    runPrisma(['generate'], { cwd: packageRoot, packageRoot, env });
  } catch (e) {
    warn(
      `prisma generate: ${e instanceof Error ? e.message : String(e)}`,
    );
  }
  runPrisma(['migrate', 'deploy'], {
    cwd: packageRoot,
    packageRoot,
    env,
  });
  ok('Database migrations applied');
}

export async function cmdUpdate(opts: {
  home?: string;
  port?: number;
  forceHome?: boolean;
  check?: boolean;
  restart?: boolean;
  channel?: 'auto' | 'git' | 'npm-global' | 'npm-local';
}): Promise<void> {
  let code = 0;
  try {
    const paths = resolveRuntimePaths({
      home: opts.home,
      forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    ensureHomeDirs(paths);
    const envFile = ensureEnvFile(paths);
    loadEnvIntoProcess(paths.envFile);
    const databaseUrl = envFile.DATABASE_URL || paths.databaseUrl;

    const infoVer = await updateService.getVersionInfo();
    info(`Current:  ${infoVer.current}`);
    info(`Channel:  ${infoVer.channel} (${infoVer.installSource})`);
    info(`npm:      ${infoVer.latestNpm ?? 'n/a'}`);
    info(`GitHub:   ${infoVer.latestGithub ?? 'n/a'}`);
    info(`Latest:   ${infoVer.latest ?? 'n/a'}`);
    info(`Update?:  ${infoVer.updateAvailable ? 'yes' : 'no / unknown'}`);
    info(`Data DB:  ${databaseUrl}`);

    if (opts.check) {
      if (infoVer.updateAvailable) {
        info('⚠ Update available — run: gctoac update');
      } else {
        ok('Already up to date (or no newer npm/GitHub release found)');
      }
      exitCli(0);
    }

    if (!infoVer.updateAvailable && infoVer.channel !== 'git') {
      warn('No newer version detected; running update anyway…');
    }

    // Package update (includes migrate inside service); CLI re-runs migrate with home DB
    const result = await updateService.performUpdate({
      channel: opts.channel || 'auto',
      databaseUrl,
      skipMigrate: false,
    });
    for (const line of result.log) {
      info(line);
    }
    ok(result.message);
    info(`Version: ${result.fromVersion} → ${result.toVersion ?? '?'}`);

    // Second pass: ensure user data home DB is migrated (authoritative)
    try {
      applyMigrations(paths.packageRoot, databaseUrl);
    } catch (e) {
      warn(
        `Auto-migrate failed: ${e instanceof Error ? e.message : String(e)}`,
      );
      warn('Retry: gctoac migrate');
      code = 1;
    }

    if (opts.restart !== false && result.restartRequired) {
      info('Restarting gateway…');
      try {
        await cmdRestart({
          home: paths.home,
          forceHome: true,
          port: opts.port,
        });
      } catch (e) {
        warn(
          `Restart failed: ${e instanceof Error ? e.message : String(e)}`,
        );
        warn('Run: gctoac restart');
        code = code || 1;
      }
    } else if (result.restartRequired) {
      warn('Restart required: gctoac restart');
    }

    info('Done.');
  } catch (e) {
    fail(e instanceof Error ? e.message : String(e));
    code = 1;
  } finally {
    // Always leave the shell — never require Ctrl+C
    exitCli(code);
  }
}
