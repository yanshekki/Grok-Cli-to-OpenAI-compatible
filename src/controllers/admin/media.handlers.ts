import type { Request, Response } from 'express';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { Prisma } from '@prisma/client';
import { prisma } from '../../config/database';
import { env } from '../../config/env';
import { AUDIT_ACTIONS } from '../../config/constants';
import { ExceptionFactory } from '../../exceptions/exception.factory';
import { asyncHandler } from '../../utils/async-handler';
import { auditService } from '../../services/audit.service';
import { requestIp } from '../../utils/client-ip';

function mediaRoot(): string {
  return path.join(env.storageDir, 'media');
}

/** Admin: browse / download / delete generated media + video jobs */
export const adminMediaHandlers = {
  listAssets: asyncHandler(async (req: Request, res: Response) => {
    const limit = Math.min(Math.max(Number(req.query.limit) || 50, 1), 200);
    const offset = Math.max(Number(req.query.offset) || 0, 0);
    const kind =
      typeof req.query.kind === 'string' && req.query.kind
        ? String(req.query.kind)
        : undefined;
    const provider =
      typeof req.query.provider === 'string' && req.query.provider
        ? String(req.query.provider)
        : undefined;
    const q =
      typeof req.query.q === 'string' && req.query.q.trim()
        ? String(req.query.q).trim()
        : undefined;
    const fromRaw =
      typeof req.query.from === 'string' ? req.query.from : undefined;
    const toRaw = typeof req.query.to === 'string' ? req.query.to : undefined;

    const createdAt: { gte?: Date; lte?: Date } = {};
    if (fromRaw) {
      const d = new Date(fromRaw);
      if (!Number.isNaN(d.getTime())) createdAt.gte = d;
    }
    if (toRaw) {
      const d = new Date(toRaw);
      if (!Number.isNaN(d.getTime())) createdAt.lte = d;
    }

    const where: Prisma.MediaAssetWhereInput = {
      deletedAt: null,
      ...(kind ? { kind } : {}),
      ...(provider ? { provider: { contains: provider } } : {}),
      ...(Object.keys(createdAt).length ? { createdAt } : {}),
      ...(q
        ? {
            OR: [
              { prompt: { contains: q } },
              { originalName: { contains: q } },
              { mime: { contains: q } },
              { provider: { contains: q } },
              { id: { contains: q } },
              { source: { contains: q } },
            ],
          }
        : {}),
    };

    const [rows, total] = await Promise.all([
      prisma.mediaAsset.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
        select: {
          id: true,
          kind: true,
          mime: true,
          byteSize: true,
          originalName: true,
          source: true,
          provider: true,
          prompt: true,
          createdAt: true,
          apiKeyId: true,
          apiKey: { select: { name: true, keyPrefix: true } },
        },
      }),
      prisma.mediaAsset.count({ where }),
    ]);
    res.json({
      object: 'list',
      total,
      limit,
      offset,
      data: rows.map((r) => ({
        id: r.id,
        kind: r.kind,
        mime: r.mime,
        bytes: r.byteSize,
        filename: r.originalName,
        source: r.source,
        provider: r.provider,
        prompt: r.prompt,
        created_at: r.createdAt.toISOString(),
        apiKeyId: r.apiKeyId,
        apiKeyName: r.apiKey?.name,
        apiKeyPrefix: r.apiKey?.keyPrefix,
      })),
    });
  }),

  getAsset: asyncHandler(async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const row = await prisma.mediaAsset.findFirst({
      where: { id, deletedAt: null },
      include: { apiKey: { select: { name: true, keyPrefix: true } } },
    });
    if (!row) throw ExceptionFactory.notFound('Media asset');
    res.json({
      object: 'admin.media_asset',
      data: {
        id: row.id,
        kind: row.kind,
        mime: row.mime,
        bytes: row.byteSize,
        filename: row.originalName,
        source: row.source,
        provider: row.provider,
        prompt: row.prompt,
        meta: row.metaJson,
        created_at: row.createdAt.toISOString(),
        apiKeyId: row.apiKeyId,
        apiKeyName: row.apiKey?.name,
        apiKeyPrefix: row.apiKey?.keyPrefix,
      },
    });
  }),

  downloadAsset: asyncHandler(async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const row = await prisma.mediaAsset.findFirst({
      where: { id, deletedAt: null },
    });
    if (!row) throw ExceptionFactory.notFound('Media asset');
    const full = path.join(mediaRoot(), row.storagePath);
    const bytes = await fs.readFile(full);
    res.setHeader('Content-Type', row.mime);
    if (row.originalName) {
      res.setHeader(
        'Content-Disposition',
        `inline; filename="${row.originalName.replace(/"/g, '')}"`,
      );
    }
    res.setHeader('Content-Length', String(bytes.length));
    res.status(200).send(bytes);
  }),

  deleteAsset: asyncHandler(async (req: Request, res: Response) => {
    if (!req.apiKey) throw ExceptionFactory.unauthorized();
    const id = String(req.params.id);
    const row = await prisma.mediaAsset.findFirst({
      where: { id, deletedAt: null },
    });
    if (!row) throw ExceptionFactory.notFound('Media asset');
    await prisma.mediaAsset.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    await auditService.log({
      apiKeyId: req.apiKey.id,
      action: AUDIT_ACTIONS.MEDIA_DELETE,
      resource: 'media_asset',
      resourceId: id,
      ip: requestIp(req),
    });
    res.json({ object: 'admin.media_asset.deleted', id, deleted: true });
  }),

  listJobs: asyncHandler(async (req: Request, res: Response) => {
    const limit = Math.min(Math.max(Number(req.query.limit) || 50, 1), 200);
    const offset = Math.max(Number(req.query.offset) || 0, 0);
    const [rows, total] = await Promise.all([
      prisma.mediaJob.findMany({
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.mediaJob.count(),
    ]);
    res.json({
      object: 'list',
      total,
      data: rows.map((r) => ({
        id: r.id,
        kind: r.kind,
        status: r.status,
        prompt: r.prompt,
        model: r.model,
        provider: r.provider,
        result_asset_id: r.resultAssetId,
        error: r.errorMessage,
        created_at: r.createdAt.toISOString(),
        completed_at: r.completedAt?.toISOString() ?? null,
      })),
    });
  }),
};
