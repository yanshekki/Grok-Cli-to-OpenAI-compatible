import { createApp } from './app';
import { env } from './config/env';
import { disconnectDatabase, prisma } from './config/database';
import { documentService } from './services/document.service';
import { logger } from './utils/logger';

async function bootstrap(): Promise<void> {
  await documentService.ensureStorageDir();

  // Fail fast if DB is unreachable
  await prisma.$connect();
  logger.info('Database connected');

  const app = createApp();
  const server = app.listen(env.PORT, env.HOST, () => {
    logger.info(
      { host: env.HOST, port: env.PORT, env: env.NODE_ENV },
      'Grok OpenAI-compatible gateway listening',
    );
  });

  const shutdown = async (signal: string) => {
    logger.info({ signal }, 'Shutting down');
    server.close(async () => {
      try {
        await disconnectDatabase();
        logger.info('Shutdown complete');
        process.exit(0);
      } catch (err) {
        logger.error({ err }, 'Error during shutdown');
        process.exit(1);
      }
    });

    setTimeout(() => {
      logger.error('Forced shutdown after timeout');
      process.exit(1);
    }, 15_000).unref();
  };

  process.on('SIGTERM', () => void shutdown('SIGTERM'));
  process.on('SIGINT', () => void shutdown('SIGINT'));
}

bootstrap().catch((err) => {
  logger.fatal({ err }, 'Failed to start server');
  process.exit(1);
});
