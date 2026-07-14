import { z } from 'zod';
export declare const listDocumentsSchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    offset: number;
}, {
    limit?: number | undefined;
    offset?: number | undefined;
}>;
export type ListDocumentsDto = z.infer<typeof listDocumentsSchema>;
export declare const documentIdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DocumentIdParamDto = z.infer<typeof documentIdParamSchema>;
//# sourceMappingURL=document.dto.d.ts.map