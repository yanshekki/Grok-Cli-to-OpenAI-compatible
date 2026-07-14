#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const commander_1 = require("commander");
const setup_1 = require("./commands/setup");
const start_1 = require("./commands/start");
const stop_1 = require("./commands/stop");
const restart_1 = require("./commands/restart");
const status_1 = require("./commands/status");
const migrate_1 = require("./commands/migrate");
const seed_1 = require("./commands/seed");
const doctor_1 = require("./commands/doctor");
const open_1 = require("./commands/open");
const version_1 = require("./commands/version");
const update_1 = require("./commands/update");
const paths_1 = require("./lib/paths");
function readPkgVersion() {
    try {
        const pkgPath = node_path_1.default.join(__dirname, '../../package.json');
        const pkg = JSON.parse(node_fs_1.default.readFileSync(pkgPath, 'utf8'));
        return pkg.version || '0.0.0';
    }
    catch {
        return '0.0.0';
    }
}
const program = new commander_1.Command();
program
    .name('gctoac')
    .description('Grok CLI → OpenAI-compatible gateway controller (alias: gcoa)')
    .option('--home <path>', 'Data home directory (default: ~/.gctoac or project root)')
    .option('--port <n>', `HTTP port (default ${paths_1.DEFAULT_PORT})`, (v) => Number(v))
    .version(readPkgVersion(), '-V, --version');
function globalOpts() {
    const g = program.opts();
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
    await (0, setup_1.cmdSetup)(globalOpts());
});
program
    .command('start')
    .description(`Start gateway (default port ${paths_1.DEFAULT_PORT})`)
    .option('-f, --foreground', 'Run in foreground')
    .action(async (opts) => {
    await (0, start_1.cmdStart)({ ...globalOpts(), foreground: opts.foreground });
});
program
    .command('stop')
    .description('Stop background gateway')
    .action(async () => {
    await (0, stop_1.cmdStop)(globalOpts());
});
program
    .command('restart')
    .description('Restart gateway')
    .option('-f, --foreground', 'Run in foreground')
    .action(async (opts) => {
    await (0, restart_1.cmdRestart)({ ...globalOpts(), foreground: opts.foreground });
});
program
    .command('status')
    .description('Show process + health status')
    .action(async () => {
    await (0, status_1.cmdStatus)(globalOpts());
});
program
    .command('migrate')
    .description('Run prisma migrate deploy')
    .action(async () => {
    await (0, migrate_1.cmdMigrate)(globalOpts());
});
program
    .command('seed')
    .description('Seed bootstrap admin API key')
    .action(async () => {
    await (0, seed_1.cmdSeed)(globalOpts());
});
program
    .command('doctor')
    .description('Check Node, Grok CLI, env, build, process')
    .action(async () => {
    await (0, doctor_1.cmdDoctor)(globalOpts());
});
program
    .command('open')
    .description('Print API / Admin URLs')
    .option('--admin', 'Print admin URL only')
    .action(async (opts) => {
    await (0, open_1.cmdOpen)({ ...globalOpts(), admin: opts.admin });
});
program
    .command('version')
    .description('Show package version')
    .action(() => {
    (0, version_1.cmdVersion)();
});
program
    .command('update')
    .description('Self-update this package (npm / git / GitHub)')
    .option('--check', 'Only check for updates')
    .option('--no-restart', 'Do not restart gateway after update')
    .option('--channel <name>', 'Force channel: auto | git | npm-global | npm-local', 'auto')
    .action(async (opts) => {
    await (0, update_1.cmdUpdate)({
        ...globalOpts(),
        check: opts.check,
        restart: opts.restart,
        channel: opts.channel,
    });
});
program.parseAsync(process.argv).catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map