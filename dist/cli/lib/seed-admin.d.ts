export interface SeedAdminResult {
    created: boolean;
    id: string;
    name: string;
    keyPrefix: string;
    /** Plaintext only when a new key was created */
    rawKey?: string;
}
/**
 * Seed bootstrap admin API key using PrismaClient directly (no tsx / npx).
 */
export declare function seedAdmin(options?: {
    databaseUrl?: string;
    bootstrapKey?: string;
    port?: string | number;
}): Promise<SeedAdminResult>;
//# sourceMappingURL=seed-admin.d.ts.map