"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdOpen = cmdOpen;
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const print_1 = require("../lib/print");
async function cmdOpen(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const env = (0, env_file_1.readEnvFile)(paths.envFile);
    const port = Number(env.PORT || paths_1.DEFAULT_PORT);
    const urls = (0, print_1.baseUrls)(port);
    if (opts.admin) {
        (0, print_1.info)(urls.admin);
    }
    else {
        (0, print_1.info)(`API:   ${urls.api}`);
        (0, print_1.info)(`Admin: ${urls.admin}`);
        (0, print_1.info)(`Health:${urls.health}`);
    }
}
//# sourceMappingURL=open.js.map