"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionFactory = void 0;
const error_codes_1 = require("./error-codes");
const http_exception_1 = require("./http.exception");
exports.ExceptionFactory = {
    unauthorized(message = 'Invalid or missing API key') {
        return new http_exception_1.HttpException(401, message, error_codes_1.ErrorCodes.UNAUTHORIZED);
    },
    forbidden(message = 'Forbidden') {
        return new http_exception_1.HttpException(403, message, error_codes_1.ErrorCodes.FORBIDDEN);
    },
    notFound(resource = 'Resource') {
        return new http_exception_1.HttpException(404, `${resource} not found`, error_codes_1.ErrorCodes.NOT_FOUND);
    },
    validation(message, details) {
        return new http_exception_1.HttpException(400, message, error_codes_1.ErrorCodes.VALIDATION_ERROR, details);
    },
    rateLimited(message = 'Rate limit exceeded') {
        return new http_exception_1.HttpException(429, message, error_codes_1.ErrorCodes.RATE_LIMITED);
    },
    concurrencyLimit(message = 'Too many concurrent Grok jobs') {
        return new http_exception_1.HttpException(429, message, error_codes_1.ErrorCodes.CONCURRENCY_LIMIT);
    },
    grokError(message, details) {
        return new http_exception_1.HttpException(502, message, error_codes_1.ErrorCodes.GROK_ERROR, details);
    },
    grokTimeout(message = 'Grok CLI timed out') {
        return new http_exception_1.HttpException(504, message, error_codes_1.ErrorCodes.GROK_TIMEOUT);
    },
    grokNotAvailable(message = 'Grok CLI is not available') {
        return new http_exception_1.HttpException(503, message, error_codes_1.ErrorCodes.GROK_NOT_AVAILABLE);
    },
    invalidCwd(message = 'Working directory is not allowed') {
        return new http_exception_1.HttpException(400, message, error_codes_1.ErrorCodes.INVALID_CWD);
    },
    documentTooLarge(maxBytes) {
        return new http_exception_1.HttpException(413, `Document exceeds maximum size of ${maxBytes} bytes`, error_codes_1.ErrorCodes.DOCUMENT_TOO_LARGE);
    },
    documentTypeNotAllowed(message = 'Document type is not allowed') {
        return new http_exception_1.HttpException(415, message, error_codes_1.ErrorCodes.DOCUMENT_TYPE_NOT_ALLOWED);
    },
    internal(message = 'Internal server error', details) {
        return new http_exception_1.HttpException(500, message, error_codes_1.ErrorCodes.INTERNAL_ERROR, details);
    },
    serviceUnavailable(message = 'Service unavailable') {
        return new http_exception_1.HttpException(503, message, error_codes_1.ErrorCodes.SERVICE_UNAVAILABLE);
    },
};
//# sourceMappingURL=exception.factory.js.map