import type { ApiKeyCreatedEntity, ApiKeyPublicEntity } from '../entities/api-key.entity';
import type { AuthenticatedApiKey, ApiKeyMode, ApiKeyRole } from '../interfaces/auth.interface';
declare function hashApiKey(rawKey: string): string;
declare function verifyApiKey(rawKey: string, keyHash: string): boolean;
export declare function scryptHash(rawKey: string, salt?: NonSharedBuffer): string;
export declare class ApiKeyService {
    authenticate(rawKey: string): Promise<AuthenticatedApiKey>;
    create(input: {
        name: string;
        role?: ApiKeyRole;
        mode?: ApiKeyMode;
        rateLimit?: number;
        maxTurns?: number | null;
        timeoutMs?: number | null;
        actorApiKeyId?: string;
        ip?: string;
        rawKey?: string;
    }): Promise<ApiKeyCreatedEntity>;
    list(): Promise<ApiKeyPublicEntity[]>;
    update(id: string, input: {
        name?: string;
        role?: ApiKeyRole;
        mode?: ApiKeyMode;
        rateLimit?: number;
        isActive?: boolean;
        maxTurns?: number | null;
        timeoutMs?: number | null;
    }, actorApiKeyId: string, ip?: string): Promise<ApiKeyPublicEntity>;
    revoke(id: string, actorApiKeyId: string, ip?: string): Promise<void>;
}
export declare const apiKeyService: ApiKeyService;
export { hashApiKey, verifyApiKey };
//# sourceMappingURL=api-key.service.d.ts.map