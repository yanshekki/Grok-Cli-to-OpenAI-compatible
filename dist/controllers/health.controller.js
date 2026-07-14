"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthController = exports.HealthController = void 0;
const database_1 = require("../config/database");
const grok_cli_service_1 = require("../services/grok-cli.service");
const async_handler_1 = require("../utils/async-handler");
class HealthController {
    health = (0, async_handler_1.asyncHandler)(async (_req, res) => {
        res.status(200).json({
            status: 'ok',
            service: 'grok-openai-gateway',
            timestamp: new Date().toISOString(),
        });
    });
    ready = (0, async_handler_1.asyncHandler)(async (_req, res) => {
        let dbOk = false;
        let grokOk = false;
        try {
            await database_1.prisma.$queryRaw `SELECT 1`;
            dbOk = true;
        }
        catch {
            dbOk = false;
        }
        grokOk = await grok_cli_service_1.grokCliService.isAvailable();
        const ready = dbOk;
        res.status(ready ? 200 : 503).json({
            status: ready ? 'ready' : 'not_ready',
            checks: {
                database: dbOk ? 'up' : 'down',
                grok_cli: grokOk ? 'up' : 'down',
            },
            timestamp: new Date().toISOString(),
        });
    });
}
exports.HealthController = HealthController;
exports.healthController = new HealthController();
//# sourceMappingURL=health.controller.js.map