import fs from 'node:fs';
import { execSync } from 'node:child_process';
import {
  DEFAULT_PORT,
  resolveRuntimePaths,
} from '../lib/paths';
import { readEnvFile } from '../lib/env-file';
import { isProcessRunning, readPid } from '../lib/process-mgr';
import { fail, info, ok, warn } from '../lib/print';

export async function cmdDoctor(opts: {
  home?: string;
  forceHome?: boolean;
}): Promise<void> {
  let issues = 0;
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });

  info(`Node: ${process.version}`);
  if (Number(process.versions.node.split('.')[0]) < 20) {
    fail('Node >= 20 required');
    issues += 1;
  } else {
    ok('Node version OK');
  }

  info(`Package root: ${paths.packageRoot}`);
  info(`Home (${paths.mode}): ${paths.home}`);

  try {
    const v = execSync('grok --version', { encoding: 'utf8' }).trim();
    ok(`Grok CLI: ${v.split('\n')[0]}`);
  } catch {
    fail('Grok CLI not found on PATH (install + grok login)');
    issues += 1;
  }

  if (!fs.existsSync(paths.envFile)) {
    warn(`.env missing — run: gctoac setup`);
    issues += 1;
  } else {
    ok(`.env found: ${paths.envFile}`);
    const env = readEnvFile(paths.envFile);
    if (!env.ENCRYPTION_KEY) {
      fail('ENCRYPTION_KEY missing in .env');
      issues += 1;
    } else {
      ok('ENCRYPTION_KEY set');
    }
    const port = Number(env.PORT || DEFAULT_PORT);
    info(`Configured PORT: ${port}`);
  }

  const serverJs = `${paths.packageRoot}/dist/server.js`;
  if (fs.existsSync(serverJs)) {
    ok('dist/server.js built');
  } else {
    warn('dist/server.js missing — run npm run build');
    issues += 1;
  }

  const pid = readPid(paths.pidFile);
  if (pid && isProcessRunning(pid)) {
    ok(`Server process running (pid ${pid})`);
  } else {
    info('Server not running');
  }

  if (issues === 0) {
    ok('Doctor: all checks passed');
  } else {
    fail(`Doctor: ${issues} issue(s)`);
    process.exitCode = 1;
  }
}
