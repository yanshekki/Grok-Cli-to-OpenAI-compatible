import { ErrorCodes } from './error-codes';
import { HttpException } from './http.exception';

export const ExceptionFactory = {
  unauthorized(message = 'Invalid or missing API key'): HttpException {
    return new HttpException(401, message, ErrorCodes.UNAUTHORIZED);
  },

  forbidden(message = 'Forbidden'): HttpException {
    return new HttpException(403, message, ErrorCodes.FORBIDDEN);
  },

  notFound(resource = 'Resource'): HttpException {
    return new HttpException(404, `${resource} not found`, ErrorCodes.NOT_FOUND);
  },

  validation(message: string, details?: unknown): HttpException {
    return new HttpException(400, message, ErrorCodes.VALIDATION_ERROR, details);
  },

  rateLimited(message = 'Rate limit exceeded'): HttpException {
    return new HttpException(429, message, ErrorCodes.RATE_LIMITED);
  },

  concurrencyLimit(message = 'Too many concurrent Grok jobs'): HttpException {
    return new HttpException(429, message, ErrorCodes.CONCURRENCY_LIMIT);
  },

  grokError(message: string, details?: unknown): HttpException {
    return new HttpException(502, message, ErrorCodes.GROK_ERROR, details);
  },

  grokTimeout(message = 'Grok CLI timed out'): HttpException {
    return new HttpException(504, message, ErrorCodes.GROK_TIMEOUT);
  },

  grokNotAvailable(message = 'Grok CLI is not available'): HttpException {
    return new HttpException(503, message, ErrorCodes.GROK_NOT_AVAILABLE);
  },

  invalidCwd(message = 'Working directory is not allowed'): HttpException {
    return new HttpException(400, message, ErrorCodes.INVALID_CWD);
  },

  documentTooLarge(maxBytes: number): HttpException {
    return new HttpException(
      413,
      `Document exceeds maximum size of ${maxBytes} bytes`,
      ErrorCodes.DOCUMENT_TOO_LARGE,
    );
  },

  documentTypeNotAllowed(message = 'Document type is not allowed'): HttpException {
    return new HttpException(415, message, ErrorCodes.DOCUMENT_TYPE_NOT_ALLOWED);
  },

  internal(message = 'Internal server error', details?: unknown): HttpException {
    return new HttpException(500, message, ErrorCodes.INTERNAL_ERROR, details);
  },

  serviceUnavailable(message = 'Service unavailable'): HttpException {
    return new HttpException(503, message, ErrorCodes.SERVICE_UNAVAILABLE);
  },
};
