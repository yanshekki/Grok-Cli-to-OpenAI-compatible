import { execSync } from 'node:child_process';
import path from 'node:path';
import {
  ensureHomeDirs,
  resolveRuntimePaths,
  DEFAULT_PORT,
} from '../lib/paths';
import { ensureEnvFile } from '../lib/env-file';
import { baseUrls, info, ok, warn } from '../lib/print';

export async function cmdSetup(opts: {
  home?: string;
  port?: number;
  forceHome?: boolean;
}): Promise<void> {
  const port = opts.port ?? DEFAULT_PORT;
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });

  info(`Mode: ${paths.mode}`);
  info(`Home: ${paths.home}`);
  ensureHomeDirs(paths);
  const env = ensureEnvFile(paths, port);

  info('Running prisma migrate deploy…');
  execSync('npx --yes prisma@6.5.0 migrate deploy', {
    cwd: paths.packageRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
      ENCRYPTION_KEY: env.ENCRYPTION_KEY,
    },
  });

  info('Running seed…');
  try {
    execSync('npx tsx prisma/seed.ts', {
      cwd: paths.packageRoot,
      stdio: 'inherit',
      env: {
        ...process.env,
        DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
        ENCRYPTION_KEY: env.ENCRYPTION_KEY,
        PORT: env.PORT || String(port),
      },
    });
  } catch {
    // seed with node if tsx missing in production install
    try {
      execSync('node --import tsx prisma/seed.ts', {
        cwd: paths.packageRoot,
        stdio: 'inherit',
        env: {
          ...process.env,
          DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
          ENCRYPTION_KEY: env.ENCRYPTION_KEY,
          PORT: env.PORT || String(port),
        },
      });
    } catch {
      warn('Seed failed — run: gctoac seed');
    }
  }

  const urls = baseUrls(Number(env.PORT || port));
  ok('Setup complete');
  info('');
  info(`  API:   ${urls.api}`);
  info(`  Admin: ${urls.admin}`);
  info(`  Env:   ${paths.envFile}`);
  info(`  DB:    ${path.join(paths.dataDir, 'gateway.db')}`);
  info('');
  info('Next: gctoac start');
}
