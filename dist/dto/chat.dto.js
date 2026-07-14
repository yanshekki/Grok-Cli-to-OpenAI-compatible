"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChatCompletionSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../config/constants");
const messageContentSchema = zod_1.z.union([
    zod_1.z.string().max(constants_1.MAX_MESSAGE_CHARS),
    zod_1.z.array(zod_1.z.record(zod_1.z.unknown())).transform((parts) => {
        return parts
            .map((p) => {
            if (typeof p === 'object' && p && 'text' in p && typeof p.text === 'string') {
                return p.text;
            }
            if (typeof p === 'object' && p && 'type' in p && p.type === 'text' && 'text' in p) {
                return String(p.text);
            }
            return '';
        })
            .join('\n');
    }),
    zod_1.z.null().transform(() => ''),
]);
exports.createChatCompletionSchema = zod_1.z.object({
    model: zod_1.z.string().min(1).max(128).optional(),
    messages: zod_1.z
        .array(zod_1.z.object({
        role: zod_1.z.string().min(1).max(32),
        content: messageContentSchema,
        name: zod_1.z.string().max(64).optional(),
    }))
        .min(1)
        .max(constants_1.MAX_MESSAGES),
    stream: zod_1.z.boolean().optional().default(false),
    temperature: zod_1.z.number().min(0).max(2).optional(),
    max_tokens: zod_1.z.number().int().positive().optional(),
    top_p: zod_1.z.number().min(0).max(1).optional(),
    n: zod_1.z.number().int().positive().max(1).optional(),
    stop: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    user: zod_1.z.string().max(128).optional(),
    cwd: zod_1.z.string().max(1024).optional(),
    session_id: zod_1.z.string().max(128).optional(),
    document_ids: zod_1.z.array(zod_1.z.string().uuid()).max(constants_1.MAX_DOCUMENTS_PER_CHAT).optional(),
    /**
     * Include chain-of-thought as DeepSeek-compatible `reasoning_content`
     * (and Grok alias `thought`). Default true.
     */
    include_reasoning: zod_1.z.boolean().optional().default(true),
});
//# sourceMappingURL=chat.dto.js.map