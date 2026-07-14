import { HttpException } from './http.exception';
export declare const ExceptionFactory: {
    unauthorized(message?: string): HttpException;
    forbidden(message?: string): HttpException;
    notFound(resource?: string): HttpException;
    validation(message: string, details?: unknown): HttpException;
    rateLimited(message?: string): HttpException;
    concurrencyLimit(message?: string): HttpException;
    grokError(message: string, details?: unknown): HttpException;
    grokTimeout(message?: string): HttpException;
    grokNotAvailable(message?: string): HttpException;
    invalidCwd(message?: string): HttpException;
    documentTooLarge(maxBytes: number): HttpException;
    documentTypeNotAllowed(message?: string): HttpException;
    internal(message?: string, details?: unknown): HttpException;
    serviceUnavailable(message?: string): HttpException;
};
//# sourceMappingURL=exception.factory.d.ts.map