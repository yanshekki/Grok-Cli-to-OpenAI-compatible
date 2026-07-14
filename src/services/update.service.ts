import { execSync, spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { ExceptionFactory } from '../exceptions/exception.factory';

export const GITHUB_REPO = 'yanshekki/Grok-Cli-to-OpenAI-compatible';
export const NPM_PACKAGE = 'grok-cli-to-openai-compatible';

export type InstallChannel = 'git' | 'npm-global' | 'npm-local' | 'unknown';

export interface VersionInfo {
  current: string;
  latestNpm: string | null;
  latestGithub: string | null;
  latest: string | null;
  updateAvailable: boolean;
  channel: InstallChannel;
  packageRoot: string;
  installSource: string;
}

export interface UpdateResult {
  ok: boolean;
  channel: InstallChannel;
  fromVersion: string;
  toVersion: string | null;
  log: string[];
  restartRequired: boolean;
  message: string;
}

function getPackageRoot(): string {
  // dist/services -> dist -> package root
  return path.resolve(__dirname, '../..');
}

function readLocalPackage(): {
  name: string;
  version: string;
  _from?: string;
  _resolved?: string;
} {
  const pkgPath = path.join(getPackageRoot(), 'package.json');
  return JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as {
    name: string;
    version: string;
    _from?: string;
    _resolved?: string;
  };
}

function detectChannel(packageRoot: string): {
  channel: InstallChannel;
  installSource: string;
} {
  if (fs.existsSync(path.join(packageRoot, '.git'))) {
    return { channel: 'git', installSource: 'git working tree' };
  }

  // npm global typically under .../lib/node_modules/<name>
  const normalized = packageRoot.replace(/\\/g, '/');
  if (normalized.includes('/node_modules/')) {
    try {
      const globalRoot = execSync('npm root -g', { encoding: 'utf8' }).trim();
      if (packageRoot.startsWith(path.resolve(globalRoot))) {
        return {
          channel: 'npm-global',
          installSource: `npm global (${globalRoot})`,
        };
      }
    } catch {
      /* ignore */
    }
    return { channel: 'npm-local', installSource: 'npm local node_modules' };
  }

  // package.json may still live in a non-node_modules path after pack extract
  try {
    const pkg = readLocalPackage();
    if (pkg._resolved?.includes('github.com') || pkg._from?.includes('github:')) {
      return {
        channel: 'npm-global',
        installSource: pkg._from || pkg._resolved || 'github',
      };
    }
  } catch {
    /* ignore */
  }

  return { channel: 'unknown', installSource: packageRoot };
}

function compareSemver(a: string, b: string): number {
  const pa = a.replace(/^v/, '').split('.').map((x) => Number(x) || 0);
  const pb = b.replace(/^v/, '').split('.').map((x) => Number(x) || 0);
  for (let i = 0; i < 3; i += 1) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d !== 0) return d > 0 ? 1 : -1;
  }
  return 0;
}

async function fetchLatestNpm(): Promise<string | null> {
  try {
    const res = await fetch(`https://registry.npmjs.org/${NPM_PACKAGE}/latest`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const body = (await res.json()) as { version?: string };
    return body.version ?? null;
  } catch {
    return null;
  }
}

async function fetchLatestGithub(): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'gctoac-update',
        },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (res.ok) {
      const body = (await res.json()) as { tag_name?: string };
      if (body.tag_name) return body.tag_name.replace(/^v/, '');
    }
    // fallback: latest commit on main (not a version, skip)
    const tags = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/tags?per_page=1`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'gctoac-update',
        },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (tags.ok) {
      const arr = (await tags.json()) as Array<{ name?: string }>;
      if (arr[0]?.name) return arr[0].name.replace(/^v/, '');
    }
    return null;
  } catch {
    return null;
  }
}

function run(cmd: string, cwd: string, log: string[]): void {
  log.push(`$ ${cmd}`);
  const out = execSync(cmd, {
    cwd,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
    maxBuffer: 20 * 1024 * 1024,
  });
  if (out?.trim()) log.push(out.trim());
}

export class UpdateService {
  private updating = false;

  isUpdating(): boolean {
    return this.updating;
  }

  async getVersionInfo(): Promise<VersionInfo> {
    const packageRoot = getPackageRoot();
    const pkg = readLocalPackage();
    const { channel, installSource } = detectChannel(packageRoot);
    const [latestNpm, latestGithub] = await Promise.all([
      fetchLatestNpm(),
      fetchLatestGithub(),
    ]);

    // Prefer npm latest when available; else GitHub tag
    const latest = latestNpm || latestGithub;
    const updateAvailable = latest
      ? compareSemver(latest, pkg.version) > 0
      : channel === 'git'; // git always can pull

    return {
      current: pkg.version,
      latestNpm,
      latestGithub,
      latest,
      updateAvailable: channel === 'git' ? true : updateAvailable,
      channel,
      packageRoot,
      installSource,
    };
  }

  async performUpdate(options?: {
    channel?: InstallChannel | 'auto';
    skipMigrate?: boolean;
  }): Promise<UpdateResult> {
    if (this.updating) {
      throw ExceptionFactory.validation('Update already in progress');
    }
    this.updating = true;
    const log: string[] = [];
    const packageRoot = getPackageRoot();
    const fromVersion = readLocalPackage().version;
    const detected = detectChannel(packageRoot);
    const channel =
      options?.channel && options.channel !== 'auto'
        ? options.channel
        : detected.channel;

    try {
      log.push(`channel=${channel} root=${packageRoot}`);

      if (channel === 'git') {
        run('git fetch --all --tags', packageRoot, log);
        run('git pull --ff-only', packageRoot, log);
        run('npm install', packageRoot, log);
        run('npm run build', packageRoot, log);
      } else if (channel === 'npm-global') {
        // Prefer GitHub install so users always get latest main if not on npm yet
        try {
          run(
            `npm install -g ${NPM_PACKAGE}@latest`,
            packageRoot,
            log,
          );
        } catch (e) {
          log.push(
            `npm registry install failed: ${e instanceof Error ? e.message : e}`,
          );
          log.push('Falling back to GitHub install…');
          run(
            `npm install -g github:${GITHUB_REPO}`,
            packageRoot,
            log,
          );
        }
      } else if (channel === 'npm-local') {
        run(
          `npm install ${NPM_PACKAGE}@latest`,
          path.resolve(packageRoot, '../..'),
          log,
        );
      } else {
        // unknown: try git if .git appears, else github global style update of self via npm pack not possible
        if (fs.existsSync(path.join(packageRoot, '.git'))) {
          run('git pull --ff-only', packageRoot, log);
          run('npm install', packageRoot, log);
          run('npm run build', packageRoot, log);
        } else {
          run(`npm install -g github:${GITHUB_REPO}`, packageRoot, log);
        }
      }

      // Always regenerate prisma client + migrate when possible
      try {
        run('npx --yes prisma@6.5.0 generate', packageRoot, log);
      } catch (e) {
        log.push(`prisma generate warn: ${e instanceof Error ? e.message : e}`);
      }

      if (!options?.skipMigrate) {
        try {
          run('npx --yes prisma@6.5.0 migrate deploy', packageRoot, log);
        } catch (e) {
          log.push(`migrate warn: ${e instanceof Error ? e.message : e}`);
        }
      }

      let toVersion: string | null = null;
      try {
        // re-read package from disk after update (global path may change)
        toVersion = readLocalPackage().version;
      } catch {
        toVersion = null;
      }

      return {
        ok: true,
        channel,
        fromVersion,
        toVersion,
        log,
        restartRequired: true,
        message:
          'Update finished. Restart the gateway (gctoac restart) to load the new code.',
      };
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      log.push(msg);
      throw ExceptionFactory.internal(`Update failed: ${msg}`, { log });
    } finally {
      this.updating = false;
    }
  }

  /**
   * Run update then restart detached process (used by admin one-click).
   * Spawns a short-lived shell so the HTTP response can return first.
   */
  scheduleUpdateAndRestart(options?: {
    home?: string;
    port?: number;
  }): { scheduled: true; message: string } {
    if (this.updating) {
      throw ExceptionFactory.validation('Update already in progress');
    }

    const packageRoot = getPackageRoot();
    const cli = path.join(packageRoot, 'dist', 'cli', 'index.js');
    const home = options?.home || process.env.GCTOAC_HOME || '';
    const port = options?.port || Number(process.env.PORT || 3847);

    const homeFlag = home ? ` --home ${JSON.stringify(home)}` : '';
    const portFlag = port ? ` --port ${port}` : '';

    // Delay so HTTP can flush; then update + restart via CLI
    const script = [
      'sleep 2',
      `node ${JSON.stringify(cli)} update${homeFlag} || true`,
      `node ${JSON.stringify(cli)} restart${homeFlag}${portFlag} || true`,
    ].join(' && ');

    const child = spawn('bash', ['-lc', script], {
      detached: true,
      stdio: 'ignore',
      env: process.env,
      cwd: packageRoot,
    });
    child.unref();

    return {
      scheduled: true,
      message:
        'Update scheduled. The server will update and restart in a few seconds. Refresh Admin after ~30s.',
    };
  }
}

export const updateService = new UpdateService();
