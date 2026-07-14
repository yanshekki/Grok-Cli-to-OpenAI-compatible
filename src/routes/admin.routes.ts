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
import { ddosPolicyUpdateSchema } from '../dto/ddos.dto';
import { adminPlaygroundChatSchema } from '../dto/chat.dto';
import {
  conversationListQuerySchema,
  createConversationSchema,
  updateConversationSchema,
} from '../dto/conversation.dto';
import { requireAdmin, requireApiKey } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validate.middleware';
import { uploadSingle } from '../middlewares/upload.middleware';
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
// Admin chat playground (select API key by id — no raw secret)
router.post(
  '/chat/completions',
  validate(adminPlaygroundChatSchema, 'body'),
  adminController.playgroundChat,
);
router.post(
  '/documents',
  uploadSingle,
  adminController.playgroundUpload,
);

router.get('/stats', adminController.stats);
router.get('/usage', adminController.usage);
router.get('/models', adminController.models);
router.get('/system', adminController.system);
router.get('/system/update-check', adminController.checkUpdate);
router.post('/system/update', adminController.runUpdate);

router.get('/chats', validate(adminListQuerySchema, 'query'), adminController.listChats);
router.get('/chats/:id', validate(adminIdParamSchema, 'params'), adminController.getChat);

// Playground multi-turn conversation threads
router.get(
  '/conversations',
  validate(conversationListQuerySchema, 'query'),
  adminController.listConversations,
);
router.get(
  '/conversations/:id',
  validate(adminIdParamSchema, 'params'),
  adminController.getConversation,
);
router.post(
  '/conversations',
  validate(createConversationSchema, 'body'),
  adminController.createConversation,
);
router.patch(
  '/conversations/:id',
  validate(adminIdParamSchema, 'params'),
  validate(updateConversationSchema, 'body'),
  adminController.updateConversation,
);
router.delete(
  '/conversations/:id',
  validate(adminIdParamSchema, 'params'),
  adminController.deleteConversation,
);

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
  '/documents/:id/download',
  validate(adminIdParamSchema, 'params'),
  adminController.downloadDocument,
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
router.get('/ddos/policy', adminController.ddosPolicyGet);
router.get('/ddos/events', adminController.ddosEvents);
router.put(
  '/ddos/policy',
  validate(ddosPolicyUpdateSchema, 'body'),
  adminController.ddosPolicyPut,
);
router.post('/ddos/policy/reset', adminController.ddosPolicyReset);
router.post(
  '/ddos/blacklist',
  validate(adminIpBanSchema, 'body'),
  adminController.ddosBan,
);
router.delete('/ddos/blacklist/:ip', adminController.ddosUnban);

// PM2 control + config + runner switch
router.get('/pm2/status', adminController.pm2Status);
router.post('/pm2/start', adminController.pm2Start);
router.post('/pm2/stop', adminController.pm2Stop);
router.post('/pm2/restart', adminController.pm2Restart);
router.post('/pm2/reload', adminController.pm2Reload);
router.get('/pm2/logs', adminController.pm2Logs);
router.post('/pm2/logs/clear', adminController.pm2ClearLogs);
router.get('/pm2/config', adminController.pm2GetConfig);
router.put('/pm2/config', adminController.pm2SaveConfig);
router.post('/pm2/config/reset', adminController.pm2ResetConfig);
router.post('/pm2/switch', adminController.pm2Switch);

export default router;
