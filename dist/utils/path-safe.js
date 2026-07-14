"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSafeCwd = resolveSafeCwd;
exports.sanitizeFilename = sanitizeFilename;
exports.ensureRelativeStoragePath = ensureRelativeStoragePath;
const node_path_1 = __importDefault(require("node:path"));
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
function resolveSafeCwd(input) {
    const candidate = node_path_1.default.resolve(input?.trim() || env_1.env.defaultCwd);
    const allowed = env_1.env.cwdAllowlist.some((root) => {
        const resolvedRoot = node_path_1.default.resolve(root);
        return candidate === resolvedRoot || candidate.startsWith(resolvedRoot + node_path_1.default.sep);
    });
    if (!allowed) {
        throw exception_factory_1.ExceptionFactory.invalidCwd(`cwd "${candidate}" is outside the allowlist: ${env_1.env.cwdAllowlist.join(', ')}`);
    }
    return candidate;
}
function sanitizeFilename(name) {
    const base = node_path_1.default.basename(name).replace(/[^\w.\-()+ ]+/g, '_').slice(0, 200);
    return base.length > 0 ? base : 'upload.bin';
}
function ensureRelativeStoragePath(fileId) {
    if (!fileId || fileId.includes('..') || fileId.includes('/') || fileId.includes('\\')) {
        throw exception_factory_1.ExceptionFactory.validation('Invalid storage path');
    }
    const safe = fileId.replace(/[^a-zA-Z0-9\-_]/g, '');
    if (!safe || safe !== fileId) {
        throw exception_factory_1.ExceptionFactory.validation('Invalid storage path');
    }
    return safe;
}
//# sourceMappingURL=path-safe.js.map