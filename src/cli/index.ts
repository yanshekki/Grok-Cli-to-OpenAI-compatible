#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { Command } from 'commander';
import { cmdSetup } from './commands/setup';
import { cmdStart } from './commands/start';
import { cmdStop } from './commands/stop';
import { cmdRestart } from './commands/restart';
import { cmdStatus } from './commands/status';
import { cmdMigrate } from './commands/migrate';
import { cmdSeed } from './commands/seed';
import { cmdDoctor } from './commands/doctor';
import { cmdOpen } from './commands/open';
import { cmdVersion } from './commands/version';
import { cmdUpdate } from './commands/update';
import {
  cmdKeyCreate,
  cmdKeyList,
  cmdKeyRevoke,
} from './commands/key';
import {
  cmdAdminOff,
  cmdAdminOn,
  cmdAdminStatus,
} from './commands/admin-panel';
import { cmdLogsClear, cmdLogsShow } from './commands/logs';
import { DEFAULT_PORT } from './lib/paths';

function readPkgVersion(): string {
  try {
    const pkgPath = path.join(__dirname, '../../package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as { version?: string };
    return pkg.version || '0.0.0';
  } catch {
    return '0.0.0';
  }
}

const program = new Command();

program
  .name('gctoac')
  .description(
    'Grok CLI → OpenAI-compatible gateway controller (alias: gcoa)',
  )
  .option('--home <path>', 'Data home directory (default: ~/.gctoac or project root)')
  .option('--port <n>', `HTTP port (default ${DEFAULT_PORT})`, (v) => Number(v))
  .version(readPkgVersion(), '-V, --version');

function globalOpts() {
  const g = program.opts() as { home?: string; port?: number };
  return {
    home: g.home,
    port: g.port,
    forceHome: Boolean(g.home),
  };
}

program
  .command('setup')
  .description('Create data dirs, .env, migrate DB, seed admin key')
  .action(async () => {
    await cmdSetup(globalOpts());
  });

program
  .command('start')
  .description(
    `Start gateway (default port ${DEFAULT_PORT}). Use --pm2 to run under PM2.`,
  )
  .option('-f, --foreground', 'Run in foreground')
  .option('--pm2', 'Start under PM2 (process manager)')
  .action(async (opts: { foreground?: boolean; pm2?: boolean }) => {
    await cmdStart({
      ...globalOpts(),
      foreground: opts.foreground,
      pm2: opts.pm2,
    });
  });

program
  .command('stop')
  .description('Stop background gateway')
  .action(async () => {
    await cmdStop(globalOpts());
  });

program
  .command('restart')
  .description('Restart gateway')
  .option('-f, --foreground', 'Run in foreground')
  .option('--pm2', 'Restart under PM2')
  .action(async (opts: { foreground?: boolean; pm2?: boolean }) => {
    await cmdRestart({
      ...globalOpts(),
      foreground: opts.foreground,
      pm2: opts.pm2,
    });
  });

program
  .command('status')
  .description('Show process + health status')
  .action(async () => {
    await cmdStatus(globalOpts());
  });

program
  .command('migrate')
  .description('Run prisma migrate deploy')
  .action(async () => {
    await cmdMigrate(globalOpts());
  });

program
  .command('seed')
  .description('Seed bootstrap admin API key (if missing)')
  .action(async () => {
    await cmdSeed(globalOpts());
  });

const keyCmd = program
  .command('key')
  .description('Manage API keys (create prints plaintext once)')
  .action(async () => {
    // Default: create a new admin key
    await cmdKeyCreate({ ...globalOpts(), role: 'admin' });
  });

keyCmd
  .command('create')
  .description('Create API key and print plaintext once (default: admin)')
  .option('-n, --name <name>', 'Key name')
  .option('-r, --role <role>', 'admin | user', 'admin')
  .option('-m, --mode <mode>', 'safe | agent (user keys; admin is always agent)', 'safe')
  .option('--rate-limit <n>', 'Per-key rate limit', (v) => Number(v))
  .action(
    async (opts: {
      name?: string;
      role?: string;
      mode?: string;
      rateLimit?: number;
    }) => {
      await cmdKeyCreate({
        ...globalOpts(),
        name: opts.name,
        role: opts.role,
        mode: opts.mode,
        rateLimit: opts.rateLimit,
      });
    },
  );

keyCmd
  .command('list')
  .description('List API keys (prefix only; plaintext not stored)')
  .action(async () => {
    await cmdKeyList(globalOpts());
  });

keyCmd
  .command('revoke')
  .description('Revoke (deactivate) an API key by id')
  .argument('<id>', 'API key id')
  .action(async (id: string) => {
    await cmdKeyRevoke({ ...globalOpts(), id });
  });

keyCmd
  .command('admin')
  .description('Create a new admin API key (same as: gctoac key create)')
  .option('-n, --name <name>', 'Key name')
  .action(async (opts: { name?: string }) => {
    await cmdKeyCreate({ ...globalOpts(), role: 'admin', name: opts.name });
  });

const adminCmd = program
  .command('admin')
  .description('Enable/disable Admin panel (CLI is the only way to turn it back on)')
  .action(async () => {
    await cmdAdminStatus(globalOpts());
  });

adminCmd
  .command('status')
  .description('Show Admin panel on/off status')
  .action(async () => {
    await cmdAdminStatus(globalOpts());
  });

adminCmd
  .command('on')
  .description('Enable Admin panel (settings DB)')
  .action(async () => {
    await cmdAdminOn(globalOpts());
  });

adminCmd
  .command('off')
  .description('Disable Admin panel (settings DB); re-enable with: gctoac admin on')
  .action(async () => {
    await cmdAdminOff(globalOpts());
  });

program
  .command('doctor')
  .description(
    'Check Node, Grok CLI, env (proxy/port), build, runner (gctoac/PM2), conflicts',
  )
  .action(async () => {
    await cmdDoctor(globalOpts());
  });

program
  .command('open')
  .description('Print API / Admin URLs')
  .option('--admin', 'Print admin URL only')
  .action(async (opts: { admin?: boolean }) => {
    await cmdOpen({ ...globalOpts(), admin: opts.admin });
  });

const logsCmd = program
  .command('logs')
  .description('Show or clear gateway log files (pm2 + gctoac)')
  .option('-n, --lines <n>', 'Tail lines (default 40)', (v) => Number(v))
  .action(async (opts: { lines?: number }) => {
    await cmdLogsShow({ ...globalOpts(), lines: opts.lines });
  });

logsCmd
  .command('clear')
  .description('Truncate pm2-error/out and gctoac log files')
  .action(async () => {
    await cmdLogsClear(globalOpts());
  });

logsCmd
  .command('show')
  .description('Print tail of log files')
  .option('-n, --lines <n>', 'Tail lines (default 40)', (v) => Number(v))
  .action(async (opts: { lines?: number }) => {
    await cmdLogsShow({ ...globalOpts(), lines: opts.lines });
  });

program
  .command('version')
  .description('Show package version')
  .action(() => {
    cmdVersion();
  });

program
  .command('update')
  .description('Self-update this package (npm / git / GitHub)')
  .option('--check', 'Only check for updates')
  .option('--no-restart', 'Do not restart gateway after update')
  .option(
    '--channel <name>',
    'Force channel: auto | git | npm-global | npm-local',
    'auto',
  )
  .action(
    async (opts: {
      check?: boolean;
      restart?: boolean;
      channel?: 'auto' | 'git' | 'npm-global' | 'npm-local';
    }) => {
      await cmdUpdate({
        ...globalOpts(),
        check: opts.check,
        restart: opts.restart,
        channel: opts.channel,
      });
    },
  );

program
  .parseAsync(process.argv)
  .catch((err: unknown) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  })
  .then(() => {
    // Commands that use undici/fetch must hard-exit themselves (e.g. update).
    // If still alive and no open handles intended, allow natural exit.
  });
