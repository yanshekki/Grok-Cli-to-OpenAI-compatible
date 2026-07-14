"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.policyService = exports.PolicyService = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = __importDefault(require("node:path"));
const constants_1 = require("../config/constants");
const env_1 = require("../config/env");
const path_safe_1 = require("../utils/path-safe");
const settings_service_1 = require("./settings.service");
class PolicyService {
    async resolve(apiKey, clientCwd) {
        const settings = await settings_service_1.settingsService.getAll();
        const keyMode = (apiKey.mode === constants_1.KEY_MODES.AGENT ? constants_1.KEY_MODES.AGENT : constants_1.KEY_MODES.SAFE);
        const forcedSafe = settings.globalSafeMode || env_1.env.GROK_SAFE_MODE;
        const mode = forcedSafe ? constants_1.KEY_MODES.SAFE : keyMode;
        if (mode === constants_1.KEY_MODES.SAFE) {
            const sandbox = await this.ensureSandbox(apiKey.id);
            const maxTurns = apiKey.maxTurns ?? settings.safeMaxTurns;
            const timeoutMs = apiKey.timeoutMs ?? settings.safeTimeoutMs;
            if (settings.safeToolsMode === constants_1.SAFE_TOOLS_MODES.READONLY) {
                return {
                    mode,
                    alwaysApprove: false,
                    cwd: sandbox,
                    timeoutMs,
                    maxTurns,
                    toolsAllowlist: constants_1.SAFE_READONLY_TOOLS,
                    toolsDenylist: null,
                    sandboxForced: true,
                };
            }
            return {
                mode,
                alwaysApprove: false,
                cwd: sandbox,
                timeoutMs,
                maxTurns,
                toolsAllowlist: null,
                toolsDenylist: constants_1.SAFE_DISALLOWED_TOOLS,
                sandboxForced: true,
            };
        }
        return {
            mode,
            alwaysApprove: env_1.env.GROK_ALWAYS_APPROVE,
            cwd: (0, path_safe_1.resolveSafeCwd)(clientCwd),
            timeoutMs: apiKey.timeoutMs ?? env_1.env.GROK_TIMEOUT_MS,
            maxTurns: apiKey.maxTurns ?? null,
            toolsAllowlist: null,
            toolsDenylist: null,
            sandboxForced: false,
        };
    }
    async ensureSandbox(apiKeyId) {
        const safeId = apiKeyId.replace(/[^a-zA-Z0-9\-_]/g, '');
        const dir = node_path_1.default.join(env_1.env.storageDir, 'sandboxes', safeId || 'unknown');
        await node_fs_1.promises.mkdir(dir, { recursive: true });
        return dir;
    }
}
exports.PolicyService = PolicyService;
exports.policyService = new PolicyService();
//# sourceMappingURL=policy.service.js.map