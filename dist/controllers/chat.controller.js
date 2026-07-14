"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatController = exports.ChatController = void 0;
const exception_factory_1 = require("../exceptions/exception.factory");
const chat_service_1 = require("../services/chat.service");
const async_handler_1 = require("../utils/async-handler");
class ChatController {
    createCompletion = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        const dto = req.body;
        const stream = Boolean(dto.stream);
        const result = await chat_service_1.chatService.createCompletion(dto, {
            apiKey: req.apiKey,
            requestId: req.requestId,
            ip: req.ip,
            userAgent: req.header('user-agent') ?? undefined,
        }, stream ? res : undefined);
        if (!stream && result) {
            res.status(200).json(result);
        }
    });
}
exports.ChatController = ChatController;
exports.chatController = new ChatController();
//# sourceMappingURL=chat.controller.js.map