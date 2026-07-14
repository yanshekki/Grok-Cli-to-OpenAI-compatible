"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concurrencyGuard = concurrencyGuard;
const exception_factory_1 = require("../exceptions/exception.factory");
const grok_cli_service_1 = require("../services/grok-cli.service");
/**
 * Soft check before entering chat handler. Hard acquire still happens in ChatService.
 */
function concurrencyGuard(_req, _res, next) {
    if (grok_cli_service_1.grokCliService.activeCount >= grok_cli_service_1.grokCliService.maxConcurrent) {
        next(exception_factory_1.ExceptionFactory.concurrencyLimit());
        return;
    }
    next();
}
//# sourceMappingURL=concurrency.middleware.js.map