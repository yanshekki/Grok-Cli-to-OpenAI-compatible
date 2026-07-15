import { prisma } from '../config/database';
import type { AuditLogCreateInput } from '../entities';

export class AuditService {
  async log(input: AuditLogCreateInput): Promise<void> {
    await prisma.auditLog.create({
      data: {
        apiKeyId: input.apiKeyId ?? null,
        action: input.action,
        resource: input.resource ?? null,
        resourceId: input.resourceId ?? null,
        metaJson: input.meta ? JSON.stringify(input.meta) : null,
        ip: input.ip ?? null,
      },
    });
  }
}

export const auditService = new AuditService();
