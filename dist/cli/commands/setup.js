"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdSetup = cmdSetup;
const node_child_process_1 = require("node:child_process");
const node_path_1 = __importDefault(require("node:path"));
const paths_1 = require("../lib/paths");
const env_file_1 = require("../lib/env-file");
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
    (0, print_1.info)('Running prisma migrate deploy…');
    (0, node_child_process_1.execSync)('npx --yes prisma@6.5.0 migrate deploy', {
        cwd: paths.packageRoot,
        stdio: 'inherit',
        env: {
            ...process.env,
            DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
            ENCRYPTION_KEY: env.ENCRYPTION_KEY,
        },
    });
    (0, print_1.info)('Running seed…');
    try {
        (0, node_child_process_1.execSync)('npx tsx prisma/seed.ts', {
            cwd: paths.packageRoot,
            stdio: 'inherit',
            env: {
                ...process.env,
                DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
                ENCRYPTION_KEY: env.ENCRYPTION_KEY,
                PORT: env.PORT || String(port),
            },
        });
    }
    catch {
        // seed with node if tsx missing in production install
        try {
            (0, node_child_process_1.execSync)('node --import tsx prisma/seed.ts', {
                cwd: paths.packageRoot,
                stdio: 'inherit',
                env: {
                    ...process.env,
                    DATABASE_URL: env.DATABASE_URL || paths.databaseUrl,
                    ENCRYPTION_KEY: env.ENCRYPTION_KEY,
                    PORT: env.PORT || String(port),
                },
            });
        }
        catch {
            (0, print_1.warn)('Seed failed — run: gctoac seed');
        }
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