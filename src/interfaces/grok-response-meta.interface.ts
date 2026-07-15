/** Grok-native metadata (extension; ignored by standard OpenAI clients) */
export interface GrokResponseMeta {
  sessionId?: string;
  stopReason?: string;
  requestId?: string;
}
