export type AppSettings = {
    globalSafeMode: boolean;
    safeMaxTurns: number;
    safeTimeoutMs: number;
    safeToolsMode: 'none' | 'readonly';
    defaultModel: string;
    adminPanelEnabled: boolean;
};
export declare class SettingsService {
    getAll(): Promise<AppSettings>;
    update(partial: Partial<AppSettings>): Promise<AppSettings>;
}
export declare const settingsService: SettingsService;
//# sourceMappingURL=settings.service.d.ts.map