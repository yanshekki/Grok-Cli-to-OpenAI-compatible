import { DEFAULT_MODELS } from '../config/constants';
import { env } from '../config/env';
import type { OpenAiModel, OpenAiModelList } from '../interfaces/openai.interface';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { mapModelsList } from '../utils/openai-mapper';
import { grokCliService } from './grok-cli.service';

export class ModelsService {
  private cache: { models: string[]; fetchedAt: number } | null = null;
  private readonly ttlMs = 5 * 60 * 1000;

  async list(): Promise<OpenAiModelList> {
    const models = await this.getModelIds();
    return mapModelsList(models);
  }

  async get(modelId: string): Promise<OpenAiModel> {
    const models = await this.getModelIds();
    if (!models.includes(modelId)) {
      throw ExceptionFactory.notFound('Model');
    }
    return {
      id: modelId,
      object: 'model',
      created: Math.floor(Date.now() / 1000),
      owned_by: 'xai',
    };
  }

  async getModelIds(): Promise<string[]> {
    const now = Date.now();
    if (this.cache && now - this.cache.fetchedAt < this.ttlMs) {
      return this.cache.models;
    }

    const fromCli = await grokCliService.listModelsFromCli();
    const models =
      fromCli.length > 0
        ? fromCli
        : Array.from(new Set([env.GROK_DEFAULT_MODEL, ...DEFAULT_MODELS]));

    this.cache = { models, fetchedAt: now };
    return models;
  }
}

export const modelsService = new ModelsService();
