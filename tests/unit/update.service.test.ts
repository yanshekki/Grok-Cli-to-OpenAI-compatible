import { describe, expect, it } from 'vitest';
import { updateService } from '../../src/services/update.service';

describe('UpdateService', () => {
  it('reports current version info shape', async () => {
    const info = await updateService.getVersionInfo();
    expect(info.current).toMatch(/^\d+\.\d+\.\d+/);
    expect(info.packageRoot.length).toBeGreaterThan(0);
    expect(['git', 'npm-global', 'npm-local', 'unknown']).toContain(info.channel);
    expect(typeof info.updateAvailable).toBe('boolean');
    expect(['update_available', 'up_to_date', 'ahead', 'unknown']).toContain(
      info.versionStatus,
    );
  });

  it('isUpdating is false by default', () => {
    expect(updateService.isUpdating()).toBe(false);
  });
});
