"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelsService = exports.ModelsService = void 0;
const constants_1 = require("../config/constants");
const env_1 = require("../config/env");
const exception_factory_1 = require("../exceptions/exception.factory");
const openai_mapper_1 = require("../utils/openai-mapper");
const grok_cli_service_1 = require("./grok-cli.service");
class ModelsService {
    cache = null;
    ttlMs = 5 * 60 * 1000;
    async list() {
        const models = await this.getModelIds();
        return (0, openai_mapper_1.mapModelsList)(models);
    }
    async get(modelId) {
        const models = await this.getModelIds();
        if (!models.includes(modelId)) {
            throw exception_factory_1.ExceptionFactory.notFound('Model');
        }
        return {
            id: modelId,
            object: 'model',
            created: Math.floor(Date.now() / 1000),
            owned_by: 'xai',
        };
    }
    async getModelIds() {
        const now = Date.now();
        if (this.cache && now - this.cache.fetchedAt < this.ttlMs) {
            return this.cache.models;
        }
        const fromCli = await grok_cli_service_1.grokCliService.listModelsFromCli();
        const models = fromCli.length > 0
            ? fromCli
            : Array.from(new Set([env_1.env.GROK_DEFAULT_MODEL, ...constants_1.DEFAULT_MODELS]));
        this.cache = { models, fetchedAt: now };
        return models;
    }
}
exports.ModelsService = ModelsService;
exports.modelsService = new ModelsService();
//# sourceMappingURL=models.service.js.map