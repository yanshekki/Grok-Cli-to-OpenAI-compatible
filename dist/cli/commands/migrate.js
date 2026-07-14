"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdMigrate = cmdMigrate;
const node_child_process_1 = require("node:child_process");
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
const print_1 = require("../lib/print");
async function cmdMigrate(opts) {
    const paths = (0, paths_1.resolveRuntimePaths)({
        home: opts.home,
        forceHome: opts.forceHome ?? Boolean(opts.home),
    });
    const env = (0, env_file_1.ensureEnvFile)(paths);
    (0, env_file_1.loadEnvIntoProcess)(paths.envFile);
    (0, node_child_process_1.execSync)('npx prisma migrate deploy', {
        cwd: paths.packageRoot,
        stdio: 'inherit',
        env: {
            ...process.env,
            DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
        },
    });
    (0, print_1.ok)('Migrate complete');
}
//# sourceMappingURL=migrate.js.map