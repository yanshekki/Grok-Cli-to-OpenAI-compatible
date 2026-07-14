import path from 'node:path';
import fs from 'node:fs';
import { resolveRuntimePaths } from '../lib/paths';
import { readEnvFile } from '../lib/env-file';
import { fail, info, ok } from '../lib/print';

function resolveLogFiles(packageRoot: string, logsDir: string): string[] {
  // Align with Admin / pm2.service managed logs
  const cfgPath = path.join(packageRoot, 'pm2.runtime.json');
  let errorFile = 'logs/pm2-error.log';
  let outFile = 'logs/pm2-out.log';
  try {
    if (fs.existsSync(cfgPath)) {
      const j = JSON.parse(fs.readFileSync(cfgPath, 'utf8')) as {
        error_file?: string;
        out_file?: string;
      };
      if (j.error_file) errorFile = j.error_file;
      if (j.out_file) outFile = j.out_file;
    }
  } catch {
    /* ignore */
  }
  const abs = (f: string) =>
    path.isAbsolute(f) ? f : path.join(packageRoot, f);
  return [
    abs(errorFile),
    abs(outFile),
    path.join(logsDir, 'gctoac.err.log'),
    path.join(logsDir, 'gctoac.out.log'),
  ];
}

export async function cmdLogsClear(opts: {
  home?: string;
  forceHome?: boolean;
}): Promise<void> {
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });
  const files = resolveLogFiles(paths.packageRoot, paths.logsDir);
  let n = 0;
  for (const f of files) {
    try {
      fs.mkdirSync(path.dirname(f), { recursive: true });
      const prev = fs.existsSync(f) ? fs.statSync(f).size : 0;
      fs.writeFileSync(f, `[log cleared ${new Date().toISOString()} via gctoac logs clear]\n`);
      ok(`${path.basename(f)}  (was ${Math.round(prev / 1024)} KB)`);
      n += 1;
    } catch (e) {
      fail(
        `${path.basename(f)}: ${e instanceof Error ? e.message : String(e)}`,
      );
    }
  }
  if (n === 0) {
    fail('No log files cleared');
    process.exitCode = 1;
    return;
  }
  info(`Cleared ${n} file(s). Admin auto-trims files over 5MB on read.`);
}

export async function cmdLogsShow(opts: {
  home?: string;
  forceHome?: boolean;
  lines?: number;
}): Promise<void> {
  const paths = resolveRuntimePaths({
    home: opts.home,
    forceHome: opts.forceHome ?? Boolean(opts.home),
  });
  const env = readEnvFile(paths.envFile);
  void env;
  const n = Math.min(Math.max(opts.lines || 40, 5), 500);
  const files = resolveLogFiles(paths.packageRoot, paths.logsDir);
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const st = fs.statSync(f);
    info(`===== ${path.basename(f)} (${Math.round(st.size / 1024)} KB) =====`);
    const lines = fs.readFileSync(f, 'utf8').split('\n').slice(-n);
    console.log(lines.join('\n'));
    console.log('');
  }
}
