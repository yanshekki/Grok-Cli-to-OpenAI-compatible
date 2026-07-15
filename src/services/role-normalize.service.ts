import { prisma } from '../config/database';
import { ROLES } from '../config/constants';
import { logger } from '../utils/logger';

/**
 * Normalize legacy / CLI role aliases to canonical ROLES values.
 * Historically CLI wrote `user` while API uses `client`.
 */
export function normalizeApiKeyRole(role: string | null | undefined): string {
  const r = String(role || '')
    .trim()
    .toLowerCase();
  if (r === 'user' || r === 'client') return ROLES.CLIENT;
  if (r === 'admin') return ROLES.ADMIN;
  return r || ROLES.CLIENT;
}

/** One-shot DB fix: role=user → client */
export async function backfillApiKeyRoles(): Promise<number> {
  const result = await prisma.apiKey.updateMany({
    where: { role: 'user' },
    data: { role: ROLES.CLIENT },
  });
  if (result.count > 0) {
    logger.info({ count: result.count }, 'Backfilled api_keys.role user → client');
  }
  return result.count;
}
