import type { ErrorCode } from './error-codes';
import { ErrorCodes } from './error-codes';

export class HttpException extends Error {
  readonly statusCode: number;
  readonly code: ErrorCode;
  readonly details?: unknown;
  readonly type: string;

  constructor(
    statusCode: number,
    message: string,
    code: ErrorCode = ErrorCodes.INTERNAL_ERROR,
    details?: unknown,
  ) {
    super(message);
    this.name = 'HttpException';
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.type = mapType(statusCode);
  }
}

function mapType(statusCode: number): string {
  if (statusCode === 401) return 'invalid_request_error';
  if (statusCode === 403) return 'invalid_request_error';
  if (statusCode === 404) return 'invalid_request_error';
  if (statusCode === 429) return 'rate_limit_error';
  if (statusCode >= 500) return 'server_error';
  return 'invalid_request_error';
}

export function toOpenAiErrorBody(err: HttpException): {
  error: {
    message: string;
    type: string;
    code: string;
    param: null;
    details?: unknown;
  };
} {
  return {
    error: {
      message: err.message,
      type: err.type,
      code: err.code,
      param: null,
      ...(err.details !== undefined ? { details: err.details } : {}),
    },
  };
}
