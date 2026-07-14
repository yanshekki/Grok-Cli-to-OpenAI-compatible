export declare const ErrorCodes: {
    readonly UNAUTHORIZED: "unauthorized";
    readonly FORBIDDEN: "forbidden";
    readonly NOT_FOUND: "not_found";
    readonly VALIDATION_ERROR: "validation_error";
    readonly RATE_LIMITED: "rate_limit_exceeded";
    readonly CONCURRENCY_LIMIT: "concurrency_limit_exceeded";
    readonly INTERNAL_ERROR: "internal_error";
    readonly GROK_ERROR: "grok_error";
    readonly GROK_TIMEOUT: "grok_timeout";
    readonly GROK_NOT_AVAILABLE: "grok_not_available";
    readonly DOCUMENT_TOO_LARGE: "document_too_large";
    readonly DOCUMENT_TYPE_NOT_ALLOWED: "document_type_not_allowed";
    readonly INVALID_CWD: "invalid_cwd";
    readonly SERVICE_UNAVAILABLE: "service_unavailable";
};
export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
//# sourceMappingURL=error-codes.d.ts.map