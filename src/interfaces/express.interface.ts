import type { AuthenticatedApiKey } from './auth.interface';

declare global {
  namespace Express {
    interface Request {
      requestId: string;
      apiKey?: AuthenticatedApiKey;
    }
  }
}

export {};
