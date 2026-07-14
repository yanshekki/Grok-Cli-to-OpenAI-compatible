"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRISMA_VERSION = void 0;
exports.resolvePrismaEntry = resolvePrismaEntry;
exports.runPrisma = runPrisma;
const node_child_process_1 = require("node:child_process");
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const node_module_1 = require("node:module");
/** Keep in sync with package.json prisma / @prisma/client version */
exports.PRISMA_VERSION = '6.5.0';
const requireFromHere = (0, node_module_1.createRequire)(__filename);
function prismaEntryFromRoot(root) {
    const direct = node_path_1.default.join(root, 'node_modules', 'prisma', 'build', 'index.js');
    if (node_fs_1.default.existsSync(direct))
        return direct;
    try {
        const req = (0, node_module_1.createRequire)(node_path_1.default.join(root, 'package.json'));
        const pkgJson = req.resolve('prisma/package.json');
        const entry = node_path_1.default.join(node_path_1.default.dirname(pkgJson), 'build', 'index.js');
        if (node_fs_1.default.existsSync(entry))
            return entry;
    }
    catch {
        /* not installed under this root */
    }
    return null;
}
/**
 * Resolve the prisma CLI entry (node script), preferring local installs over npx.
 * Order: packageRoot → cwd → require from this CLI package → null (caller may fall back).
 */
function resolvePrismaEntry(packageRoot, cwd = process.cwd()) {
    for (const root of [packageRoot, cwd]) {
        const entry = prismaEntryFromRoot(root);
        if (entry)
            return entry;
    }
    try {
        const pkgJson = requireFromHere.resolve('prisma/package.json');
        const entry = node_path_1.default.join(node_path_1.default.dirname(pkgJson), 'build', 'index.js');
        if (node_fs_1.default.existsSync(entry))
            return entry;
    }
    catch {
        /* prisma not a dependency of the running CLI */
    }
    return null;
}
function which(cmd) {
    const paths = (process.env.PATH || '').split(node_path_1.default.delimiter);
    const exts = process.platform === 'win32' ? ['.cmd', '.exe', '.bat', ''] : [''];
    for (const dir of paths) {
        for (const ext of exts) {
            const p = node_path_1.default.join(dir, cmd + ext);
            if (node_fs_1.default.existsSync(p))
                return p;
        }
    }
    return null;
}
function runPrisma(args, options) {
    const env = { ...process.env, ...options.env };
    const entry = resolvePrismaEntry(options.packageRoot, options.cwd);
    if (entry) {
        (0, node_child_process_1.execFileSync)(process.execPath, [entry, ...args], {
            cwd: options.cwd,
            stdio: 'inherit',
            env,
        });
        return;
    }
    // Fallbacks when prisma is not installed locally (older global installs)
    const npmBin = which('npm');
    if (npmBin) {
        try {
            (0, node_child_process_1.execFileSync)(npmBin, ['exec', '--yes', `--package=prisma@${exports.PRISMA_VERSION}`, '--', 'prisma', ...args], { cwd: options.cwd, stdio: 'inherit', env });
            return;
        }
        catch {
            /* try npx next */
        }
    }
    const npxBin = which('npx');
    if (npxBin) {
        (0, node_child_process_1.execFileSync)(npxBin, ['--yes', `prisma@${exports.PRISMA_VERSION}`, ...args], {
            cwd: options.cwd,
            stdio: 'inherit',
            env,
        });
        return;
    }
    throw new Error(`Prisma CLI not found. Reinstall: npm install -g grok-cli-to-openai-compatible\n` +
        `Or in this project: npm install && npx prisma@${exports.PRISMA_VERSION} ${args.join(' ')}`);
}
//# sourceMappingURL=run-prisma.js.map