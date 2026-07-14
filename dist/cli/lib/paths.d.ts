export declare const PACKAGE_NAME = "grok-cli-to-openai-compatible";
export declare const DEFAULT_PORT = 3847;
/** Installed package root (contains package.json, prisma/, dist/) */
export declare function getPackageRoot(): string;
export declare function getDefaultHome(): string;
export interface RuntimePaths {
    mode: 'home' | 'project';
    home: string;
    packageRoot: string;
    envFile: string;
    dataDir: string;
    storageDir: string;
    logsDir: string;
    pidFile: string;
    databaseUrl: string;
}
/**
 * Prefer project-local data when running inside this repo checkout.
 * Otherwise use ~/.gctoac (or GCTOAC_HOME / --home).
 */
export declare function resolveRuntimePaths(options?: {
    home?: string;
    forceHome?: boolean;
}): RuntimePaths;
export declare function isProjectCheckout(dir: string): boolean;
export declare function ensureHomeDirs(paths: RuntimePaths): void;
//# sourceMappingURL=paths.d.ts.map