"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminUpdateSettingsSchema = exports.adminUpdateKeySchema = exports.adminCreateKeySchema = exports.adminIdParamSchema = exports.adminListQuerySchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../config/constants");
exports.adminListQuerySchema = zod_1.z.object({
    limit: zod_1.z.coerce.number().int().min(1).max(200).optional().default(50),
    offset: zod_1.z.coerce.number().int().min(0).optional().default(0),
    status: zod_1.z.string().optional(),
    apiKeyId: zod_1.z.string().uuid().optional(),
    model: zod_1.z.string().optional(),
    q: zod_1.z.string().max(200).optional(),
    action: zod_1.z.string().optional(),
});
exports.adminIdParamSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});
exports.adminCreateKeySchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(128),
    role: zod_1.z.enum([constants_1.ROLES.CLIENT, constants_1.ROLES.ADMIN]).optional().default(constants_1.ROLES.CLIENT),
    mode: zod_1.z.enum([constants_1.KEY_MODES.SAFE, constants_1.KEY_MODES.AGENT]).optional().default(constants_1.KEY_MODES.SAFE),
    rateLimit: zod_1.z.number().int().min(1).max(10_000).optional().default(60),
    maxTurns: zod_1.z.number().int().min(1).max(100).nullable().optional(),
    timeoutMs: zod_1.z.number().int().min(1000).max(3_600_000).nullable().optional(),
});
exports.adminUpdateKeySchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(128).optional(),
    role: zod_1.z.enum([constants_1.ROLES.CLIENT, constants_1.ROLES.ADMIN]).optional(),
    mode: zod_1.z.enum([constants_1.KEY_MODES.SAFE, constants_1.KEY_MODES.AGENT]).optional(),
    rateLimit: zod_1.z.number().int().min(1).max(10_000).optional(),
    isActive: zod_1.z.boolean().optional(),
    maxTurns: zod_1.z.number().int().min(1).max(100).nullable().optional(),
    timeoutMs: zod_1.z.number().int().min(1000).max(3_600_000).nullable().optional(),
});
exports.adminUpdateSettingsSchema = zod_1.z.object({
    globalSafeMode: zod_1.z.boolean().optional(),
    safeMaxTurns: zod_1.z.number().int().min(1).max(50).optional(),
    safeTimeoutMs: zod_1.z.number().int().min(5000).max(3_600_000).optional(),
    safeToolsMode: zod_1.z
        .enum([constants_1.SAFE_TOOLS_MODES.NONE, constants_1.SAFE_TOOLS_MODES.READONLY])
        .optional(),
    defaultModel: zod_1.z.string().min(1).max(128).optional(),
    adminPanelEnabled: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=admin.dto.js.map