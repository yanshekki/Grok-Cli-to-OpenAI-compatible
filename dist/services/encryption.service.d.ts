import type { EncryptedPayload } from '../entities/chat-request.entity';
export declare class EncryptionService {
    encrypt(plaintext: string | Buffer): EncryptedPayload;
    decrypt(payload: EncryptedPayload): Buffer;
    decryptToString(payload: EncryptedPayload): string;
}
export declare const encryptionService: EncryptionService;
//# sourceMappingURL=encryption.service.d.ts.map