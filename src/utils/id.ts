import { randomBytes, randomUUID } from 'node:crypto';

export function createId(): string {
  return randomUUID();
}

export function createRequestId(): string {
  return `req_${randomBytes(12).toString('hex')}`;
}

export function createChatCompletionId(): string {
  return `chatcmpl_${randomBytes(12).toString('hex')}`;
}

export function createApiKeySecret(): string {
  return `gk_live_${randomBytes(24).toString('base64url')}`;
}

export function apiKeyPrefix(rawKey: string): string {
  return rawKey.slice(0, 16);
}
