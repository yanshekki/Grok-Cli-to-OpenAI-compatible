import { Router } from 'express';
import { adminController } from '../controllers/admin.controller';
import {
  adminCreateKeySchema,
  adminIdParamSchema,
  adminIpBanSchema,
  adminListQuerySchema,
  adminUpdateKeySchema,
  adminUpdateSettingsSchema,
} from '../dto/admin.dto';
import { requireAdmin, requireApiKey } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validate.middleware';
import { env } from '../config/env';
import { ExceptionFactory } from '../exceptions/exception.factory';
import { settingsService } from '../services/settings.service';
import { asyncHandler } from '../utils/async-handler';

const router = Router();

const ensureAdminPanel = asyncHandler(async (_req, _res, next) => {
  if (!env.ADMIN_PANEL_ENABLED) {
    throw ExceptionFactory.forbidden('Admin panel disabled by env');
  }
  const settings = await settingsService.getAll();
  if (!settings.adminPanelEnabled) {
    throw ExceptionFactory.forbidden('Admin panel disabled in settings');
  }
  next();
});

router.use(ensureAdminPanel);
router.use(requireApiKey);
router.use(requireAdmin);

router.get('/me', adminController.me);
router.get('/stats', adminController.stats);
router.get('/usage', adminController.usage);
router.get('/models', adminController.models);
router.get('/system', adminController.system);
router.get('/system/update-check', adminController.checkUpdate);
router.post('/system/update', adminController.runUpdate);

router.get('/chats', validate(adminListQuerySchema, 'query'), adminController.listChats);
router.get('/chats/:id', validate(adminIdParamSchema, 'params'), adminController.getChat);

router.get('/keys', adminController.listKeys);
router.post('/keys', validate(adminCreateKeySchema, 'body'), adminController.createKey);
router.patch(
  '/keys/:id',
  validate(adminIdParamSchema, 'params'),
  validate(adminUpdateKeySchema, 'body'),
  adminController.updateKey,
);
router.delete(
  '/keys/:id',
  validate(adminIdParamSchema, 'params'),
  adminController.revokeKey,
);

router.get(
  '/documents',
  validate(adminListQuerySchema, 'query'),
  adminController.listDocuments,
);
router.get(
  '/documents/:id',
  validate(adminIdParamSchema, 'params'),
  adminController.getDocument,
);
router.delete(
  '/documents/:id',
  validate(adminIdParamSchema, 'params'),
  adminController.deleteDocument,
);

router.get(
  '/audit-logs',
  validate(adminListQuerySchema, 'query'),
  adminController.listAudit,
);

router.get('/settings', adminController.getSettings);
router.put(
  '/settings',
  validate(adminUpdateSettingsSchema, 'body'),
  adminController.updateSettings,
);

// DDoS control center
router.get('/ddos/connections', adminController.ddosConnections);
router.get('/ddos/blacklist', adminController.ddosBlacklist);
router.get('/ddos/stats', adminController.ddosStats);
router.post(
  '/ddos/blacklist',
  validate(adminIpBanSchema, 'body'),
  adminController.ddosBan,
);
router.delete('/ddos/blacklist/:ip', adminController.ddosUnban);

// PM2 control
router.get('/pm2/status', adminController.pm2Status);
router.post('/pm2/start', adminController.pm2Start);
router.post('/pm2/stop', adminController.pm2Stop);
router.post('/pm2/restart', adminController.pm2Restart);
router.post('/pm2/reload', adminController.pm2Reload);
router.get('/pm2/logs', adminController.pm2Logs);

export default router;
