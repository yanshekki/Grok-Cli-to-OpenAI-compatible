import type { ApiKeyRole } from '../interfaces/auth.interface';

export interface ApiKeyEntity {
  id: string;
  name: string;
  keyPrefix: string;
  keyHash: string;
  role: ApiKeyRole;
  isActive: boolean;
  rateLimit: number;
  createdAt: Date;
  lastUsedAt: Date | null;
}

export interface ApiKeyPublicEntity {
  id: string;
  name: string;
  keyPrefix: string;
  role: ApiKeyRole;
  isActive: boolean;
  rateLimit: number;
  createdAt: Date;
  lastUsedAt: Date | null;
}

export interface ApiKeyCreatedEntity extends ApiKeyPublicEntity {
  /** Plaintext key — only returned once at creation time */
  key: string;
}
