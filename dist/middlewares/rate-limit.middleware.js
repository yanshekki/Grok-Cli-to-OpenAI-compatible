"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRateLimiter = exports.globalRateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
exports.globalRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: env_1.env.RATE_LIMIT_WINDOW_MS,
    max: env_1.env.RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
        if (req.apiKey?.id)
            return `key:${req.apiKey.id}`;
        return req.ip || 'unknown';
    },
    handler: () => {
        throw exception_factory_1.ExceptionFactory.rateLimited();
    },
    validate: { xForwardedForHeader: false },
});
exports.chatRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60_000,
    max: (req) => req.apiKey?.rateLimit ?? 60,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => {
        if (req.apiKey?.id)
            return `chat:${req.apiKey.id}`;
        return `chat-ip:${req.ip || 'unknown'}`;
    },
    handler: () => {
        throw exception_factory_1.ExceptionFactory.rateLimited('Chat rate limit exceeded for this API key');
    },
    validate: { xForwardedForHeader: false },
});
//# sourceMappingURL=rate-limit.middleware.js.map