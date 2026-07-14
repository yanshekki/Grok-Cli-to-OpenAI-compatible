/**
 * Lifecycle: local install, github/git install, pack.
 * No shell spawn — only node + execFile (avoids "spawn sh ENOENT").
 * Prefers committed dist/ + generated/prisma so install still works offline of generate.
 */
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const cliJs = path.join(root, 'dist', 'cli', 'index.js');
const generatedClient = path.join(root, 'generated', 'prisma', 'index.js');
const tscJs = path.join(root, 'node_modules', 'typescript', 'lib', 'tsc.js');
const prismaCli = path.join(root, 'node_modules', 'prisma', 'build', 'index.js');

function log(msg) {
  console.log(`[gctoac] ${msg}`);
}
function warn(msg) {
  console.warn(`[gctoac] ${msg}`);
}

function runNode(scriptPath, args = []) {
  execFileSync(process.execPath, [scriptPath, ...args], {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
  });
}

// 1) Build if missing (typescript is a dependency for this)
if (!fs.existsSync(cliJs)) {
  if (fs.existsSync(tscJs)) {
    log('Building TypeScript…');
    try {
      runNode(tscJs, ['-p', 'tsconfig.json']);
      try {
        fs.chmodSync(cliJs, 0o755);
      } catch {
        /* ignore */
      }
    } catch (e) {
      warn(`build failed: ${e instanceof Error ? e.message : e}`);
    }
  } else {
    warn('dist/ missing and typescript not installed — CLI may not work');
  }
} else {
  try {
    fs.chmodSync(cliJs, 0o755);
  } catch {
    /* ignore */
  }
}

// 2) Prisma generate only if client not committed / missing
if (!fs.existsSync(generatedClient)) {
  if (fs.existsSync(prismaCli)) {
    log('Generating Prisma client…');
    try {
      runNode(prismaCli, ['generate']);
    } catch (e) {
      warn(`prisma generate failed: ${e instanceof Error ? e.message : e}`);
    }
  } else {
    warn('generated/prisma missing and prisma CLI not installed');
  }
} else {
  log('Using committed Prisma client (generated/prisma)');
}
