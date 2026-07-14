"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
exports.toOpenAiErrorBody = toOpenAiErrorBody;
const error_codes_1 = require("./error-codes");
class HttpException extends Error {
    statusCode;
    code;
    details;
    type;
    constructor(statusCode, message, code = error_codes_1.ErrorCodes.INTERNAL_ERROR, details) {
        super(message);
        this.name = 'HttpException';
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;
        this.type = mapType(statusCode);
    }
}
exports.HttpException = HttpException;
function mapType(statusCode) {
    if (statusCode === 401)
        return 'invalid_request_error';
    if (statusCode === 403)
        return 'invalid_request_error';
    if (statusCode === 404)
        return 'invalid_request_error';
    if (statusCode === 429)
        return 'rate_limit_error';
    if (statusCode >= 500)
        return 'server_error';
    return 'invalid_request_error';
}
function toOpenAiErrorBody(err) {
    return {
        error: {
            message: err.message,
            type: err.type,
            code: err.code,
            param: null,
            ...(err.details !== undefined ? { details: err.details } : {}),
        },
    };
}
//# sourceMappingURL=http.exception.js.map