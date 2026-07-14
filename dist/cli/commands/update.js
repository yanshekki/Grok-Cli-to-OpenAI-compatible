"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdUpdate = cmdUpdate;
const update_service_1 = require("../../services/update.service");
const print_1 = require("../lib/print");
const paths_1 = require("../lib/paths");
const restart_1 = require("./restart");
/**
 * CLI must hard-exit: undici `fetch` keep-alive + open log FDs can leave
 * the event loop running so the shell appears stuck until Ctrl+C.
 */
function exitCli(code = 0) {
    try {
        // Best-effort flush so stderr (console.warn) is not reordered after the shell prompt
        process.stdout.write('');
        process.stderr.write('');
    }
    catch {
        /* ignore */
    }
    process.exit(code);
}
async function cmdUpdate(opts) {
    try {
        const infoVer = await update_service_1.updateService.getVersionInfo();
        (0, print_1.info)(`Current:  ${infoVer.current}`);
        (0, print_1.info)(`Channel:  ${infoVer.channel} (${infoVer.installSource})`);
        (0, print_1.info)(`npm:      ${infoVer.latestNpm ?? 'n/a'}`);
        (0, print_1.info)(`GitHub:   ${infoVer.latestGithub ?? 'n/a'}`);
        (0, print_1.info)(`Latest:   ${infoVer.latest ?? 'n/a'}`);
        (0, print_1.info)(`Update?:  ${infoVer.updateAvailable ? 'yes' : 'no / unknown'}`);
        if (opts.check) {
            if (infoVer.updateAvailable) {
                // use info (stdout) so message is not reordered vs shell prompt on hard exit
                (0, print_1.info)('⚠ Update available — run: gctoac update');
            }
            else {
                (0, print_1.ok)('Already up to date (or no newer npm/GitHub release found)');
            }
            exitCli(0);
        }
        if (!infoVer.updateAvailable && infoVer.channel !== 'git') {
            (0, print_1.warn)('No newer version detected; running update anyway…');
        }
        const result = await update_service_1.updateService.performUpdate({
            channel: opts.channel || 'auto',
        });
        for (const line of result.log) {
            (0, print_1.info)(line);
        }
        (0, print_1.ok)(result.message);
        (0, print_1.info)(`Version: ${result.fromVersion} → ${result.toVersion ?? '?'}`);
        if (opts.restart !== false && result.restartRequired) {
            (0, print_1.info)('Restarting gateway…');
            const paths = (0, paths_1.resolveRuntimePaths)({
                home: opts.home,
                forceHome: opts.forceHome ?? Boolean(opts.home),
            });
            await (0, restart_1.cmdRestart)({
                home: paths.home,
                forceHome: true,
            });
        }
        else if (result.restartRequired) {
            (0, print_1.warn)('Restart required: gctoac restart');
        }
        exitCli(0);
    }
    catch (e) {
        (0, print_1.fail)(e instanceof Error ? e.message : String(e));
        exitCli(1);
    }
}
//# sourceMappingURL=update.js.map