import type { DocumentPublicEntity } from '../entities/document.entity';
export declare class DocumentService {
    ensureStorageDir(): Promise<void>;
    upload(input: {
        apiKeyId: string;
        originalName: string;
        mimeType: string;
        buffer: Buffer;
        ip?: string;
    }): Promise<DocumentPublicEntity>;
    list(apiKeyId: string, limit?: number, offset?: number): Promise<{
        items: DocumentPublicEntity[];
        total: number;
    }>;
    getOwned(apiKeyId: string, documentId: string): Promise<{
        id: string;
        createdAt: Date;
        apiKeyId: string;
        originalName: string;
        mimeType: string;
        sizeBytes: number;
        storageType: string;
        contentCiphertext: import("@prisma/client/runtime/library").Bytes | null;
        contentIv: import("@prisma/client/runtime/library").Bytes | null;
        contentTag: import("@prisma/client/runtime/library").Bytes | null;
        storagePath: string | null;
        checksumSha256: string;
        deletedAt: Date | null;
    }>;
    getPublic(apiKeyId: string, documentId: string): Promise<DocumentPublicEntity>;
    readDecryptedContent(apiKeyId: string, documentId: string): Promise<Buffer>;
    softDelete(apiKeyId: string, documentId: string, ip?: string): Promise<void>;
    buildContextFromDocuments(apiKeyId: string, documentIds: string[], maxChars: number): Promise<string>;
    private toPublic;
}
export declare const documentService: DocumentService;
//# sourceMappingURL=document.service.d.ts.map