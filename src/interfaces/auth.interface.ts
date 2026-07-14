export type ApiKeyRole = 'client' | 'admin';
export type ApiKeyMode = 'safe' | 'agent';

export interface AuthenticatedApiKey {
  id: string;
  name: string;
  keyPrefix: string;
  role: ApiKeyRole;
  mode: ApiKeyMode;
  rateLimit: number;
  isActive: boolean;
  maxTurns: number | null;
  timeoutMs: number | null;
}
