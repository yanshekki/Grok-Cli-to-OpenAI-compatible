"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentService = exports.DocumentService = void 0;
const node_crypto_1 = require("node:crypto");
const node_fs_1 = require("node:fs");
const node_path_1 = __importDefault(require("node:path"));
const database_1 = require("../config/database");
const constants_1 = require("../config/constants");
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
const id_1 = require("../utils/id");
const path_safe_1 = require("../utils/path-safe");
const audit_service_1 = require("./audit.service");
const encryption_service_1 = require("./encryption.service");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toPrismaBytes(buf) {
    return Buffer.from(buf);
}
class DocumentService {
    async ensureStorageDir() {
        await node_fs_1.promises.mkdir(env_1.env.storageDir, { recursive: true });
    }
    async upload(input) {
        const originalName = (0, path_safe_1.sanitizeFilename)(input.originalName);
        const ext = node_path_1.default.extname(originalName).toLowerCase();
        const mime = (input.mimeType || 'application/octet-stream').toLowerCase();
        if (input.buffer.length > env_1.env.UPLOAD_MAX_BYTES) {
            throw exception_factory_1.ExceptionFactory.documentTooLarge(env_1.env.UPLOAD_MAX_BYTES);
        }
        if (!constants_1.ALLOWED_UPLOAD_EXTENSIONS.has(ext) &&
            !constants_1.ALLOWED_UPLOAD_MIME_TYPES.has(mime)) {
            throw exception_factory_1.ExceptionFactory.documentTypeNotAllowed(`Extension "${ext}" / MIME "${mime}" is not allowed`);
        }
        const checksumSha256 = (0, node_crypto_1.createHash)('sha256').update(input.buffer).digest('hex');
        const encrypted = encryption_service_1.encryptionService.encrypt(input.buffer);
        const id = (0, id_1.createId)();
        const useFilesystem = input.buffer.length > env_1.env.DOCUMENT_DB_MAX_BYTES;
        let storagePath = null;
        // any: Prisma Bytes vs Node Buffer typing (TS 5.x ArrayBufferLike mismatch)
        let contentCiphertext = null;
        let contentIv = null;
        let contentTag = null;
        let storageType = constants_1.STORAGE_TYPES.DB;
        if (useFilesystem) {
            await this.ensureStorageDir();
            const rel = (0, path_safe_1.ensureRelativeStoragePath)(id);
            const fullPath = node_path_1.default.join(env_1.env.storageDir, `${rel}.enc`);
            // Store iv + tag + ciphertext together
            const packed = Buffer.concat([
                Buffer.from([encrypted.iv.length]),
                encrypted.iv,
                Buffer.from([encrypted.tag.length]),
                encrypted.tag,
                encrypted.ciphertext,
            ]);
            await node_fs_1.promises.writeFile(fullPath, packed, { mode: 0o600 });
            storagePath = `${rel}.enc`;
            storageType = constants_1.STORAGE_TYPES.FILESYSTEM;
        }
        else {
            contentCiphertext = toPrismaBytes(encrypted.ciphertext);
            contentIv = toPrismaBytes(encrypted.iv);
            contentTag = toPrismaBytes(encrypted.tag);
        }
        const created = await database_1.prisma.document.create({
            data: {
                id,
                apiKeyId: input.apiKeyId,
                originalName,
                mimeType: mime,
                sizeBytes: input.buffer.length,
                storageType,
                contentCiphertext,
                contentIv,
                contentTag,
                storagePath,
                checksumSha256,
            },
        });
        await audit_service_1.auditService.log({
            apiKeyId: input.apiKeyId,
            action: constants_1.AUDIT_ACTIONS.DOCUMENT_UPLOAD,
            resource: 'document',
            resourceId: created.id,
            meta: {
                originalName,
                mimeType: mime,
                sizeBytes: input.buffer.length,
                storageType,
            },
            ip: input.ip,
        });
        return this.toPublic(created);
    }
    async list(apiKeyId, limit = 50, offset = 0) {
        const where = { apiKeyId, deletedAt: null };
        const [rows, total] = await Promise.all([
            database_1.prisma.document.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                take: limit,
                skip: offset,
            }),
            database_1.prisma.document.count({ where }),
        ]);
        return { items: rows.map((r) => this.toPublic(r)), total };
    }
    async getOwned(apiKeyId, documentId) {
        const doc = await database_1.prisma.document.findFirst({
            where: { id: documentId, apiKeyId, deletedAt: null },
        });
        if (!doc) {
            throw exception_factory_1.ExceptionFactory.notFound('Document');
        }
        return doc;
    }
    async getPublic(apiKeyId, documentId) {
        const doc = await this.getOwned(apiKeyId, documentId);
        return this.toPublic(doc);
    }
    async readDecryptedContent(apiKeyId, documentId) {
        const doc = await this.getOwned(apiKeyId, documentId);
        if (doc.storageType === constants_1.STORAGE_TYPES.FILESYSTEM && doc.storagePath) {
            const fullPath = node_path_1.default.join(env_1.env.storageDir, node_path_1.default.basename(doc.storagePath));
            const packed = await node_fs_1.promises.readFile(fullPath);
            let offset = 0;
            const ivLen = packed[offset++];
            const iv = packed.subarray(offset, offset + ivLen);
            offset += ivLen;
            const tagLen = packed[offset++];
            const tag = packed.subarray(offset, offset + tagLen);
            offset += tagLen;
            const ciphertext = packed.subarray(offset);
            return encryption_service_1.encryptionService.decrypt({ ciphertext, iv, tag });
        }
        if (!doc.contentCiphertext || !doc.contentIv || !doc.contentTag) {
            throw exception_factory_1.ExceptionFactory.internal('Document ciphertext missing');
        }
        return encryption_service_1.encryptionService.decrypt({
            ciphertext: Buffer.from(doc.contentCiphertext),
            iv: Buffer.from(doc.contentIv),
            tag: Buffer.from(doc.contentTag),
        });
    }
    async softDelete(apiKeyId, documentId, ip) {
        const doc = await this.getOwned(apiKeyId, documentId);
        await database_1.prisma.document.update({
            where: { id: doc.id },
            data: { deletedAt: new Date() },
        });
        if (doc.storageType === constants_1.STORAGE_TYPES.FILESYSTEM && doc.storagePath) {
            const fullPath = node_path_1.default.join(env_1.env.storageDir, node_path_1.default.basename(doc.storagePath));
            await node_fs_1.promises.unlink(fullPath).catch(() => undefined);
        }
        await audit_service_1.auditService.log({
            apiKeyId,
            action: constants_1.AUDIT_ACTIONS.DOCUMENT_DELETE,
            resource: 'document',
            resourceId: documentId,
            meta: { originalName: doc.originalName },
            ip,
        });
    }
    async buildContextFromDocuments(apiKeyId, documentIds, maxChars) {
        if (documentIds.length === 0)
            return '';
        const parts = [];
        let used = 0;
        for (const id of documentIds) {
            const doc = await this.getOwned(apiKeyId, id);
            const buf = await this.readDecryptedContent(apiKeyId, id);
            let text = buf.toString('utf8');
            // Skip clearly binary garbage for context
            if (text.includes('\u0000')) {
                text = `[binary file: ${doc.originalName}, ${doc.sizeBytes} bytes, sha256=${doc.checksumSha256}]`;
            }
            const header = `--- Document: ${doc.originalName} (${doc.id}) ---\n`;
            const remaining = maxChars - used;
            if (remaining <= 0)
                break;
            const body = header.length + text.length > remaining
                ? text.slice(0, Math.max(0, remaining - header.length)) + '\n...[truncated]'
                : text;
            const chunk = header + body + '\n';
            parts.push(chunk);
            used += chunk.length;
        }
        return parts.join('\n');
    }
    toPublic(doc) {
        return {
            id: doc.id,
            originalName: doc.originalName,
            mimeType: doc.mimeType,
            sizeBytes: doc.sizeBytes,
            checksumSha256: doc.checksumSha256,
            createdAt: doc.createdAt,
        };
    }
}
exports.DocumentService = DocumentService;
exports.documentService = new DocumentService();
//# sourceMappingURL=document.service.js.map