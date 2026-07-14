"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdStop = cmdStop;
const paths_1 = require("../lib/paths");
const process_mgr_1 = require("../lib/process-mgr");
const print_1 = require("../lib/print");
async function cmdStop(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const stopped = await (0, process_mgr_1.stopProcess)(paths.pidFile);
    if (stopped) {
        (0, print_1.ok)('Stopped');
    }
    else {
        (0, print_1.fail)('Not running (no pid / process already dead)');
        process.exitCode = 1;
    }
}
//# sourceMappingURL=stop.js.map