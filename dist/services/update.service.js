"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateService = exports.UpdateService = exports.NPM_PACKAGE = exports.GITHUB_REPO = void 0;
const node_child_process_1 = require("node:child_process");
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
exports.GITHUB_REPO = 'yanshekki/Grok-Cli-to-OpenAI-compatible';
exports.NPM_PACKAGE = 'grok-cli-to-openai-compatible';
function getPackageRoot() {
    // dist/services -> dist -> package root
    return node_path_1.default.resolve(__dirname, '../..');
}
function readLocalPackage() {
    const pkgPath = node_path_1.default.join(getPackageRoot(), 'package.json');
    return JSON.parse(node_fs_1.default.readFileSync(pkgPath, 'utf8'));
}
function detectChannel(packageRoot) {
    if (node_fs_1.default.existsSync(node_path_1.default.join(packageRoot, '.git'))) {
        return { channel: 'git', installSource: 'git working tree' };
    }
    // npm global typically under .../lib/node_modules/<name>
    const normalized = packageRoot.replace(/\\/g, '/');
    if (normalized.includes('/node_modules/')) {
        try {
            const globalRoot = (0, node_child_process_1.execSync)('npm root -g', { encoding: 'utf8' }).trim();
            if (packageRoot.startsWith(node_path_1.default.resolve(globalRoot))) {
                return {
                    channel: 'npm-global',
                    installSource: `npm global (${globalRoot})`,
                };
            }
        }
        catch {
            /* ignore */
        }
        return { channel: 'npm-local', installSource: 'npm local node_modules' };
    }
    // package.json may still live in a non-node_modules path after pack extract
    try {
        const pkg = readLocalPackage();
        if (pkg._resolved?.includes('github.com') || pkg._from?.includes('github:')) {
            return {
                channel: 'npm-global',
                installSource: pkg._from || pkg._resolved || 'github',
            };
        }
    }
    catch {
        /* ignore */
    }
    return { channel: 'unknown', installSource: packageRoot };
}
function compareSemver(a, b) {
    const pa = a.replace(/^v/, '').split('.').map((x) => Number(x) || 0);
    const pb = b.replace(/^v/, '').split('.').map((x) => Number(x) || 0);
    for (let i = 0; i < 3; i += 1) {
        const d = (pa[i] || 0) - (pb[i] || 0);
        if (d !== 0)
            return d > 0 ? 1 : -1;
    }
    return 0;
}
async function fetchLatestNpm() {
    try {
        const res = await fetch(`https://registry.npmjs.org/${exports.NPM_PACKAGE}/latest`, {
            signal: AbortSignal.timeout(8000),
        });
        if (!res.ok)
            return null;
        const body = (await res.json());
        return body.version ?? null;
    }
    catch {
        return null;
    }
}
async function fetchLatestGithub() {
    try {
        const res = await fetch(`https://api.github.com/repos/${exports.GITHUB_REPO}/releases/latest`, {
            headers: {
                Accept: 'application/vnd.github+json',
                'User-Agent': 'gctoac-update',
            },
            signal: AbortSignal.timeout(8000),
        });
        if (res.ok) {
            const body = (await res.json());
            if (body.tag_name)
                return body.tag_name.replace(/^v/, '');
        }
        // fallback: latest commit on main (not a version, skip)
        const tags = await fetch(`https://api.github.com/repos/${exports.GITHUB_REPO}/tags?per_page=1`, {
            headers: {
                Accept: 'application/vnd.github+json',
                'User-Agent': 'gctoac-update',
            },
            signal: AbortSignal.timeout(8000),
        });
        if (tags.ok) {
            const arr = (await tags.json());
            if (arr[0]?.name)
                return arr[0].name.replace(/^v/, '');
        }
        return null;
    }
    catch {
        return null;
    }
}
function run(cmd, cwd, log) {
    log.push(`$ ${cmd}`);
    const out = (0, node_child_process_1.execSync)(cmd, {
        cwd,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
        env: process.env,
        maxBuffer: 20 * 1024 * 1024,
    });
    if (out?.trim())
        log.push(out.trim());
}
class UpdateService {
    updating = false;
    isUpdating() {
        return this.updating;
    }
    async getVersionInfo() {
        const packageRoot = getPackageRoot();
        const pkg = readLocalPackage();
        const { channel, installSource } = detectChannel(packageRoot);
        const [latestNpm, latestGithub] = await Promise.all([
            fetchLatestNpm(),
            fetchLatestGithub(),
        ]);
        // Prefer npm latest when available; else GitHub tag
        const latest = latestNpm || latestGithub;
        const updateAvailable = latest
            ? compareSemver(latest, pkg.version) > 0
            : channel === 'git'; // git always can pull
        return {
            current: pkg.version,
            latestNpm,
            latestGithub,
            latest,
            updateAvailable: channel === 'git' ? true : updateAvailable,
            channel,
            packageRoot,
            installSource,
        };
    }
    async performUpdate(options) {
        if (this.updating) {
            throw exception_factory_1.ExceptionFactory.validation('Update already in progress');
        }
        this.updating = true;
        const log = [];
        const packageRoot = getPackageRoot();
        const fromVersion = readLocalPackage().version;
        const detected = detectChannel(packageRoot);
        const channel = options?.channel && options.channel !== 'auto'
            ? options.channel
            : detected.channel;
        try {
            log.push(`channel=${channel} root=${packageRoot}`);
            if (channel === 'git') {
                run('git fetch --all --tags', packageRoot, log);
                run('git pull --ff-only', packageRoot, log);
                run('npm install', packageRoot, log);
                run('npm run build', packageRoot, log);
            }
            else if (channel === 'npm-global') {
                // Prefer GitHub install so users always get latest main if not on npm yet
                try {
                    run(`npm install -g ${exports.NPM_PACKAGE}@latest`, packageRoot, log);
                }
                catch (e) {
                    log.push(`npm registry install failed: ${e instanceof Error ? e.message : e}`);
                    log.push('Falling back to GitHub install…');
                    run(`npm install -g github:${exports.GITHUB_REPO}`, packageRoot, log);
                }
            }
            else if (channel === 'npm-local') {
                run(`npm install ${exports.NPM_PACKAGE}@latest`, node_path_1.default.resolve(packageRoot, '../..'), log);
            }
            else {
                // unknown: try git if .git appears, else github global style update of self via npm pack not possible
                if (node_fs_1.default.existsSync(node_path_1.default.join(packageRoot, '.git'))) {
                    run('git pull --ff-only', packageRoot, log);
                    run('npm install', packageRoot, log);
                    run('npm run build', packageRoot, log);
                }
                else {
                    run(`npm install -g github:${exports.GITHUB_REPO}`, packageRoot, log);
                }
            }
            // Always regenerate prisma client + migrate when possible
            try {
                run('npx --yes prisma@6.5.0 generate', packageRoot, log);
            }
            catch (e) {
                log.push(`prisma generate warn: ${e instanceof Error ? e.message : e}`);
            }
            if (!options?.skipMigrate) {
                try {
                    run('npx --yes prisma@6.5.0 migrate deploy', packageRoot, log);
                }
                catch (e) {
                    log.push(`migrate warn: ${e instanceof Error ? e.message : e}`);
                }
            }
            let toVersion = null;
            try {
                // re-read package from disk after update (global path may change)
                toVersion = readLocalPackage().version;
            }
            catch {
                toVersion = null;
            }
            return {
                ok: true,
                channel,
                fromVersion,
                toVersion,
                log,
                restartRequired: true,
                message: 'Update finished. Restart the gateway (gctoac restart) to load the new code.',
            };
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            log.push(msg);
            throw exception_factory_1.ExceptionFactory.internal(`Update failed: ${msg}`, { log });
        }
        finally {
            this.updating = false;
        }
    }
    /**
     * Run update then restart detached process (used by admin one-click).
     * Spawns a short-lived shell so the HTTP response can return first.
     */
    scheduleUpdateAndRestart(options) {
        if (this.updating) {
            throw exception_factory_1.ExceptionFactory.validation('Update already in progress');
        }
        const packageRoot = getPackageRoot();
        const cli = node_path_1.default.join(packageRoot, 'dist', 'cli', 'index.js');
        const home = options?.home || process.env.GCTOAC_HOME || '';
        const port = options?.port || env_1.env.PORT;
        const homeFlag = home ? ` --home ${JSON.stringify(home)}` : '';
        const portFlag = port ? ` --port ${port}` : '';
        // Delay so HTTP can flush; then update + restart via CLI
        const script = [
            'sleep 2',
            `node ${JSON.stringify(cli)} update${homeFlag} || true`,
            `node ${JSON.stringify(cli)} restart${homeFlag}${portFlag} || true`,
        ].join(' && ');
        const child = (0, node_child_process_1.spawn)('bash', ['-lc', script], {
            detached: true,
            stdio: 'ignore',
            env: process.env,
            cwd: packageRoot,
        });
        child.unref();
        return {
            scheduled: true,
            message: 'Update scheduled. The server will update and restart in a few seconds. Refresh Admin after ~30s.',
        };
    }
}
exports.UpdateService = UpdateService;
exports.updateService = new UpdateService();
//# sourceMappingURL=update.service.js.map