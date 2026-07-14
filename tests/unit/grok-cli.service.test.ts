import { describe, expect, it } from 'vitest';
import { GrokCliService } from '../../src/services/grok-cli.service';

describe('GrokCliService parsers', () => {
  const service = new GrokCliService();

  it('buildArgs includes required flags', () => {
    const args = service.buildArgs({
      prompt: 'hello',
      model: 'grok-4.5',
      cwd: '/tmp/ws',
      stream: true,
      sessionId: 'sess-1',
      alwaysApprove: true,
      maxTurns: 3,
      toolsDenylist: 'web_search',
    });
    expect(args).toContain('-p');
    expect(args).toContain('hello');
    expect(args).toContain('-m');
    expect(args).toContain('grok-4.5');
    expect(args).toContain('--output-format');
    expect(args).toContain('streaming-json');
    expect(args).toContain('-s');
    expect(args).toContain('sess-1');
    expect(args).toContain('--always-approve');
    expect(args).toContain('--max-turns');
    expect(args).toContain('3');
    expect(args).toContain('--disallowed-tools');
    expect(args).toContain('web_search');
  });

  it('buildArgs omits always-approve when disabled by policy', () => {
    const args = service.buildArgs({
      prompt: 'x',
      model: 'm',
      cwd: '/tmp',
      stream: false,
      alwaysApprove: false,
    });
    expect(args).not.toContain('--always-approve');
  });

  it('parseJsonResult parses last JSON object', () => {
    const raw = 'noise\n{"text":"ok","stopReason":"EndTurn","sessionId":"s1"}\n';
    expect(service.parseJsonResult(raw)).toEqual({
      text: 'ok',
      stopReason: 'EndTurn',
      sessionId: 's1',
    });
  });

  it('parseJsonResult falls back to plain text', () => {
    expect(service.parseJsonResult('just text')).toEqual({ text: 'just text' });
  });

  it('parseModelsOutput extracts model ids', () => {
    const stdout = `
You are logged in.

Default model: grok-4.5

Available models:
  * grok-4.5 (default)
  - grok-composer-2.5-fast
`;
    expect(service.parseModelsOutput(stdout)).toEqual([
      'grok-4.5',
      'grok-composer-2.5-fast',
    ]);
  });

  it('tracks concurrency acquire/release', () => {
    expect(service.tryAcquire()).toBe(true);
    expect(service.tryAcquire()).toBe(true);
    expect(service.tryAcquire()).toBe(false); // max 2 in test setup
    service.release();
    expect(service.tryAcquire()).toBe(true);
    service.release();
    service.release();
    service.release();
  });
});
