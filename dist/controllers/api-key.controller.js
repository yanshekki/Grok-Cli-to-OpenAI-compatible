"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyController = exports.ApiKeyController = void 0;
const constants_1 = require("../config/constants");
const exception_factory_1 = require("../exceptions/exception.factory");
const api_key_service_1 = require("../services/api-key.service");
const audit_service_1 = require("../services/audit.service");
const async_handler_1 = require("../utils/async-handler");
class ApiKeyController {
    create = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        const dto = req.body;
        const created = await api_key_service_1.apiKeyService.create({
            name: dto.name,
            role: dto.role,
            mode: dto.mode,
            rateLimit: dto.rateLimit,
            actorApiKeyId: req.apiKey.id,
            ip: req.ip,
        });
        res.status(201).json({ object: 'api_key', data: created });
    });
    list = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        const items = await api_key_service_1.apiKeyService.list();
        await audit_service_1.auditService.log({
            apiKeyId: req.apiKey.id,
            action: constants_1.AUDIT_ACTIONS.API_KEY_LIST,
            resource: 'api_key',
            ip: req.ip,
        });
        res.status(200).json({ object: 'list', data: items });
    });
    revoke = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        await api_key_service_1.apiKeyService.revoke(String(req.params.id), req.apiKey.id, req.ip);
        res.status(200).json({ object: 'api_key.deleted', id: req.params.id, deleted: true });
    });
}
exports.ApiKeyController = ApiKeyController;
exports.apiKeyController = new ApiKeyController();
//# sourceMappingURL=api-key.controller.js.map