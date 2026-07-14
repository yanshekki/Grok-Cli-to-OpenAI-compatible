import path from 'node:path';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { env } from './config/env';
import { corsOptions } from './config/cors';
import routes from './routes';
import adminRoutes from './routes/admin.routes';
import { requestIdMiddleware } from './middlewares/request-id.middleware';
import {
  globalRateLimiter,
  ipBlockMiddleware,
} from './middlewares/rate-limit.middleware';
import { connectionTrackerMiddleware } from './middlewares/connection-tracker';
import { errorMiddleware, notFoundHandler } from './middlewares/error.middleware';
import { logger } from './utils/logger';
import { ipBlacklistService } from './services/ip-blacklist.service';
import './interfaces/express.interface';

export function createApp() {
  // Fire-and-forget load of persistent IP bans
  void ipBlacklistService.ensureLoaded().catch(() => undefined);

  const app = express();

  if (env.TRUST_PROXY) {
    app.set('trust proxy', 1);
  }

  app.disable('x-powered-by');

  app.use(
    helmet({
      contentSecurityPolicy: false, // admin SPA inline styles
    }),
  );
  app.use(cors(corsOptions));
  app.use(requestIdMiddleware);
  app.use(connectionTrackerMiddleware);
  app.use(ipBlockMiddleware);
  app.use(
    pinoHttp({
      logger,
      genReqId: (req) => (req as express.Request).requestId,
      customProps: (req) => ({
        requestId: (req as express.Request).requestId,
      }),
      autoLogging: {
        ignore: (req) =>
          req.url === '/health' ||
          req.url === '/ready' ||
          (req.url?.startsWith('/admin') && !req.url.startsWith('/admin/api')),
      },
    }),
  );
  app.use(express.json({ limit: env.BODY_LIMIT }));
  app.use(express.urlencoded({ extended: false, limit: env.BODY_LIMIT }));
  app.use(globalRateLimiter);

  // Admin JSON API
  app.use('/admin/api', adminRoutes);

  // Admin SPA static files
  const adminDir = path.join(process.cwd(), 'public', 'admin');
  app.use('/admin', express.static(adminDir, { index: 'index.html' }));
  app.get(['/admin', '/admin/*'], (req, res, next) => {
    if (req.path.startsWith('/admin/api')) {
      next();
      return;
    }
    res.sendFile(path.join(adminDir, 'index.html'), (err) => {
      if (err) next();
    });
  });

  app.use(routes);

  app.use(notFoundHandler);
  app.use(errorMiddleware);

  return app;
}
