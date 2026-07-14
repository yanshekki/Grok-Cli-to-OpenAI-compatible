"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAdmin = exports.requireApiKey = void 0;
exports.optionalApiKey = optionalApiKey;
const constants_1 = require("../config/constants");
const exception_factory_1 = require("../exceptions/exception.factory");
const api_key_service_1 = require("../services/api-key.service");
const async_handler_1 = require("../utils/async-handler");
function extractBearer(req) {
    const header = req.header('authorization');
    if (!header)
        return null;
    const [scheme, token] = header.split(/\s+/);
    if (!scheme || !token)
        return null;
    if (scheme.toLowerCase() !== 'bearer')
        return null;
    return token.trim();
}
exports.requireApiKey = (0, async_handler_1.asyncHandler)(async (req, _res, next) => {
    const token = extractBearer(req);
    if (!token) {
        throw exception_factory_1.ExceptionFactory.unauthorized('Missing Authorization: Bearer <api_key>');
    }
    req.apiKey = await api_key_service_1.apiKeyService.authenticate(token);
    next();
});
exports.requireAdmin = (0, async_handler_1.asyncHandler)(async (req, _res, next) => {
    if (!req.apiKey) {
        throw exception_factory_1.ExceptionFactory.unauthorized();
    }
    if (req.apiKey.role !== constants_1.ROLES.ADMIN) {
        throw exception_factory_1.ExceptionFactory.forbidden('Admin role required');
    }
    next();
});
function optionalApiKey(_req, _res, next) {
    next();
}
//# sourceMappingURL=auth.middleware.js.map