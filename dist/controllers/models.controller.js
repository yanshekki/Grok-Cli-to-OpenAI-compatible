"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelsController = exports.ModelsController = void 0;
const models_service_1 = require("../services/models.service");
const async_handler_1 = require("../utils/async-handler");
class ModelsController {
    list = (0, async_handler_1.asyncHandler)(async (_req, res) => {
        const body = await models_service_1.modelsService.list();
        res.status(200).json(body);
    });
    get = (0, async_handler_1.asyncHandler)(async (req, res) => {
        const model = await models_service_1.modelsService.get(String(req.params.model));
        res.status(200).json(model);
    });
}
exports.ModelsController = ModelsController;
exports.modelsController = new ModelsController();
//# sourceMappingURL=models.controller.js.map