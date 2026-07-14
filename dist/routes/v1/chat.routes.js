"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_controller_1 = require("../../controllers/chat.controller");
const chat_dto_1 = require("../../dto/chat.dto");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const rate_limit_middleware_1 = require("../../middlewares/rate-limit.middleware");
const concurrency_middleware_1 = require("../../middlewares/concurrency.middleware");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const router = (0, express_1.Router)();
router.post('/completions', auth_middleware_1.requireApiKey, rate_limit_middleware_1.chatRateLimiter, concurrency_middleware_1.concurrencyGuard, (0, validate_middleware_1.validate)(chat_dto_1.createChatCompletionSchema, 'body'), chat_controller_1.chatController.createCompletion);
exports.default = router;
//# sourceMappingURL=chat.routes.js.map