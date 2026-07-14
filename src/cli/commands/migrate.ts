import { execSync } from 'node:child_process';
import { resolveRuntimePaths } from '../lib/paths';
import { ensureEnvFile, loadEnvIntoProcess } from '../lib/env-file';
import { ok } from '../lib/print';

export async function cmdMigrate(opts: {
  home?: string;
  forceHome?: boolean;
}): Promise<void> {
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });
  const env = ensureEnvFile(paths);
  loadEnvIntoProcess(paths.envFile);
  // Use npx so prisma CLI need not be a runtime dependency (avoids broken global installs)
  execSync('npx --yes prisma@6.5.0 migrate deploy', {
    cwd: paths.packageRoot,
    stdio: 'inherit',
    env: {
      ...process.env,
      DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
    },
  });
  ok('Migrate complete');
}
