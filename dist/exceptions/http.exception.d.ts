import type { ErrorCode } from './error-codes';
export declare class HttpException extends Error {
    readonly statusCode: number;
    readonly code: ErrorCode;
    readonly details?: unknown;
    readonly type: string;
    constructor(statusCode: number, message: string, code?: ErrorCode, details?: unknown);
}
export declare function toOpenAiErrorBody(err: HttpException): {
    error: {
        message: string;
        type: string;
        code: string;
        param: null;
        details?: unknown;
    };
};
//# sourceMappingURL=http.exception.d.ts.map