import type { RuntimePaths } from './paths';
export declare function readEnvFile(filePath: string): Record<string, string>;
export declare function writeEnvFile(filePath: string, vars: Record<string, string>): void;
export declare function upsertEnvFile(filePath: string, updates: Record<string, string>): Record<string, string>;
export declare function ensureEnvFile(paths: RuntimePaths, port?: number): Record<string, string>;
export declare function loadEnvIntoProcess(filePath: string): void;
//# sourceMappingURL=env-file.d.ts.map