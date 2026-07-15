export type GrokStreamEvent =
  | { type: 'text'; data: string }
  | { type: 'thought'; data: string }
  | { type: 'end'; stopReason?: string; sessionId?: string; requestId?: string }
  | { type: string; data?: unknown; [key: string]: unknown };
