"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdDoctor = cmdDoctor;
const node_fs_1 = __importDefault(require("node:fs"));
const node_child_process_1 = require("node:child_process");
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const process_mgr_1 = require("../lib/process-mgr");
const print_1 = require("../lib/print");
async function cmdDoctor(opts) {
    let issues = 0;
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    (0, print_1.info)(`Node: ${process.version}`);
    if (Number(process.versions.node.split('.')[0]) < 20) {
        (0, print_1.fail)('Node >= 20 required');
        issues += 1;
    }
    else {
        (0, print_1.ok)('Node version OK');
    }
    (0, print_1.info)(`Package root: ${paths.packageRoot}`);
    (0, print_1.info)(`Home (${paths.mode}): ${paths.home}`);
    try {
        const v = (0, node_child_process_1.execSync)('grok --version', { encoding: 'utf8' }).trim();
        (0, print_1.ok)(`Grok CLI: ${v.split('\n')[0]}`);
    }
    catch {
        (0, print_1.fail)('Grok CLI not found on PATH (install + grok login)');
        issues += 1;
    }
    if (!node_fs_1.default.existsSync(paths.envFile)) {
        (0, print_1.warn)(`.env missing — run: gctoac setup`);
        issues += 1;
    }
    else {
        (0, print_1.ok)(`.env found: ${paths.envFile}`);
        const env = (0, env_file_1.readEnvFile)(paths.envFile);
        if (!env.ENCRYPTION_KEY) {
            (0, print_1.fail)('ENCRYPTION_KEY missing in .env');
            issues += 1;
        }
        else {
            (0, print_1.ok)('ENCRYPTION_KEY set');
        }
        const port = Number(env.PORT || paths_1.DEFAULT_PORT);
        (0, print_1.info)(`Configured PORT: ${port}`);
    }
    const serverJs = `${paths.packageRoot}/dist/server.js`;
    if (node_fs_1.default.existsSync(serverJs)) {
        (0, print_1.ok)('dist/server.js built');
    }
    else {
        (0, print_1.warn)('dist/server.js missing — run npm run build');
        issues += 1;
    }
    const pid = (0, process_mgr_1.readPid)(paths.pidFile);
    if (pid && (0, process_mgr_1.isProcessRunning)(pid)) {
        (0, print_1.ok)(`Server process running (pid ${pid})`);
    }
    else {
        (0, print_1.info)('Server not running');
    }
    if (issues === 0) {
        (0, print_1.ok)('Doctor: all checks passed');
    }
    else {
        (0, print_1.fail)(`Doctor: ${issues} issue(s)`);
        process.exitCode = 1;
    }
}
//# sourceMappingURL=doctor.js.map