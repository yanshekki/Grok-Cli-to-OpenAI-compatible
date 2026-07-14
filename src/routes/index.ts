import { Router } from 'express';
import { healthController } from '../controllers/health.controller';
import chatRoutes from './v1/chat.routes';
import modelsRoutes from './v1/models.routes';
import documentsRoutes from './v1/documents.routes';
import apiKeysRoutes from './v1/api-keys.routes';

const router = Router();

router.get('/health', healthController.health);
router.get('/ready', healthController.ready);

router.use('/v1/chat', chatRoutes);
router.use('/v1/models', modelsRoutes);
router.use('/v1/documents', documentsRoutes);
router.use('/v1/api-keys', apiKeysRoutes);

export default router;
