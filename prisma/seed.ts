import { config as loadDotenv } from 'dotenv';
import { createHash } from 'node:crypto';
import { PrismaClient } from '@prisma/client';
import { randomBytes, randomUUID } from 'node:crypto';

loadDotenv();

const prisma = new PrismaClient();

function createApiKeySecret(): string {
  return `gk_live_${randomBytes(24).toString('base64url')}`;
}

function hashApiKey(rawKey: string): string {
  return createHash('sha256').update(rawKey, 'utf8').digest('hex');
}

function apiKeyPrefix(rawKey: string): string {
  return rawKey.slice(0, 16);
}

async function main(): Promise<void> {
  const existingAdmin = await prisma.apiKey.findFirst({
    where: { role: 'admin', isActive: true },
  });

  if (existingAdmin) {
    await prisma.apiKey.update({
      where: { id: existingAdmin.id },
      data: { mode: 'agent' },
    });
    console.log('Admin API key already exists:');
    console.log(`  id:     ${existingAdmin.id}`);
    console.log(`  name:   ${existingAdmin.name}`);
    console.log(`  prefix: ${existingAdmin.keyPrefix}`);
    console.log('  mode:   agent (ensured)');
    const port = process.env.PORT || '3847';
    console.log(`Admin panel: http://127.0.0.1:${port}/admin/`);
    console.log('Plaintext key is not recoverable. Create a new admin key via API if needed.');
    return;
  }

  const rawKey = process.env.ADMIN_BOOTSTRAP_KEY?.trim() || createApiKeySecret();
  const keyHash = hashApiKey(rawKey);
  const prefix = apiKeyPrefix(rawKey);

  const created = await prisma.apiKey.create({
    data: {
      id: randomUUID(),
      name: 'bootstrap-admin',
      keyPrefix: prefix,
      keyHash,
      role: 'admin',
      mode: 'agent',
      rateLimit: 120,
    },
  });

  const port = process.env.PORT || '3847';
  console.log('Created bootstrap admin API key (store it securely — shown once):');
  console.log(`  id:   ${created.id}`);
  console.log(`  key:  ${rawKey}`);
  console.log('');
  console.log(`Admin panel: http://127.0.0.1:${port}/admin/`);
  console.log('CLI: gctoac start | gctoac status | gctoac open');
  console.log('API example:');
  console.log(
    `  curl -s http://127.0.0.1:${port}/admin/api/me -H "Authorization: Bearer ${rawKey}"`,
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
