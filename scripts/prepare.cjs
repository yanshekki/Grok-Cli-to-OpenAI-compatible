/**
 * Runs on: local npm install, git/github install, npm pack/publish.
 * Avoids shell (spawn sh) — uses node + execFile only.
 */
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const cliJs = path.join(root, 'dist', 'cli', 'index.js');
const tscJs = path.join(root, 'node_modules', 'typescript', 'lib', 'tsc.js');

function log(msg) {
  console.log(`[gctoac prepare] ${msg}`);
}

function warn(msg) {
  console.warn(`[gctoac prepare] ${msg}`);
}

function runNode(scriptPath, args = []) {
  execFileSync(process.execPath, [scriptPath, ...args], {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
  });
}

// 1) Build TypeScript if CLI entry is missing
if (!fs.existsSync(cliJs)) {
  if (!fs.existsSync(tscJs)) {
    warn('typescript not found and dist/ missing — run: npm run build');
  } else {
    log('Building TypeScript (dist/ missing)…');
    try {
      runNode(tscJs, ['-p', 'tsconfig.json']);
      try {
        fs.chmodSync(cliJs, 0o755);
      } catch {
        /* ignore */
      }
      log('Build complete');
    } catch (e) {
      warn(`Build failed: ${e instanceof Error ? e.message : e}`);
    }
  }
} else {
  log('dist/ already present');
  try {
    fs.chmodSync(cliJs, 0o755);
  } catch {
    /* ignore */
  }
}

// 2) Prisma generate (no shell)
const prismaCli = path.join(root, 'node_modules', 'prisma', 'build', 'index.js');
if (fs.existsSync(prismaCli) && fs.existsSync(path.join(root, 'prisma', 'schema.prisma'))) {
  log('Running prisma generate…');
  try {
    runNode(prismaCli, ['generate']);
    log('Prisma client generated');
  } catch (e) {
    warn(`prisma generate skipped: ${e instanceof Error ? e.message : e}`);
  }
} else {
  warn('prisma CLI or schema not found — skip generate');
}
