import { execSync } from 'node:child_process';
import { resolveRuntimePaths } from '../lib/paths';
import { ensureEnvFile, loadEnvIntoProcess } from '../lib/env-file';
import { ok, warn } from '../lib/print';

export async function cmdSeed(opts: {
  home?: string;
  forceHome?: boolean;
}): Promise<void> {
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });
  const env = ensureEnvFile(paths);
  loadEnvIntoProcess(paths.envFile);
  const runEnv = {
    ...process.env,
    DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
    ENCRYPTION_KEY: env.ENCRYPTION_KEY,
    PORT: env.PORT,
  };
  try {
    execSync('npx tsx prisma/seed.ts', {
      cwd: paths.packageRoot,
      stdio: 'inherit',
      env: runEnv,
    });
  } catch {
    warn('tsx seed failed, trying prisma db seed…');
    execSync('npx prisma db seed', {
      cwd: paths.packageRoot,
      stdio: 'inherit',
      env: runEnv,
    });
  }
  ok('Seed complete');
}
