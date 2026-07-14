"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdSetup = cmdSetup;
const node_path_1 = __importDefault(require("node:path"));
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const run_prisma_1 = require("../lib/run-prisma");
const seed_admin_1 = require("../lib/seed-admin");
const print_1 = require("../lib/print");
async function cmdSetup(opts) {
    const port = opts.port ?? paths_1.DEFAULT_PORT;
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    (0, print_1.info)(`Mode: ${paths.mode}`);
    (0, print_1.info)(`Home: ${paths.home}`);
    (0, paths_1.ensureHomeDirs)(paths);
    const env = (0, env_file_1.ensureEnvFile)(paths, port);
    const databaseUrl = env.DATABASE_URL || paths.databaseUrl;
    const runEnv = {
        ...process.env,
        DATABASE_URL: databaseUrl,
        ENCRYPTION_KEY: env.ENCRYPTION_KEY,
        PORT: env.PORT || String(port),
    };
    (0, print_1.info)('Running prisma migrate deploy…');
    (0, run_prisma_1.runPrisma)(['migrate', 'deploy'], {
        cwd: paths.packageRoot,
        packageRoot: paths.packageRoot,
        env: runEnv,
    });
    (0, print_1.info)('Running seed…');
    try {
        await (0, seed_admin_1.seedAdmin)({
            databaseUrl,
            bootstrapKey: env.ADMIN_BOOTSTRAP_KEY,
            port: env.PORT || port,
        });
    }
    catch (err) {
        (0, print_1.warn)(`Seed failed: ${err instanceof Error ? err.message : String(err)}`);
        (0, print_1.warn)('Retry with: gctoac seed');
    }
    const urls = (0, print_1.baseUrls)(Number(env.PORT || port));
    (0, print_1.ok)('Setup complete');
    (0, print_1.info)('');
    (0, print_1.info)(`  API:   ${urls.api}`);
    (0, print_1.info)(`  Admin: ${urls.admin}`);
    (0, print_1.info)(`  Env:   ${paths.envFile}`);
    (0, print_1.info)(`  DB:    ${node_path_1.default.join(paths.dataDir, 'gateway.db')}`);
    (0, print_1.info)('');
    (0, print_1.info)('Next: gctoac start');
}
//# sourceMappingURL=setup.js.map