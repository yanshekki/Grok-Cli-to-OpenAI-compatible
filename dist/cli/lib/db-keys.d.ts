export type KeyRole = 'admin' | 'user';
export type KeyMode = 'safe' | 'agent';
export interface CreatedKey {
    id: string;
    name: string;
    role: KeyRole;
    mode: KeyMode;
    keyPrefix: string;
    rawKey: string;
    rateLimit: number;
}
export interface ListedKey {
    id: string;
    name: string;
    role: string;
    mode: string;
    keyPrefix: string;
    isActive: boolean;
    rateLimit: number;
    createdAt: Date;
    lastUsedAt: Date | null;
}
export declare function createKey(options: {
    databaseUrl: string;
    name?: string;
    role?: KeyRole;
    mode?: KeyMode;
    rateLimit?: number;
    rawKey?: string;
}): Promise<CreatedKey>;
export declare function listKeys(databaseUrl: string): Promise<ListedKey[]>;
export declare function revokeKey(databaseUrl: string, id: string): Promise<boolean>;
//# sourceMappingURL=db-keys.d.ts.map