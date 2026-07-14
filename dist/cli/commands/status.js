"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdStatus = cmdStatus;
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const process_mgr_1 = require("../lib/process-mgr");
const print_1 = require("../lib/print");
async function cmdStatus(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const env = (0, env_file_1.readEnvFile)(paths.envFile);
    const port = Number(env.PORT || paths_1.DEFAULT_PORT);
    const pid = (0, process_mgr_1.readPid)(paths.pidFile);
    const running = pid ? (0, process_mgr_1.isProcessRunning)(pid) : false;
    const urls = (0, print_1.baseUrls)(port);
    (0, print_1.info)(`Home:    ${paths.home} (${paths.mode})`);
    (0, print_1.info)(`PID:     ${pid ?? '-'} ${running ? '(running)' : '(not running)'}`);
    (0, print_1.info)(`Port:    ${port}`);
    (0, print_1.info)(`API:     ${urls.api}`);
    (0, print_1.info)(`Admin:   ${urls.admin}`);
    try {
        const res = await fetch(urls.health, { signal: AbortSignal.timeout(3000) });
        if (res.ok) {
            const body = (await res.json());
            (0, print_1.ok)(`Health:  ${body.status ?? res.status}`);
        }
        else {
            (0, print_1.fail)(`Health:  HTTP ${res.status}`);
            process.exitCode = 1;
        }
    }
    catch {
        (0, print_1.fail)('Health:  unreachable');
        process.exitCode = running ? 1 : 0;
    }
    if (!running) {
        process.exitCode = process.exitCode || 1;
    }
}
//# sourceMappingURL=status.js.map