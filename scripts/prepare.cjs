/**
 * Runs on github/git/npm install.
 * - Ensures dist/ exists (committed; rebuild if missing + typescript present)
 * - Generates Prisma client for THIS platform via temporary `npx prisma`
 *   (prisma is NOT a runtime dependency — avoids broken prisma package postinstalls)
 * Uses execFile only (no `sh` spawn).
 */
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const cliJs = path.join(root, 'dist', 'cli', 'index.js');

function log(msg) {
  console.log(`[gctoac] ${msg}`);
}
function warn(msg) {
  console.warn(`[gctoac] ${msg}`);
}

function which(cmd) {
  const paths = (process.env.PATH || '').split(path.delimiter);
  const exts =
    process.platform === 'win32' ? ['.cmd', '.exe', '.bat', ''] : [''];
  for (const dir of paths) {
    for (const ext of exts) {
      const p = path.join(dir, cmd + ext);
      if (fs.existsSync(p)) return p;
    }
  }
  return null;
}

function run(bin, args) {
  execFileSync(bin, args, {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
  });
}

// 1) chmod committed CLI / rebuild if missing
if (fs.existsSync(cliJs)) {
  try {
    fs.chmodSync(cliJs, 0o755);
  } catch {
    /* ignore */
  }
  log('dist/ OK');
} else {
  const tsc = path.join(root, 'node_modules', 'typescript', 'lib', 'tsc.js');
  if (fs.existsSync(tsc)) {
    log('Building TypeScript…');
    try {
      run(process.execPath, [tsc, '-p', 'tsconfig.json']);
      try {
        fs.chmodSync(cliJs, 0o755);
      } catch {
        /* ignore */
      }
    } catch (e) {
      warn(`build failed: ${e instanceof Error ? e.message : e}`);
    }
  } else {
    warn('dist/ missing — install from a release that includes dist/, or run npm run build');
  }
}

// 2) Prisma client for current platform
const schema = path.join(root, 'prisma', 'schema.prisma');
if (fs.existsSync(schema)) {
  log('Generating Prisma client for this platform…');
  try {
    const npmBin = which('npm');
    if (npmBin) {
      // npm exec downloads prisma@6.5.0 temporarily — no permanent dep
      run(npmBin, [
        'exec',
        '--yes',
        '--package=prisma@6.5.0',
        '--',
        'prisma',
        'generate',
      ]);
      log('Prisma client ready');
    } else {
      warn('npm not found on PATH — skip prisma generate');
    }
  } catch (e) {
    warn(`prisma generate failed: ${e instanceof Error ? e.message : e}`);
    warn('You can retry: npx prisma@6.5.0 generate');
  }
}
