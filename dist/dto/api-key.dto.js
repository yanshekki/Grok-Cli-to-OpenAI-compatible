"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyIdParamSchema = exports.createApiKeySchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../config/constants");
exports.createApiKeySchema = zod_1.z.object({
    name: zod_1.z.string().min(1).max(128),
    role: zod_1.z.enum([constants_1.ROLES.CLIENT, constants_1.ROLES.ADMIN]).optional().default(constants_1.ROLES.CLIENT),
    mode: zod_1.z.enum([constants_1.KEY_MODES.SAFE, constants_1.KEY_MODES.AGENT]).optional().default(constants_1.KEY_MODES.SAFE),
    rateLimit: zod_1.z.number().int().min(1).max(10_000).optional().default(60),
});
exports.apiKeyIdParamSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
});
//# sourceMappingURL=api-key.dto.js.map