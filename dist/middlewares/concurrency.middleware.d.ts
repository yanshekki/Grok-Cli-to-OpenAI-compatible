import type { NextFunction, Request, Response } from 'express';
/**
 * Soft check before entering chat handler. Hard acquire still happens in ChatService.
 */
export declare function concurrencyGuard(_req: Request, _res: Response, next: NextFunction): void;
//# sourceMappingURL=concurrency.middleware.d.ts.map