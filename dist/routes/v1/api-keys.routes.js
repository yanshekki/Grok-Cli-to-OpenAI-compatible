"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_key_controller_1 = require("../../controllers/api-key.controller");
const api_key_dto_1 = require("../../dto/api-key.dto");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const router = (0, express_1.Router)();
router.post('/', auth_middleware_1.requireApiKey, auth_middleware_1.requireAdmin, (0, validate_middleware_1.validate)(api_key_dto_1.createApiKeySchema, 'body'), api_key_controller_1.apiKeyController.create);
router.get('/', auth_middleware_1.requireApiKey, auth_middleware_1.requireAdmin, api_key_controller_1.apiKeyController.list);
router.delete('/:id', auth_middleware_1.requireApiKey, auth_middleware_1.requireAdmin, (0, validate_middleware_1.validate)(api_key_dto_1.apiKeyIdParamSchema, 'params'), api_key_controller_1.apiKeyController.revoke);
exports.default = router;
//# sourceMappingURL=api-keys.routes.js.map