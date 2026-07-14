"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionService = exports.EncryptionService = void 0;
const node_crypto_1 = require("node:crypto");
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
const ALGO = 'aes-256-gcm';
const IV_LENGTH = 12;
class EncryptionService {
    encrypt(plaintext) {
        const data = typeof plaintext === 'string' ? Buffer.from(plaintext, 'utf8') : plaintext;
        const iv = (0, node_crypto_1.randomBytes)(IV_LENGTH);
        const cipher = (0, node_crypto_1.createCipheriv)(ALGO, env_1.env.encryptionKey, iv);
        const ciphertext = Buffer.concat([cipher.update(data), cipher.final()]);
        const tag = cipher.getAuthTag();
        return { ciphertext, iv, tag };
    }
    decrypt(payload) {
        try {
            const decipher = (0, node_crypto_1.createDecipheriv)(ALGO, env_1.env.encryptionKey, payload.iv);
            decipher.setAuthTag(payload.tag);
            return Buffer.concat([decipher.update(payload.ciphertext), decipher.final()]);
        }
        catch {
            throw exception_factory_1.ExceptionFactory.internal('Failed to decrypt data');
        }
    }
    decryptToString(payload) {
        return this.decrypt(payload).toString('utf8');
    }
}
exports.EncryptionService = EncryptionService;
exports.encryptionService = new EncryptionService();
//# sourceMappingURL=encryption.service.js.map