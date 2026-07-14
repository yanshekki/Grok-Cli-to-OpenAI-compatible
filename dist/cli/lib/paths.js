"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PORT = exports.PACKAGE_NAME = void 0;
exports.getPackageRoot = getPackageRoot;
exports.getDefaultHome = getDefaultHome;
exports.resolveRuntimePaths = resolveRuntimePaths;
exports.isProjectCheckout = isProjectCheckout;
exports.ensureHomeDirs = ensureHomeDirs;
const node_fs_1 = __importDefault(require("node:fs"));
const node_os_1 = __importDefault(require("node:os"));
const node_path_1 = __importDefault(require("node:path"));
exports.PACKAGE_NAME = 'grok-cli-to-openai-compatible';
exports.DEFAULT_PORT = 3847;
/** Installed package root (contains package.json, prisma/, dist/) */
function getPackageRoot() {
    // dist/cli/lib -> dist/cli -> dist -> package root
    return node_path_1.default.resolve(__dirname, '../../..');
}
function getDefaultHome() {
    if (process.env.GCTOAC_HOME?.trim()) {
        return node_path_1.default.resolve(process.env.GCTOAC_HOME.trim());
    }
    return node_path_1.default.join(node_os_1.default.homedir(), '.gctoac');
}
/**
 * Prefer project-local data when running inside this repo checkout.
 * Otherwise use ~/.gctoac (or GCTOAC_HOME / --home).
 */
function resolveRuntimePaths(options) {
    const packageRoot = getPackageRoot();
    const cwd = process.cwd();
    let mode = 'home';
    let home = options?.home
        ? node_path_1.default.resolve(options.home)
        : getDefaultHome();
    if (!options?.forceHome && !options?.home && isProjectCheckout(cwd)) {
        mode = 'project';
        home = cwd;
    }
    else if (options?.forceHome || options?.home || process.env.GCTOAC_HOME) {
        mode = 'home';
    }
    else if (isProjectCheckout(cwd)) {
        mode = 'project';
        home = cwd;
    }
    const dataDir = node_path_1.default.join(home, 'data');
    const storageDir = node_path_1.default.join(home, 'storage');
    const logsDir = node_path_1.default.join(home, 'logs');
    const envFile = node_path_1.default.join(home, '.env');
    const pidFile = node_path_1.default.join(home, 'gctoac.pid');
    // Absolute file URL is reliable for global install (not relative to prisma/)
    const dbFile = node_path_1.default.resolve(dataDir, 'gateway.db');
    const databaseUrl = `file:${dbFile}`;
    return {
        mode,
        home,
        packageRoot,
        envFile,
        dataDir,
        storageDir,
        logsDir,
        pidFile,
        databaseUrl,
    };
}
function isProjectCheckout(dir) {
    try {
        const pkgPath = node_path_1.default.join(dir, 'package.json');
        if (!node_fs_1.default.existsSync(pkgPath))
            return false;
        const pkg = JSON.parse(node_fs_1.default.readFileSync(pkgPath, 'utf8'));
        if (pkg.name !== exports.PACKAGE_NAME)
            return false;
        return node_fs_1.default.existsSync(node_path_1.default.join(dir, 'prisma', 'schema.prisma'));
    }
    catch {
        return false;
    }
}
function ensureHomeDirs(paths) {
    node_fs_1.default.mkdirSync(paths.dataDir, { recursive: true });
    node_fs_1.default.mkdirSync(paths.storageDir, { recursive: true });
    node_fs_1.default.mkdirSync(paths.logsDir, { recursive: true });
    node_fs_1.default.mkdirSync(node_path_1.default.join(paths.storageDir, 'sandboxes'), { recursive: true });
}
//# sourceMappingURL=paths.js.map