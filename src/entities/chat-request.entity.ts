export type ChatRequestStatus = 'pending' | 'success' | 'error' | 'timeout';

export interface ChatRequestEntity {
  id: string;
  requestId: string;
  apiKeyId: string;
  model: string;
  stream: boolean;
  status: ChatRequestStatus;
  durationMs: number | null;
  grokSessionId: string | null;
  errorMessage: string | null;
  ip: string | null;
  userAgent: string | null;
  createdAt: Date;
}

export interface EncryptedPayload {
  ciphertext: Buffer;
  iv: Buffer;
  tag: Buffer;
}
