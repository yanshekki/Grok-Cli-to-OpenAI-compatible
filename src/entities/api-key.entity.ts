import type { ApiKeyMode, ApiKeyRole } from '../interfaces/auth.interface';

export interface ApiKeyEntity {
  id: string;
  name: string;
  keyPrefix: string;
  keyHash: string;
  role: ApiKeyRole;
  mode: ApiKeyMode;
  isActive: boolean;
  rateLimit: number;
  maxTurns: number | null;
  timeoutMs: number | null;
  createdAt: Date;
  lastUsedAt: Date | null;
}

export interface ApiKeyPublicEntity {
  id: string;
  name: string;
  keyPrefix: string;
  role: ApiKeyRole;
  mode: ApiKeyMode;
  isActive: boolean;
  rateLimit: number;
  maxTurns: number | null;
  timeoutMs: number | null;
  /** Empty = allow all IPs */
  ipWhitelist: string[];
  createdAt: Date;
  lastUsedAt: Date | null;
}

export interface ApiKeyCreatedEntity extends ApiKeyPublicEntity {
  /** Plaintext key — only returned once at creation time */
  key: string;
}
