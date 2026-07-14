import { describe, expect, it } from 'vitest';
import { hashApiKey, verifyApiKey } from '../../src/services/api-key.service';

describe('api-key hashing', () => {
  it('hashes deterministically and verifies', () => {
    const key = 'gk_live_test_key_abc123';
    const hash = hashApiKey(key);
    expect(hash).toHaveLength(64);
    expect(verifyApiKey(key, hash)).toBe(true);
    expect(verifyApiKey('wrong', hash)).toBe(false);
  });
});
