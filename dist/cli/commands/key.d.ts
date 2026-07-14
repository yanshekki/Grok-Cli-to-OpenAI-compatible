export declare function cmdKeyCreate(opts: {
    home?: string;
    forceHome?: boolean;
    name?: string;
    role?: string;
    mode?: string;
    rateLimit?: number;
}): Promise<void>;
export declare function cmdKeyList(opts: {
    home?: string;
    forceHome?: boolean;
}): Promise<void>;
export declare function cmdKeyRevoke(opts: {
    home?: string;
    forceHome?: boolean;
    id: string;
}): Promise<void>;
//# sourceMappingURL=key.d.ts.map