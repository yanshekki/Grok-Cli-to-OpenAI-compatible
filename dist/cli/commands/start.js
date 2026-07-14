"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdStart = cmdStart;
const node_path_1 = __importDefault(require("node:path"));
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const process_mgr_1 = require("../lib/process-mgr");
const print_1 = require("../lib/print");
async function cmdStart(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    (0, paths_1.ensureHomeDirs)(paths);
    const existing = (0, process_mgr_1.readPid)(paths.pidFile);
    if (existing && (0, process_mgr_1.isProcessRunning)(existing)) {
        (0, print_1.fail)(`Already running (pid ${existing}). Use: gctoac stop`);
        process.exitCode = 1;
        return;
    }
    const envFile = (0, env_file_1.ensureEnvFile)(paths, opts.port ?? paths_1.DEFAULT_PORT);
    if (opts.port) {
        envFile.PORT = String(opts.port);
    }
    (0, env_file_1.loadEnvIntoProcess)(paths.envFile);
    const port = Number(opts.port || envFile.PORT || paths_1.DEFAULT_PORT);
    const env = {
        ...process.env,
        ...envFile,
        PORT: String(port),
        DATABASE_URL: envFile.DATABASE_URL || paths.databaseUrl,
        STORAGE_DIR: envFile.STORAGE_DIR || paths.storageDir,
        GCTOAC_HOME: paths.home,
    };
    if (opts.foreground) {
        (0, print_1.info)(`Starting foreground on port ${port}…`);
        // Apply env then require server (side-effect bootstrap)
        for (const [k, v] of Object.entries(env)) {
            if (v !== undefined)
                process.env[k] = v;
        }
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require(node_path_1.default.join(paths.packageRoot, 'dist', 'server.js'));
        return;
    }
    const pid = (0, process_mgr_1.startDetached)(paths, env);
    (0, print_1.ok)(`Started pid ${pid}`);
    const urls = (0, print_1.baseUrls)(port);
    (0, print_1.info)(`  API:   ${urls.api}`);
    (0, print_1.info)(`  Admin: ${urls.admin}`);
    (0, print_1.info)(`  Logs:  ${node_path_1.default.join(paths.logsDir, 'gctoac.out.log')}`);
    (0, print_1.warn)('First run? Ensure ENCRYPTION_KEY is set and gctoac setup was completed.');
}
//# sourceMappingURL=start.js.map