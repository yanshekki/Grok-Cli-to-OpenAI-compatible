"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const health_controller_1 = require("../controllers/health.controller");
const chat_routes_1 = __importDefault(require("./v1/chat.routes"));
const models_routes_1 = __importDefault(require("./v1/models.routes"));
const documents_routes_1 = __importDefault(require("./v1/documents.routes"));
const api_keys_routes_1 = __importDefault(require("./v1/api-keys.routes"));
const router = (0, express_1.Router)();
router.get('/health', health_controller_1.healthController.health);
router.get('/ready', health_controller_1.healthController.ready);
router.use('/v1/chat', chat_routes_1.default);
router.use('/v1/models', models_routes_1.default);
router.use('/v1/documents', documents_routes_1.default);
router.use('/v1/api-keys', api_keys_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map