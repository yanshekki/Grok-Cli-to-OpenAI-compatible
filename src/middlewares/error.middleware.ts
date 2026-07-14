import type { NextFunction, Request, Response } from 'express';
import { HttpException, toOpenAiErrorBody } from '../exceptions/http.exception';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { logger } from '../utils/logger';

export function notFoundHandler(req: Request, _res: Response, next: NextFunction): void {
  next(ExceptionFactory.notFound(`Route ${req.method} ${req.path}`));
}

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  // CORS errors from cors package
  if (err instanceof Error && err.message.startsWith('CORS origin not allowed')) {
    const httpErr = ExceptionFactory.forbidden(err.message);
    res.status(httpErr.statusCode).json(toOpenAiErrorBody(httpErr));
    return;
  }

  if (err instanceof HttpException) {
    if (err.statusCode >= 500) {
      logger.error(
        { err, requestId: req.requestId, path: req.path },
        err.message,
      );
    } else {
      logger.warn(
        { code: err.code, requestId: req.requestId, path: req.path },
        err.message,
      );
    }

    if (res.headersSent) {
      return;
    }

    res.status(err.statusCode).json(toOpenAiErrorBody(err));
    return;
  }

  logger.error({ err, requestId: req.requestId, path: req.path }, 'Unhandled error');

  if (res.headersSent) {
    return;
  }

  const httpErr = ExceptionFactory.internal();
  res.status(httpErr.statusCode).json(toOpenAiErrorBody(httpErr));
}
