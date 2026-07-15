import { describe, expect, it } from 'vitest';
import { normalizeApiKeyRole } from '../../src/services/role-normalize.service';
import { normalizeKeyRole } from '../../src/cli/lib/db-keys';

describe('API key role normalization', () => {
  it('maps legacy user → client for API', () => {
    expect(normalizeApiKeyRole('user')).toBe('client');
    expect(normalizeApiKeyRole('USER')).toBe('client');
    expect(normalizeApiKeyRole('client')).toBe('client');
    expect(normalizeApiKeyRole('admin')).toBe('admin');
  });

  it('CLI normalizeKeyRole accepts user alias', () => {
    expect(normalizeKeyRole('user')).toBe('client');
    expect(normalizeKeyRole('client')).toBe('client');
    expect(normalizeKeyRole('admin')).toBe('admin');
    expect(normalizeKeyRole(undefined)).toBe('client');
  });
});
