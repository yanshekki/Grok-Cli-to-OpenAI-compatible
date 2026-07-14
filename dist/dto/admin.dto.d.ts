import { z } from 'zod';
export declare const adminListQuerySchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    status: z.ZodOptional<z.ZodString>;
    apiKeyId: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    q: z.ZodOptional<z.ZodString>;
    action: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    offset: number;
    status?: string | undefined;
    model?: string | undefined;
    apiKeyId?: string | undefined;
    action?: string | undefined;
    q?: string | undefined;
}, {
    status?: string | undefined;
    model?: string | undefined;
    apiKeyId?: string | undefined;
    action?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    q?: string | undefined;
}>;
export type AdminListQueryDto = z.infer<typeof adminListQuerySchema>;
export declare const adminIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const adminCreateKeySchema: z.ZodObject<{
    name: z.ZodString;
    role: z.ZodDefault<z.ZodOptional<z.ZodEnum<["client", "admin"]>>>;
    mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<["safe", "agent"]>>>;
    rateLimit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    maxTurns: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timeoutMs: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    role: "client" | "admin";
    mode: "safe" | "agent";
    rateLimit: number;
    maxTurns?: number | null | undefined;
    timeoutMs?: number | null | undefined;
}, {
    name: string;
    role?: "client" | "admin" | undefined;
    mode?: "safe" | "agent" | undefined;
    rateLimit?: number | undefined;
    maxTurns?: number | null | undefined;
    timeoutMs?: number | null | undefined;
}>;
export declare const adminUpdateKeySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<["client", "admin"]>>;
    mode: z.ZodOptional<z.ZodEnum<["safe", "agent"]>>;
    rateLimit: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    maxTurns: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timeoutMs: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    role?: "client" | "admin" | undefined;
    mode?: "safe" | "agent" | undefined;
    isActive?: boolean | undefined;
    rateLimit?: number | undefined;
    maxTurns?: number | null | undefined;
    timeoutMs?: number | null | undefined;
}, {
    name?: string | undefined;
    role?: "client" | "admin" | undefined;
    mode?: "safe" | "agent" | undefined;
    isActive?: boolean | undefined;
    rateLimit?: number | undefined;
    maxTurns?: number | null | undefined;
    timeoutMs?: number | null | undefined;
}>;
export declare const adminUpdateSettingsSchema: z.ZodObject<{
    globalSafeMode: z.ZodOptional<z.ZodBoolean>;
    safeMaxTurns: z.ZodOptional<z.ZodNumber>;
    safeTimeoutMs: z.ZodOptional<z.ZodNumber>;
    safeToolsMode: z.ZodOptional<z.ZodEnum<["none", "readonly"]>>;
    defaultModel: z.ZodOptional<z.ZodString>;
    adminPanelEnabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    globalSafeMode?: boolean | undefined;
    safeMaxTurns?: number | undefined;
    safeTimeoutMs?: number | undefined;
    safeToolsMode?: "none" | "readonly" | undefined;
    defaultModel?: string | undefined;
    adminPanelEnabled?: boolean | undefined;
}, {
    globalSafeMode?: boolean | undefined;
    safeMaxTurns?: number | undefined;
    safeTimeoutMs?: number | undefined;
    safeToolsMode?: "none" | "readonly" | undefined;
    defaultModel?: string | undefined;
    adminPanelEnabled?: boolean | undefined;
}>;
//# sourceMappingURL=admin.dto.d.ts.map