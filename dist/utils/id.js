"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createId = createId;
exports.createRequestId = createRequestId;
exports.createChatCompletionId = createChatCompletionId;
exports.createApiKeySecret = createApiKeySecret;
exports.apiKeyPrefix = apiKeyPrefix;
const node_crypto_1 = require("node:crypto");
function createId() {
    return (0, node_crypto_1.randomUUID)();
}
function createRequestId() {
    return `req_${(0, node_crypto_1.randomBytes)(12).toString('hex')}`;
}
function createChatCompletionId() {
    return `chatcmpl_${(0, node_crypto_1.randomBytes)(12).toString('hex')}`;
}
function createApiKeySecret() {
    return `gk_live_${(0, node_crypto_1.randomBytes)(24).toString('base64url')}`;
}
function apiKeyPrefix(rawKey) {
    return rawKey.slice(0, 16);
}
//# sourceMappingURL=id.js.map