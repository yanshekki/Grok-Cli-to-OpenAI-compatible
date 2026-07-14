"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsService = exports.SettingsService = void 0;
const database_1 = require("../config/database");
const env_1 = require("../config/env");
const constants_1 = require("../config/constants");
const DEFAULTS = {
    globalSafeMode: false,
    safeMaxTurns: 4,
    safeTimeoutMs: 120_000,
    safeToolsMode: constants_1.SAFE_TOOLS_MODES.NONE,
    defaultModel: 'grok-4.5',
    adminPanelEnabled: true,
};
function parseBool(v, fallback) {
    if (v === undefined)
        return fallback;
    return v === 'true' || v === '1';
}
function parseIntOr(v, fallback) {
    if (v === undefined)
        return fallback;
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}
class SettingsService {
    async getAll() {
        const rows = await database_1.prisma.setting.findMany();
        const map = new Map(rows.map((r) => [r.key, r.value]));
        const envDefaults = {
            globalSafeMode: env_1.env.GROK_SAFE_MODE,
            safeMaxTurns: env_1.env.GROK_SAFE_MAX_TURNS,
            safeTimeoutMs: env_1.env.GROK_SAFE_TIMEOUT_MS,
            safeToolsMode: constants_1.SAFE_TOOLS_MODES.NONE,
            defaultModel: env_1.env.GROK_DEFAULT_MODEL,
            adminPanelEnabled: env_1.env.ADMIN_PANEL_ENABLED,
        };
        const toolsMode = map.get(constants_1.SETTING_KEYS.SAFE_TOOLS_MODE);
        return {
            globalSafeMode: parseBool(map.get(constants_1.SETTING_KEYS.GLOBAL_SAFE_MODE), envDefaults.globalSafeMode),
            safeMaxTurns: parseIntOr(map.get(constants_1.SETTING_KEYS.SAFE_MAX_TURNS), envDefaults.safeMaxTurns),
            safeTimeoutMs: parseIntOr(map.get(constants_1.SETTING_KEYS.SAFE_TIMEOUT_MS), envDefaults.safeTimeoutMs),
            safeToolsMode: toolsMode === constants_1.SAFE_TOOLS_MODES.READONLY
                ? constants_1.SAFE_TOOLS_MODES.READONLY
                : toolsMode === constants_1.SAFE_TOOLS_MODES.NONE
                    ? constants_1.SAFE_TOOLS_MODES.NONE
                    : envDefaults.safeToolsMode,
            defaultModel: map.get(constants_1.SETTING_KEYS.DEFAULT_MODEL) || envDefaults.defaultModel,
            adminPanelEnabled: parseBool(map.get(constants_1.SETTING_KEYS.ADMIN_PANEL_ENABLED), envDefaults.adminPanelEnabled),
        };
    }
    async update(partial) {
        const entries = [];
        if (partial.globalSafeMode !== undefined) {
            entries.push([constants_1.SETTING_KEYS.GLOBAL_SAFE_MODE, String(partial.globalSafeMode)]);
        }
        if (partial.safeMaxTurns !== undefined) {
            entries.push([constants_1.SETTING_KEYS.SAFE_MAX_TURNS, String(partial.safeMaxTurns)]);
        }
        if (partial.safeTimeoutMs !== undefined) {
            entries.push([constants_1.SETTING_KEYS.SAFE_TIMEOUT_MS, String(partial.safeTimeoutMs)]);
        }
        if (partial.safeToolsMode !== undefined) {
            entries.push([constants_1.SETTING_KEYS.SAFE_TOOLS_MODE, partial.safeToolsMode]);
        }
        if (partial.defaultModel !== undefined) {
            entries.push([constants_1.SETTING_KEYS.DEFAULT_MODEL, partial.defaultModel]);
        }
        if (partial.adminPanelEnabled !== undefined) {
            entries.push([constants_1.SETTING_KEYS.ADMIN_PANEL_ENABLED, String(partial.adminPanelEnabled)]);
        }
        for (const [key, value] of entries) {
            await database_1.prisma.setting.upsert({
                where: { key },
                create: { key, value },
                update: { value },
            });
        }
        return this.getAll();
    }
}
exports.SettingsService = SettingsService;
exports.settingsService = new SettingsService();
// silence unused DEFAULTS warning if any
void DEFAULTS;
//# sourceMappingURL=settings.service.js.map