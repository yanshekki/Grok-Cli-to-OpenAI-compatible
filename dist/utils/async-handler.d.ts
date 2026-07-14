import type { NextFunction, Request, RequestHandler, Response } from 'express';
type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;
export declare function asyncHandler(fn: AsyncRequestHandler): RequestHandler;
export {};
//# sourceMappingURL=async-handler.d.ts.map