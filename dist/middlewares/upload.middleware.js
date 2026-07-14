"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadSingle = void 0;
const multer_1 = __importDefault(require("multer"));
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
const storage = multer_1.default.memoryStorage();
exports.uploadSingle = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: env_1.env.UPLOAD_MAX_BYTES,
        files: 1,
    },
    fileFilter: (_req, file, cb) => {
        // Extension/MIME hard checks happen in DocumentService
        if (!file.originalname || file.originalname.length > 500) {
            cb(exception_factory_1.ExceptionFactory.validation('Invalid filename'));
            return;
        }
        cb(null, true);
    },
}).single('file');
//# sourceMappingURL=upload.middleware.js.map