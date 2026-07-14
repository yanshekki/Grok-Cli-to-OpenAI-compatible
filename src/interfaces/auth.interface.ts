export type ApiKeyRole = 'client' | 'admin';

export interface AuthenticatedApiKey {
  id: string;
  name: string;
  keyPrefix: string;
  role: ApiKeyRole;
  rateLimit: number;
  isActive: boolean;
}
