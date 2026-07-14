"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdSeed = cmdSeed;
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const seed_admin_1 = require("../lib/seed-admin");
const print_1 = require("../lib/print");
async function cmdSeed(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const env = (0, env_file_1.ensureEnvFile)(paths);
    (0, env_file_1.loadEnvIntoProcess)(paths.envFile);
    await (0, seed_admin_1.seedAdmin)({
        databaseUrl: env.DATABASE_URL || paths.databaseUrl,
        bootstrapKey: env.ADMIN_BOOTSTRAP_KEY,
        port: env.PORT,
    });
    (0, print_1.ok)('Seed complete');
}
//# sourceMappingURL=seed.js.map