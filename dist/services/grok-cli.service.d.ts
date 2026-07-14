import type { GrokJsonResult, GrokRunOptions, GrokRunResult, GrokStreamEvent } from '../interfaces/grok.interface';
export declare class GrokCliService {
    private active;
    get activeCount(): number;
    get maxConcurrent(): number;
    tryAcquire(): boolean;
    release(): void;
    buildArgs(options: GrokRunOptions): string[];
    runOnce(options: GrokRunOptions): Promise<GrokRunResult>;
    stream(options: GrokRunOptions): AsyncGenerator<GrokStreamEvent>;
    isAvailable(): Promise<boolean>;
    listModelsFromCli(): Promise<string[]>;
    parseModelsOutput(stdout: string): string[];
    parseJsonResult(stdout: string): GrokJsonResult;
    private sanitizedEnv;
}
export declare const grokCliService: GrokCliService;
//# sourceMappingURL=grok-cli.service.d.ts.map