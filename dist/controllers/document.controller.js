"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentController = exports.DocumentController = void 0;
const exception_factory_1 = require("../exceptions/exception.factory");
const document_service_1 = require("../services/document.service");
const async_handler_1 = require("../utils/async-handler");
class DocumentController {
    upload = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        if (!req.file) {
            throw exception_factory_1.ExceptionFactory.validation('File field "file" is required');
        }
        const doc = await document_service_1.documentService.upload({
            apiKeyId: req.apiKey.id,
            originalName: req.file.originalname,
            mimeType: req.file.mimetype,
            buffer: req.file.buffer,
            ip: req.ip,
        });
        res.status(201).json({ object: 'document', data: doc });
    });
    list = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        const query = req.query;
        const result = await document_service_1.documentService.list(req.apiKey.id, query.limit, query.offset);
        res.status(200).json({
            object: 'list',
            data: result.items,
            total: result.total,
        });
    });
    get = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        const doc = await document_service_1.documentService.getPublic(req.apiKey.id, String(req.params.id));
        res.status(200).json({ object: 'document', data: doc });
    });
    remove = (0, async_handler_1.asyncHandler)(async (req, res) => {
        if (!req.apiKey) {
            throw exception_factory_1.ExceptionFactory.unauthorized();
        }
        await document_service_1.documentService.softDelete(req.apiKey.id, String(req.params.id), req.ip);
        res.status(200).json({ object: 'document.deleted', id: req.params.id, deleted: true });
    });
}
exports.DocumentController = DocumentController;
exports.documentController = new DocumentController();
//# sourceMappingURL=document.controller.js.map