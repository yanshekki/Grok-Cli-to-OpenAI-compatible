"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const admin_dto_1 = require("../dto/admin.dto");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validate_middleware_1 = require("../middlewares/validate.middleware");
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
const settings_service_1 = require("../services/settings.service");
const async_handler_1 = require("../utils/async-handler");
const router = (0, express_1.Router)();
const ensureAdminPanel = (0, async_handler_1.asyncHandler)(async (_req, _res, next) => {
    if (!env_1.env.ADMIN_PANEL_ENABLED) {
        throw exception_factory_1.ExceptionFactory.forbidden('Admin panel disabled by env');
    }
    const settings = await settings_service_1.settingsService.getAll();
    if (!settings.adminPanelEnabled) {
        throw exception_factory_1.ExceptionFactory.forbidden('Admin panel disabled in settings');
    }
    next();
});
router.use(ensureAdminPanel);
router.use(auth_middleware_1.requireApiKey);
router.use(auth_middleware_1.requireAdmin);
router.get('/me', admin_controller_1.adminController.me);
router.get('/stats', admin_controller_1.adminController.stats);
router.get('/system', admin_controller_1.adminController.system);
router.get('/system/update-check', admin_controller_1.adminController.checkUpdate);
router.post('/system/update', admin_controller_1.adminController.runUpdate);
router.get('/chats', (0, validate_middleware_1.validate)(admin_dto_1.adminListQuerySchema, 'query'), admin_controller_1.adminController.listChats);
router.get('/chats/:id', (0, validate_middleware_1.validate)(admin_dto_1.adminIdParamSchema, 'params'), admin_controller_1.adminController.getChat);
router.get('/keys', admin_controller_1.adminController.listKeys);
router.post('/keys', (0, validate_middleware_1.validate)(admin_dto_1.adminCreateKeySchema, 'body'), admin_controller_1.adminController.createKey);
router.patch('/keys/:id', (0, validate_middleware_1.validate)(admin_dto_1.adminIdParamSchema, 'params'), (0, validate_middleware_1.validate)(admin_dto_1.adminUpdateKeySchema, 'body'), admin_controller_1.adminController.updateKey);
router.delete('/keys/:id', (0, validate_middleware_1.validate)(admin_dto_1.adminIdParamSchema, 'params'), admin_controller_1.adminController.revokeKey);
router.get('/documents', (0, validate_middleware_1.validate)(admin_dto_1.adminListQuerySchema, 'query'), admin_controller_1.adminController.listDocuments);
router.get('/documents/:id', (0, validate_middleware_1.validate)(admin_dto_1.adminIdParamSchema, 'params'), admin_controller_1.adminController.getDocument);
router.delete('/documents/:id', (0, validate_middleware_1.validate)(admin_dto_1.adminIdParamSchema, 'params'), admin_controller_1.adminController.deleteDocument);
router.get('/audit-logs', (0, validate_middleware_1.validate)(admin_dto_1.adminListQuerySchema, 'query'), admin_controller_1.adminController.listAudit);
router.get('/settings', admin_controller_1.adminController.getSettings);
router.put('/settings', (0, validate_middleware_1.validate)(admin_dto_1.adminUpdateSettingsSchema, 'body'), admin_controller_1.adminController.updateSettings);
exports.default = router;
//# sourceMappingURL=admin.routes.js.map