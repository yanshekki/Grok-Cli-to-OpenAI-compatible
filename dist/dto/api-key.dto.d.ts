import { z } from 'zod';
export declare const createApiKeySchema: z.ZodObject<{
    name: z.ZodString;
    role: z.ZodDefault<z.ZodOptional<z.ZodEnum<["client", "admin"]>>>;
    mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<["safe", "agent"]>>>;
    rateLimit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    role: "client" | "admin";
    mode: "safe" | "agent";
    rateLimit: number;
}, {
    name: string;
    role?: "client" | "admin" | undefined;
    mode?: "safe" | "agent" | undefined;
    rateLimit?: number | undefined;
}>;
export type CreateApiKeyDto = z.infer<typeof createApiKeySchema>;
export declare const apiKeyIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type ApiKeyIdParamDto = z.infer<typeof apiKeyIdParamSchema>;
//# sourceMappingURL=api-key.dto.d.ts.map