export interface GrokJsonResult {
    text?: string;
    stopReason?: string;
    sessionId?: string;
    requestId?: string;
}
export type GrokStreamEvent = {
    type: 'text';
    data: string;
} | {
    type: 'thought';
    data: string;
} | {
    type: 'end';
    stopReason?: string;
    sessionId?: string;
    requestId?: string;
} | {
    type: string;
    data?: unknown;
    [key: string]: unknown;
};
export interface GrokRunOptions {
    prompt: string;
    model: string;
    cwd: string;
    stream: boolean;
    sessionId?: string;
    timeoutMs?: number;
    alwaysApprove?: boolean;
    maxTurns?: number | null;
    toolsAllowlist?: string | null;
    toolsDenylist?: string | null;
}
export interface GrokRunResult {
    text: string;
    stopReason?: string;
    sessionId?: string;
    raw: GrokJsonResult;
}
//# sourceMappingURL=grok.interface.d.ts.map