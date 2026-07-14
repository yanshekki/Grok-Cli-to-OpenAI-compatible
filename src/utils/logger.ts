import pino from 'pino';
import { env } from '../config/env';

export const logger = pino({
  level: env.LOG_LEVEL,
  transport:
    env.isDev
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
          },
        }
      : undefined,
  base: { service: 'grok-openai-gateway' },
  redact: {
    paths: [
      'req.headers.authorization',
      'apiKey',
      'api_key',
      'key',
      'password',
      'ENCRYPTION_KEY',
    ],
    remove: true,
  },
});
