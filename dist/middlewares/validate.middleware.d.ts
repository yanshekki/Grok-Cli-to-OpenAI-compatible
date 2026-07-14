import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';
type Target = 'body' | 'query' | 'params';
export declare function validate(schema: ZodSchema, target?: Target): (req: Request, _res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validate.middleware.d.ts.map