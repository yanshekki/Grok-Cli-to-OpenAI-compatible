/** Aggregated stream/non-stream output used when auditing chat results. */
export interface GrokCollectedOutput {
  text: string;
  reasoning: string;
  sessionId?: string;
  stopReason?: string;
  requestId?: string;
}
