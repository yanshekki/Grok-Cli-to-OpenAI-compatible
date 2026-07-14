import { z } from 'zod';
export declare const createChatCompletionSchema: z.ZodObject<{
    model: z.ZodOptional<z.ZodString>;
    messages: z.ZodArray<z.ZodObject<{
        role: z.ZodString;
        content: z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">, string, Record<string, unknown>[]>, z.ZodEffects<z.ZodNull, string, null>]>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        role: string;
        content: string;
        name?: string | undefined;
    }, {
        role: string;
        content: string | Record<string, unknown>[] | null;
        name?: string | undefined;
    }>, "many">;
    stream: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    max_tokens: z.ZodOptional<z.ZodNumber>;
    top_p: z.ZodOptional<z.ZodNumber>;
    n: z.ZodOptional<z.ZodNumber>;
    stop: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    user: z.ZodOptional<z.ZodString>;
    cwd: z.ZodOptional<z.ZodString>;
    session_id: z.ZodOptional<z.ZodString>;
    document_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * Include chain-of-thought as DeepSeek-compatible `reasoning_content`
     * (and Grok alias `thought`). Default true.
     */
    include_reasoning: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    stream: boolean;
    messages: {
        role: string;
        content: string;
        name?: string | undefined;
    }[];
    include_reasoning: boolean;
    model?: string | undefined;
    cwd?: string | undefined;
    temperature?: number | undefined;
    max_tokens?: number | undefined;
    top_p?: number | undefined;
    n?: number | undefined;
    stop?: string | string[] | undefined;
    user?: string | undefined;
    session_id?: string | undefined;
    document_ids?: string[] | undefined;
}, {
    messages: {
        role: string;
        content: string | Record<string, unknown>[] | null;
        name?: string | undefined;
    }[];
    model?: string | undefined;
    stream?: boolean | undefined;
    cwd?: string | undefined;
    temperature?: number | undefined;
    max_tokens?: number | undefined;
    top_p?: number | undefined;
    n?: number | undefined;
    stop?: string | string[] | undefined;
    user?: string | undefined;
    session_id?: string | undefined;
    document_ids?: string[] | undefined;
    include_reasoning?: boolean | undefined;
}>;
export type CreateChatCompletionDto = z.infer<typeof createChatCompletionSchema>;
//# sourceMappingURL=chat.dto.d.ts.map