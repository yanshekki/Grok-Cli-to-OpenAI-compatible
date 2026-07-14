"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_controller_1 = require("../../controllers/models.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.get('/', auth_middleware_1.requireApiKey, models_controller_1.modelsController.list);
router.get('/:model', auth_middleware_1.requireApiKey, models_controller_1.modelsController.get);
exports.default = router;
//# sourceMappingURL=models.routes.js.map