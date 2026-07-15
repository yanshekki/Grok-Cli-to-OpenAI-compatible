import type { Request, Response } from 'express';
import { prisma } from '../../config/database';
import type { AdminListQueryDto } from '../../dto/admin.dto';
import { asyncHandler } from '../../utils/async-handler';

/** Admin handlers: audit */
export const adminAuditHandlers = {
  listAudit: asyncHandler(async (req: Request, res: Response) => {
    const query = req.query as unknown as AdminListQueryDto & {
      resource?: string;
    };
    const where: Record<string, unknown> = {};
    if (query.action) where.action = query.action;
    if (query.resource) where.resource = query.resource;
    if (query.apiKeyId) where.apiKeyId = query.apiKeyId;
    const createdAt: { gte?: Date; lte?: Date } = {};
    if (query.from) {
      const d = new Date(query.from);
      if (!Number.isNaN(d.getTime())) createdAt.gte = d;
    }
    if (query.to) {
      const d = new Date(query.to);
      if (!Number.isNaN(d.getTime())) createdAt.lte = d;
    }
    if (Object.keys(createdAt).length) where.createdAt = createdAt;
    const q = query.q?.trim();
    if (q) {
      where.OR = [
        { action: { contains: q } },
        { resource: { contains: q } },
        { resourceId: { contains: q } },
        { ip: { contains: q } },
        { apiKey: { name: { contains: q } } },
        { apiKey: { keyPrefix: { contains: q } } },
      ];
    }
    const [rows, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: query.limit,
        skip: query.offset,
        include: {
          apiKey: { select: { id: true, name: true, keyPrefix: true } },
        },
      }),
      prisma.auditLog.count({ where }),
    ]);
    res.json({
      object: 'list',
      total,
      limit: query.limit,
      offset: query.offset,
      data: rows.map((r) => ({
        id: r.id,
        action: r.action,
        resource: r.resource,
        resourceId: r.resourceId,
        metaJson: r.metaJson,
        ip: r.ip,
        createdAt: r.createdAt,
        apiKey: r.apiKey,
      })),
    });
  }),

};
