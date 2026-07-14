import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { prisma } from '../config/database';
import {
  ALLOWED_UPLOAD_EXTENSIONS,
  ALLOWED_UPLOAD_MIME_TYPES,
  AUDIT_ACTIONS,
  STORAGE_TYPES,
  isImageMime,
} from '../config/constants';
import { env } from '../config/env';
import type { DocumentPublicEntity } from '../entities/document.entity';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { createId } from '../utils/id';
import { ensureRelativeStoragePath, sanitizeFilename } from '../utils/path-safe';
import { auditService } from './audit.service';
import { encryptionService } from './encryption.service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toPrismaBytes(buf: Buffer): any {
  return Buffer.from(buf);
}

export class DocumentService {
  async ensureStorageDir(): Promise<void> {
    await fs.mkdir(env.storageDir, { recursive: true });
  }

  async upload(input: {
    apiKeyId: string;
    originalName: string;
    mimeType: string;
    buffer: Buffer;
    ip?: string;
  }): Promise<DocumentPublicEntity> {
    const originalName = sanitizeFilename(input.originalName);
    const ext = path.extname(originalName).toLowerCase();
    const mime = (input.mimeType || 'application/octet-stream').toLowerCase();

    if (input.buffer.length > env.UPLOAD_MAX_BYTES) {
      throw ExceptionFactory.documentTooLarge(env.UPLOAD_MAX_BYTES);
    }

    if (
      !ALLOWED_UPLOAD_EXTENSIONS.has(ext) &&
      !ALLOWED_UPLOAD_MIME_TYPES.has(mime)
    ) {
      throw ExceptionFactory.documentTypeNotAllowed(
        `Extension "${ext}" / MIME "${mime}" is not allowed`,
      );
    }

    const checksumSha256 = createHash('sha256').update(input.buffer).digest('hex');
    const encrypted = encryptionService.encrypt(input.buffer);
    const id = createId();
    const useFilesystem = input.buffer.length > env.DOCUMENT_DB_MAX_BYTES;

    let storagePath: string | null = null;
    // any: Prisma Bytes vs Node Buffer typing (TS 5.x ArrayBufferLike mismatch)
    let contentCiphertext: any = null;
    let contentIv: any = null;
    let contentTag: any = null;
    let storageType: string = STORAGE_TYPES.DB;

    if (useFilesystem) {
      await this.ensureStorageDir();
      const rel = ensureRelativeStoragePath(id);
      const fullPath = path.join(env.storageDir, `${rel}.enc`);
      // Store iv + tag + ciphertext together
      const packed = Buffer.concat([
        Buffer.from([encrypted.iv.length]),
        encrypted.iv,
        Buffer.from([encrypted.tag.length]),
        encrypted.tag,
        encrypted.ciphertext,
      ]);
      await fs.writeFile(fullPath, packed, { mode: 0o600 });
      storagePath = `${rel}.enc`;
      storageType = STORAGE_TYPES.FILESYSTEM;
    } else {
      contentCiphertext = toPrismaBytes(encrypted.ciphertext);
      contentIv = toPrismaBytes(encrypted.iv);
      contentTag = toPrismaBytes(encrypted.tag);
    }

    const created = await prisma.document.create({
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

    await auditService.log({
      apiKeyId: input.apiKeyId,
      action: AUDIT_ACTIONS.DOCUMENT_UPLOAD,
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

  async list(
    apiKeyId: string,
    limit = 50,
    offset = 0,
  ): Promise<{ items: DocumentPublicEntity[]; total: number }> {
    const where = { apiKeyId, deletedAt: null };
    const [rows, total] = await Promise.all([
      prisma.document.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.document.count({ where }),
    ]);
    return { items: rows.map((r) => this.toPublic(r)), total };
  }

  async getOwned(apiKeyId: string, documentId: string) {
    const doc = await prisma.document.findFirst({
      where: { id: documentId, apiKeyId, deletedAt: null },
    });
    if (!doc) {
      throw ExceptionFactory.notFound('Document');
    }
    return doc;
  }

  async getPublic(apiKeyId: string, documentId: string): Promise<DocumentPublicEntity> {
    const doc = await this.getOwned(apiKeyId, documentId);
    return this.toPublic(doc);
  }

  async readDecryptedContent(apiKeyId: string, documentId: string): Promise<Buffer> {
    const doc = await this.getOwned(apiKeyId, documentId);

    if (doc.storageType === STORAGE_TYPES.FILESYSTEM && doc.storagePath) {
      const fullPath = path.join(env.storageDir, path.basename(doc.storagePath));
      const packed = await fs.readFile(fullPath);
      let offset = 0;
      const ivLen = packed[offset++]!;
      const iv = packed.subarray(offset, offset + ivLen);
      offset += ivLen;
      const tagLen = packed[offset++]!;
      const tag = packed.subarray(offset, offset + tagLen);
      offset += tagLen;
      const ciphertext = packed.subarray(offset);
      return encryptionService.decrypt({ ciphertext, iv, tag });
    }

    if (!doc.contentCiphertext || !doc.contentIv || !doc.contentTag) {
      throw ExceptionFactory.internal('Document ciphertext missing');
    }

    return encryptionService.decrypt({
      ciphertext: Buffer.from(doc.contentCiphertext),
      iv: Buffer.from(doc.contentIv),
      tag: Buffer.from(doc.contentTag),
    });
  }

  async softDelete(apiKeyId: string, documentId: string, ip?: string): Promise<void> {
    const doc = await this.getOwned(apiKeyId, documentId);

    await prisma.document.update({
      where: { id: doc.id },
      data: { deletedAt: new Date() },
    });

    if (doc.storageType === STORAGE_TYPES.FILESYSTEM && doc.storagePath) {
      const fullPath = path.join(env.storageDir, path.basename(doc.storagePath));
      await fs.unlink(fullPath).catch(() => undefined);
    }

    await auditService.log({
      apiKeyId,
      action: AUDIT_ACTIONS.DOCUMENT_DELETE,
      resource: 'document',
      resourceId: documentId,
      meta: { originalName: doc.originalName },
      ip,
    });
  }

  async buildContextFromDocuments(
    apiKeyId: string,
    documentIds: string[],
    maxChars: number,
  ): Promise<string> {
    if (documentIds.length === 0) return '';

    const parts: string[] = [];
    let used = 0;

    for (const id of documentIds) {
      const doc = await this.getOwned(apiKeyId, id);
      const remaining = maxChars - used;
      if (remaining <= 0) break;

      const header = `--- Document: ${doc.originalName} (${doc.id}) ---\n`;

      // Images: inject metadata only (no raw binary into prompt)
      if (isImageMime(doc.mimeType)) {
        const meta =
          `[image attachment: name=${doc.originalName}, mime=${doc.mimeType}, ` +
          `size=${doc.sizeBytes} bytes, document_id=${doc.id}, sha256=${doc.checksumSha256}]\n`;
        const chunk =
          header.length + meta.length > remaining
            ? header + meta.slice(0, Math.max(0, remaining - header.length))
            : header + meta;
        parts.push(chunk);
        used += chunk.length;
        continue;
      }

      const buf = await this.readDecryptedContent(apiKeyId, id);
      let text = buf.toString('utf8');
      // Skip clearly binary garbage for context
      if (text.includes('\u0000')) {
        text = `[binary file: ${doc.originalName}, ${doc.sizeBytes} bytes, sha256=${doc.checksumSha256}]`;
      }

      const body =
        header.length + text.length > remaining
          ? text.slice(0, Math.max(0, remaining - header.length)) + '\n...[truncated]'
          : text;

      const chunk = header + body + '\n';
      parts.push(chunk);
      used += chunk.length;
    }

    return parts.join('\n');
  }

  private toPublic(doc: {
    id: string;
    originalName: string;
    mimeType: string;
    sizeBytes: number;
    checksumSha256: string;
    createdAt: Date;
  }): DocumentPublicEntity {
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

export const documentService = new DocumentService();
