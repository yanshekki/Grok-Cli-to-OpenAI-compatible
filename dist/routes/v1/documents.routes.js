"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const document_controller_1 = require("../../controllers/document.controller");
const document_dto_1 = require("../../dto/document.dto");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const upload_middleware_1 = require("../../middlewares/upload.middleware");
const validate_middleware_1 = require("../../middlewares/validate.middleware");
const router = (0, express_1.Router)();
router.post('/', auth_middleware_1.requireApiKey, upload_middleware_1.uploadSingle, document_controller_1.documentController.upload);
router.get('/', auth_middleware_1.requireApiKey, (0, validate_middleware_1.validate)(document_dto_1.listDocumentsSchema, 'query'), document_controller_1.documentController.list);
router.get('/:id', auth_middleware_1.requireApiKey, (0, validate_middleware_1.validate)(document_dto_1.documentIdParamSchema, 'params'), document_controller_1.documentController.get);
router.delete('/:id', auth_middleware_1.requireApiKey, (0, validate_middleware_1.validate)(document_dto_1.documentIdParamSchema, 'params'), document_controller_1.documentController.remove);
exports.default = router;
//# sourceMappingURL=documents.routes.js.map