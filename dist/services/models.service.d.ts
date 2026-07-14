import type { OpenAiModel, OpenAiModelList } from '../interfaces/openai.interface';
export declare class ModelsService {
    private cache;
    private readonly ttlMs;
    list(): Promise<OpenAiModelList>;
    get(modelId: string): Promise<OpenAiModel>;
    getModelIds(): Promise<string[]>;
}
export declare const modelsService: ModelsService;
//# sourceMappingURL=models.service.d.ts.map