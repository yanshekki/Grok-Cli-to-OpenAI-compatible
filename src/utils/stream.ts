import type { Response } from 'express';

export function initSse(res: Response): void {
  res.status(200);
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  if (typeof res.flushHeaders === 'function') {
    res.flushHeaders();
  }
}

export function writeSseData(res: Response, data: unknown): void {
  res.write(`data: ${JSON.stringify(data)}\n\n`);
}

export function writeSseDone(res: Response): void {
  res.write('data: [DONE]\n\n');
}
