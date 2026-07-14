"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGrokToChatCompletion = mapGrokToChatCompletion;
exports.mapTextDeltaChunk = mapTextDeltaChunk;
exports.mapReasoningDeltaChunk = mapReasoningDeltaChunk;
exports.mapRoleChunk = mapRoleChunk;
exports.mapFinishChunk = mapFinishChunk;
exports.mapModelsList = mapModelsList;
exports.messagesToPrompt = messagesToPrompt;
const id_1 = require("./id");
function mapGrokToChatCompletion(model, result, options = {}) {
    const completionId = options.completionId ?? (0, id_1.createChatCompletionId)();
    const includeReasoning = options.includeReasoning !== false;
    const reasoning = includeReasoning && options.reasoningContent
        ? options.reasoningContent
        : null;
    const message = {
        role: 'assistant',
        content: result.text ?? '',
    };
    if (includeReasoning && reasoning) {
        message.reasoning_content = reasoning;
        message.thought = reasoning; // Grok alias
    }
    else if (includeReasoning) {
        message.reasoning_content = null;
        message.thought = null;
    }
    const finishReason = mapStopReason(result.stopReason ?? options.grok?.stopReason);
    const response = {
        id: completionId,
        object: 'chat.completion',
        created: Math.floor(Date.now() / 1000),
        model,
        choices: [
            {
                index: 0,
                message,
                finish_reason: finishReason,
                logprobs: null,
            },
        ],
        usage: {
            prompt_tokens: 0,
            completion_tokens: 0,
            total_tokens: 0,
        },
    };
    const grok = buildGrokMeta(result, options.grok);
    if (grok) {
        response.grok = grok;
    }
    return response;
}
function mapTextDeltaChunk(model, content, completionId, created) {
    return {
        id: completionId,
        object: 'chat.completion.chunk',
        created,
        model,
        choices: [
            {
                index: 0,
                delta: { content },
                finish_reason: null,
            },
        ],
    };
}
/**
 * DeepSeek-compatible reasoning stream chunk.
 * Also sets Grok alias `thought` to the same string.
 */
function mapReasoningDeltaChunk(model, reasoningContent, completionId, created, includeGrokAlias = true) {
    const delta = {
        reasoning_content: reasoningContent,
    };
    if (includeGrokAlias) {
        delta.thought = reasoningContent;
    }
    return {
        id: completionId,
        object: 'chat.completion.chunk',
        created,
        model,
        choices: [
            {
                index: 0,
                delta,
                finish_reason: null,
            },
        ],
    };
}
function mapRoleChunk(model, completionId, created) {
    return {
        id: completionId,
        object: 'chat.completion.chunk',
        created,
        model,
        choices: [
            {
                index: 0,
                delta: { role: 'assistant', content: '' },
                finish_reason: null,
            },
        ],
    };
}
function mapFinishChunk(model, completionId, created, stopReason, grok) {
    const chunk = {
        id: completionId,
        object: 'chat.completion.chunk',
        created,
        model,
        choices: [
            {
                index: 0,
                delta: {},
                finish_reason: mapStopReason(stopReason),
            },
        ],
    };
    if (grok && (grok.sessionId || grok.stopReason || grok.requestId)) {
        chunk.grok = grok;
    }
    return chunk;
}
function mapModelsList(models) {
    const data = models.map((id) => ({
        id,
        object: 'model',
        created: Math.floor(Date.now() / 1000),
        owned_by: 'xai',
    }));
    return { object: 'list', data };
}
function mapStopReason(stopReason) {
    if (!stopReason)
        return 'stop';
    const lower = stopReason.toLowerCase();
    if (lower.includes('length') || lower.includes('max'))
        return 'length';
    if (lower.includes('filter') || lower.includes('content'))
        return 'content_filter';
    return 'stop';
}
function buildGrokMeta(result, extra) {
    const meta = {
        sessionId: extra?.sessionId ?? result.sessionId,
        stopReason: extra?.stopReason ?? result.stopReason,
        requestId: extra?.requestId ?? result.requestId,
    };
    if (!meta.sessionId && !meta.stopReason && !meta.requestId) {
        return undefined;
    }
    return meta;
}
/**
 * Build prompt from messages.
 * Multi-turn: uses role + content only (DeepSeek-style: prior reasoning_content not required).
 * If an assistant message only has reasoning_content, it is ignored unless content is empty
 * and we fall back (should not normally happen).
 */
function messagesToPrompt(messages) {
    if (messages.length === 1) {
        return messages[0]?.content ?? '';
    }
    return messages
        .map((m) => {
        // Mainstream: only final answer content participates in context
        return `${m.role}: ${m.content}`;
    })
        .join('\n');
}
//# sourceMappingURL=openai-mapper.js.map