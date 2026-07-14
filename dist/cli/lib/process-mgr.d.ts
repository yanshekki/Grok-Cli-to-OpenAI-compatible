import type { RuntimePaths } from './paths';
export declare function readPid(pidFile: string): number | null;
export declare function isProcessRunning(pid: number): boolean;
export declare function writePid(pidFile: string, pid: number): void;
export declare function clearPid(pidFile: string): void;
export declare function startDetached(paths: RuntimePaths, env: NodeJS.ProcessEnv): number;
export declare function stopProcess(pidFile: string, timeoutMs?: number): Promise<boolean>;
//# sourceMappingURL=process-mgr.d.ts.map