import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const streamMock = vi.fn();
const isAvailableMock = vi.fn(async () => true);

vi.mock('../../src/services/grok-cli.service', () => ({
  grokCliService: {
    isAvailable: (...args: unknown[]) => isAvailableMock(...args),
    stream: (...args: unknown[]) => streamMock(...args),
  },
}));

import {
  grokToolsMediaProvider,
  listMediaFiles,
  selectCollectedMedia,
} from '../../src/services/media/providers/grok-tools.provider';

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif']);

function emptyStream() {
  return (async function* () {
    /* no events */
  })();
}

describe('GrokToolsMediaProvider generate/edit policy', () => {
  beforeEach(() => {
    isAvailableMock.mockReset();
    isAvailableMock.mockResolvedValue(true);
    streamMock.mockReset();
    streamMock.mockImplementation(() => emptyStream());
  });

  afterEach(async () => {
    /* sandboxes are deleted unless MEDIA_KEEP_RUNS=1 */
  });

  it('generateImage puts hard rules before Prompt and forbids web_fetch/Wikipedia', async () => {
    streamMock.mockImplementation(async function* (opts: { cwd: string }) {
      await fs.writeFile(path.join(opts.cwd, 'output.png'), Buffer.from('png'));
    });

    await grokToolsMediaProvider.generateImage({
      prompt: "I'll check the workspace and lock to attached stills",
      apiKeyId: 'k1',
      n: 1,
    });

    const opts = streamMock.mock.calls[0]![0] as {
      prompt: string;
      toolsAllowlist?: string | null;
    };
    const hardEnd = opts.prompt.indexOf('Prompt:');
    expect(hardEnd).toBeGreaterThan(0);
    const hard = opts.prompt.slice(0, hardEnd);
    expect(hard).toMatch(/first tool call MUST be image_gen/i);
    expect(hard).toContain('web_fetch');
    expect(hard).toContain('Wikipedia');
    expect(hard).toContain('output.png');
    expect(opts.prompt.indexOf("I'll check the workspace")).toBeGreaterThan(
      hardEnd,
    );
    expect(opts.toolsAllowlist).toBe('image_gen');
  });

  it('generateImage stream options lock toolsAllowlist to image_gen', async () => {
    streamMock.mockImplementation(async function* (opts: { cwd: string }) {
      await fs.writeFile(path.join(opts.cwd, 'output.png'), Buffer.from('png'));
    });
    await grokToolsMediaProvider.generateImage({
      prompt: 'a red square',
      apiKeyId: 'k1',
    });
    expect(streamMock.mock.calls[0]![0]).toMatchObject({
      toolsAllowlist: 'image_gen',
    });
  });

  it('editImage uses image_edit + input.png and toolsAllowlist image_edit', async () => {
    streamMock.mockImplementation(async function* (opts: { cwd: string }) {
      await fs.writeFile(path.join(opts.cwd, 'output.png'), Buffer.from('out'));
    });
    await grokToolsMediaProvider.editImage({
      prompt: 'make it blue',
      apiKeyId: 'k1',
      imageBytes: Buffer.from('in'),
    });
    const opts = streamMock.mock.calls[0]![0] as {
      prompt: string;
      toolsAllowlist?: string | null;
    };
    expect(opts.toolsAllowlist).toBe('image_edit');
    expect(opts.prompt).toContain('image_edit');
    expect(opts.prompt).toContain('input.png');
    expect(opts.prompt).not.toMatch(/first tool call MUST be image_gen/i);
  });

  it('video path does not pass image_gen allowlist', async () => {
    streamMock.mockImplementation(async function* (opts: { cwd: string }) {
      await fs.writeFile(path.join(opts.cwd, 'output.mp4'), Buffer.from('mp4'));
    });
    await grokToolsMediaProvider.generateVideoFromImage({
      prompt: 'gentle pan',
      apiKeyId: 'k1',
      imageBytes: Buffer.from('frame'),
    });
    const opts = streamMock.mock.calls[0]![0] as {
      toolsAllowlist?: string | null;
      prompt: string;
    };
    expect(opts.toolsAllowlist ?? null).toBeNull();
    expect(opts.prompt).toContain('image_to_video');
    expect(opts.prompt).not.toContain('first tool call MUST be image_gen');
  });
});

describe('listMediaFiles / selectCollectedMedia', () => {
  let sandbox = '';

  beforeEach(async () => {
    sandbox = await fs.mkdtemp(path.join(os.tmpdir(), 'gctoac-media-'));
  });

  afterEach(async () => {
    await fs.rm(sandbox, { recursive: true, force: true });
  });

  it('recurses into refs/try3.jpg', async () => {
    await fs.mkdir(path.join(sandbox, 'refs'), { recursive: true });
    await fs.writeFile(path.join(sandbox, 'refs', 'try3.jpg'), Buffer.from('j'));
    const found = await listMediaFiles(sandbox, IMAGE_EXTS);
    expect([...found].some((f) => f.endsWith(`${path.sep}refs${path.sep}try3.jpg`))).toBe(
      true,
    );
  });

  it('prefers root output.png over refs/try5.jpg', async () => {
    await fs.mkdir(path.join(sandbox, 'refs'), { recursive: true });
    await fs.writeFile(path.join(sandbox, 'refs', 'try5.jpg'), Buffer.from('r'));
    await fs.writeFile(path.join(sandbox, 'output.png'), Buffer.from('o'));
    const after = await listMediaFiles(sandbox, IMAGE_EXTS);
    const picked = await selectCollectedMedia({
      sandbox,
      before: new Set(),
      after,
      collect: 'image',
      n: 1,
    });
    expect(picked).toHaveLength(1);
    expect(path.basename(picked[0]!)).toBe('output.png');
  });

  it('returns subdirectory image when output.png is missing (no throw)', async () => {
    await fs.mkdir(path.join(sandbox, 'refs'), { recursive: true });
    await fs.writeFile(path.join(sandbox, 'refs', 'try3.jpg'), Buffer.from('j'));
    const after = await listMediaFiles(sandbox, IMAGE_EXTS);
    const picked = await selectCollectedMedia({
      sandbox,
      before: new Set(),
      after,
      collect: 'image',
      n: 1,
    });
    expect(picked).toHaveLength(1);
    expect(picked[0]).toMatch(/try3\.jpg$/);
  });

  it('ignores input.png / mask.png / frame.png / ref-*.png', async () => {
    await fs.writeFile(path.join(sandbox, 'input.png'), Buffer.from('i'));
    await fs.writeFile(path.join(sandbox, 'mask.png'), Buffer.from('m'));
    await fs.writeFile(path.join(sandbox, 'frame.png'), Buffer.from('f'));
    await fs.writeFile(path.join(sandbox, 'ref-0.png'), Buffer.from('r'));
    const found = await listMediaFiles(sandbox, IMAGE_EXTS);
    expect(found.size).toBe(0);
  });

  it('generateImage delivers refs/try3.jpg when that is the only image', async () => {
    isAvailableMock.mockResolvedValue(true);
    streamMock.mockImplementation(async function* (opts: { cwd: string }) {
      await fs.mkdir(path.join(opts.cwd, 'refs'), { recursive: true });
      await fs.writeFile(
        path.join(opts.cwd, 'refs', 'try3.jpg'),
        Buffer.from('jpg'),
      );
    });
    const arts = await grokToolsMediaProvider.generateImage({
      prompt: 'character sheet',
      apiKeyId: 'k1',
      n: 1,
    });
    expect(arts).toHaveLength(1);
    expect(arts[0]!.originalName).toBe('try3.jpg');
    expect(arts[0]!.mime).toBe('image/jpeg');
  });

  it('does not follow a symlink out of the sandbox', async () => {
    const outside = await fs.mkdtemp(path.join(os.tmpdir(), 'gctoac-out-'));
    try {
      await fs.writeFile(path.join(outside, 'secret.jpg'), Buffer.from('s'));
      await fs.symlink(outside, path.join(sandbox, 'leak'), 'dir');
      const found = await listMediaFiles(sandbox, IMAGE_EXTS);
      expect([...found].join(' ')).not.toContain('secret.jpg');
    } finally {
      await fs.rm(outside, { recursive: true, force: true });
    }
  });
});
