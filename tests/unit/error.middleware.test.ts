import { describe, expect, it, vi } from 'vitest';
import type { NextFunction, Request, Response } from 'express';
import multer from 'multer';
import { errorMiddleware } from '../../src/middlewares/error.middleware';
import { ErrorCodes } from '../../src/exceptions/error-codes';

function mockReq(): Request {
  return {
    originalUrl: '/v1/documents',
    url: '/v1/documents',
    path: '/v1/documents',
  } as Request;
}

function mockRes() {
  const res = {
    headersSent: false,
    statusCode: 0,
    body: undefined as unknown,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(body: unknown) {
      this.body = body;
      return this;
    },
  };
  return res;
}

describe('errorMiddleware multer', () => {
  it('maps LIMIT_FILE_SIZE to 413 document_too_large', () => {
    const res = mockRes();
    errorMiddleware(
      new multer.MulterError('LIMIT_FILE_SIZE', 'file'),
      mockReq(),
      res as unknown as Response,
      vi.fn() as unknown as NextFunction,
    );
    expect(res.statusCode).toBe(413);
    const body = res.body as { error: { code: string } };
    expect(body.error.code).toBe(ErrorCodes.DOCUMENT_TOO_LARGE);
  });

  it('maps LIMIT_UNEXPECTED_FILE to 400 validation_error', () => {
    const res = mockRes();
    errorMiddleware(
      new multer.MulterError('LIMIT_UNEXPECTED_FILE', 'image'),
      mockReq(),
      res as unknown as Response,
      vi.fn() as unknown as NextFunction,
    );
    expect(res.statusCode).toBe(400);
    const body = res.body as { error: { code: string } };
    expect(body.error.code).toBe(ErrorCodes.VALIDATION_ERROR);
  });
});
