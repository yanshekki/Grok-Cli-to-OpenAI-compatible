"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPid = readPid;
exports.isProcessRunning = isProcessRunning;
exports.writePid = writePid;
exports.clearPid = clearPid;
exports.startDetached = startDetached;
exports.stopProcess = stopProcess;
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const node_child_process_1 = require("node:child_process");
function readPid(pidFile) {
    try {
        if (!node_fs_1.default.existsSync(pidFile))
            return null;
        const n = Number(node_fs_1.default.readFileSync(pidFile, 'utf8').trim());
        return Number.isFinite(n) && n > 0 ? n : null;
    }
    catch {
        return null;
    }
}
function isProcessRunning(pid) {
    try {
        process.kill(pid, 0);
        return true;
    }
    catch {
        return false;
    }
}
function writePid(pidFile, pid) {
    node_fs_1.default.mkdirSync(node_path_1.default.dirname(pidFile), { recursive: true });
    node_fs_1.default.writeFileSync(pidFile, String(pid), 'utf8');
}
function clearPid(pidFile) {
    try {
        node_fs_1.default.unlinkSync(pidFile);
    }
    catch {
        /* ignore */
    }
}
function startDetached(paths, env) {
    const serverJs = node_path_1.default.join(paths.packageRoot, 'dist', 'server.js');
    if (!node_fs_1.default.existsSync(serverJs)) {
        throw new Error(`Server not built: ${serverJs}. Run npm run build first.`);
    }
    const outLog = node_path_1.default.join(paths.logsDir, 'gctoac.out.log');
    const errLog = node_path_1.default.join(paths.logsDir, 'gctoac.err.log');
    const outFd = node_fs_1.default.openSync(outLog, 'a');
    const errFd = node_fs_1.default.openSync(errLog, 'a');
    const child = (0, node_child_process_1.spawn)(process.execPath, [serverJs], {
        detached: true,
        stdio: ['ignore', outFd, errFd],
        env: {
            ...process.env,
            ...env,
            GCTOAC_HOME: paths.home,
        },
        cwd: paths.packageRoot,
    });
    child.unref();
    if (!child.pid) {
        throw new Error('Failed to spawn server process');
    }
    writePid(paths.pidFile, child.pid);
    return child.pid;
}
async function stopProcess(pidFile, timeoutMs = 10_000) {
    const pid = readPid(pidFile);
    if (!pid)
        return false;
    if (!isProcessRunning(pid)) {
        clearPid(pidFile);
        return false;
    }
    try {
        process.kill(pid, 'SIGTERM');
    }
    catch {
        clearPid(pidFile);
        return false;
    }
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
        if (!isProcessRunning(pid)) {
            clearPid(pidFile);
            return true;
        }
        await new Promise((r) => setTimeout(r, 200));
    }
    try {
        process.kill(pid, 'SIGKILL');
    }
    catch {
        /* ignore */
    }
    clearPid(pidFile);
    return true;
}
//# sourceMappingURL=process-mgr.js.map