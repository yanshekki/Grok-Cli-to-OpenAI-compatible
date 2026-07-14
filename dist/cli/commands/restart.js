"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdRestart = cmdRestart;
const start_1 = require("./start");
const stop_1 = require("./stop");
async function cmdRestart(opts) {
    process.exitCode = 0;
    await (0, stop_1.cmdStop)(opts).catch(() => undefined);
    await new Promise((r) => setTimeout(r, 400));
    await (0, start_1.cmdStart)(opts);
}
//# sourceMappingURL=restart.js.map