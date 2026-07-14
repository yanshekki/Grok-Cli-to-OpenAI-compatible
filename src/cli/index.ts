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
  .description(`Start gateway (default port ${DEFAULT_PORT})`)
  .option('-f, --foreground', 'Run in foreground')
  .action(async (opts: { foreground?: boolean }) => {
    await cmdStart({ ...globalOpts(), foreground: opts.foreground });
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
  .action(async (opts: { foreground?: boolean }) => {
    await cmdRestart({ ...globalOpts(), foreground: opts.foreground });
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

program
  .command('doctor')
  .description('Check Node, Grok CLI, env, build, process')
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

program.parseAsync(process.argv).catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
