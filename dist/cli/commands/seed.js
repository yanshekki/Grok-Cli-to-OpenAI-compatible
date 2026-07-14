"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdSeed = cmdSeed;
const node_child_process_1 = require("node:child_process");
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const print_1 = require("../lib/print");
async function cmdSeed(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const env = (0, env_file_1.ensureEnvFile)(paths);
    (0, env_file_1.loadEnvIntoProcess)(paths.envFile);
    const runEnv = {
        ...process.env,
        DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
        ENCRYPTION_KEY: env.ENCRYPTION_KEY,
        PORT: env.PORT,
    };
    try {
        (0, node_child_process_1.execSync)('npx tsx prisma/seed.ts', {
            cwd: paths.packageRoot,
            stdio: 'inherit',
            env: runEnv,
        });
    }
    catch {
        (0, print_1.warn)('tsx seed failed, trying prisma db seed…');
        (0, node_child_process_1.execSync)('npx prisma db seed', {
            cwd: paths.packageRoot,
            stdio: 'inherit',
            env: runEnv,
        });
    }
    (0, print_1.ok)('Seed complete');
}
//# sourceMappingURL=seed.js.map