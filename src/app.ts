import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { env } from './config/env';
import { corsOptions } from './config/cors';
import routes from './routes';
import { requestIdMiddleware } from './middlewares/request-id.middleware';
import { globalRateLimiter } from './middlewares/rate-limit.middleware';
import { errorMiddleware, notFoundHandler } from './middlewares/error.middleware';
import { logger } from './utils/logger';
import './interfaces/express.interface';

export function createApp() {
  const app = express();

  if (env.TRUST_PROXY) {
    app.set('trust proxy', 1);
  }

  app.disable('x-powered-by');

  app.use(helmet());
  app.use(cors(corsOptions));
  app.use(requestIdMiddleware);
  app.use(
    pinoHttp({
      logger,
      genReqId: (req) => (req as express.Request).requestId,
      customProps: (req) => ({
        requestId: (req as express.Request).requestId,
      }),
      autoLogging: {
        ignore: (req) => req.url === '/health' || req.url === '/ready',
      },
    }),
  );
  app.use(express.json({ limit: env.BODY_LIMIT }));
  app.use(express.urlencoded({ extended: false, limit: env.BODY_LIMIT }));
  app.use(globalRateLimiter);

  app.use(routes);

  app.use(notFoundHandler);
  app.use(errorMiddleware);

  return app;
}
