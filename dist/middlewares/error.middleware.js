"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = notFoundHandler;
exports.errorMiddleware = errorMiddleware;
const http_exception_1 = require("../exceptions/http.exception");
const exception_factory_1 = require("../exceptions/exception.factory");
const logger_1 = require("../utils/logger");
function notFoundHandler(req, _res, next) {
    next(exception_factory_1.ExceptionFactory.notFound(`Route ${req.method} ${req.path}`));
}
function errorMiddleware(err, req, res, _next) {
    // CORS errors from cors package
    if (err instanceof Error && err.message.startsWith('CORS origin not allowed')) {
        const httpErr = exception_factory_1.ExceptionFactory.forbidden(err.message);
        res.status(httpErr.statusCode).json((0, http_exception_1.toOpenAiErrorBody)(httpErr));
        return;
    }
    if (err instanceof http_exception_1.HttpException) {
        if (err.statusCode >= 500) {
            logger_1.logger.error({ err, requestId: req.requestId, path: req.path }, err.message);
        }
        else {
            logger_1.logger.warn({ code: err.code, requestId: req.requestId, path: req.path }, err.message);
        }
        if (res.headersSent) {
            return;
        }
        res.status(err.statusCode).json((0, http_exception_1.toOpenAiErrorBody)(err));
        return;
    }
    logger_1.logger.error({ err, requestId: req.requestId, path: req.path }, 'Unhandled error');
    if (res.headersSent) {
        return;
    }
    const httpErr = exception_factory_1.ExceptionFactory.internal();
    res.status(httpErr.statusCode).json((0, http_exception_1.toOpenAiErrorBody)(httpErr));
}
//# sourceMappingURL=error.middleware.js.map