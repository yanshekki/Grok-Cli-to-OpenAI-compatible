export declare const GITHUB_REPO = "yanshekki/Grok-Cli-to-OpenAI-compatible";
export declare const NPM_PACKAGE = "grok-cli-to-openai-compatible";
export type InstallChannel = 'git' | 'npm-global' | 'npm-local' | 'unknown';
export interface VersionInfo {
    current: string;
    latestNpm: string | null;
    latestGithub: string | null;
    latest: string | null;
    updateAvailable: boolean;
    channel: InstallChannel;
    packageRoot: string;
    installSource: string;
}
export interface UpdateResult {
    ok: boolean;
    channel: InstallChannel;
    fromVersion: string;
    toVersion: string | null;
    log: string[];
    restartRequired: boolean;
    message: string;
}
export declare class UpdateService {
    private updating;
    isUpdating(): boolean;
    getVersionInfo(): Promise<VersionInfo>;
    performUpdate(options?: {
        channel?: InstallChannel | 'auto';
        skipMigrate?: boolean;
    }): Promise<UpdateResult>;
    /**
     * Run update then restart detached process (used by admin one-click).
     * Spawns a short-lived shell so the HTTP response can return first.
     */
    scheduleUpdateAndRestart(options?: {
        home?: string;
        port?: number;
    }): {
        scheduled: true;
        message: string;
    };
}
export declare const updateService: UpdateService;
//# sourceMappingURL=update.service.d.ts.map