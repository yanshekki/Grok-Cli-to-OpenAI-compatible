"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./config/env");
const database_1 = require("./config/database");
const document_service_1 = require("./services/document.service");
const logger_1 = require("./utils/logger");
async function bootstrap() {
    await document_service_1.documentService.ensureStorageDir();
    // Fail fast if DB is unreachable
    await database_1.prisma.$connect();
    logger_1.logger.info('Database connected');
    const app = (0, app_1.createApp)();
    const server = app.listen(env_1.env.PORT, env_1.env.HOST, () => {
        logger_1.logger.info({ host: env_1.env.HOST, port: env_1.env.PORT, env: env_1.env.NODE_ENV }, 'Grok OpenAI-compatible gateway listening');
    });
    const shutdown = async (signal) => {
        logger_1.logger.info({ signal }, 'Shutting down');
        server.close(async () => {
            try {
                await (0, database_1.disconnectDatabase)();
                logger_1.logger.info('Shutdown complete');
                process.exit(0);
            }
            catch (err) {
                logger_1.logger.error({ err }, 'Error during shutdown');
                process.exit(1);
            }
        });
        setTimeout(() => {
            logger_1.logger.error('Forced shutdown after timeout');
            process.exit(1);
        }, 15_000).unref();
    };
    process.on('SIGTERM', () => void shutdown('SIGTERM'));
    process.on('SIGINT', () => void shutdown('SIGINT'));
}
bootstrap().catch((err) => {
    logger_1.logger.fatal({ err }, 'Failed to start server');
    process.exit(1);
});
//# sourceMappingURL=server.js.map