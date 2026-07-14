const path = require('node:path');
const fs = require('node:fs');

// Load project .env into PM2 env so DATABASE_URL / ENCRYPTION_KEY exist
function loadEnvFile(filePath) {
  const out = {};
  try {
    if (!fs.existsSync(filePath)) return out;
    for (const line of fs.readFileSync(filePath, 'utf8').split('\n')) {
      const t = line.trim();
      if (!t || t.startsWith('#')) continue;
      const eq = t.indexOf('=');
      if (eq <= 0) continue;
      const k = t.slice(0, eq).trim();
      let v = t.slice(eq + 1).trim();
      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        v = v.slice(1, -1);
      }
      out[k] = v;
    }
  } catch {
    /* ignore */
  }
  return out;
}

const root = __dirname;
const fileEnv = {
  ...loadEnvFile(path.join(root, '.env')),
  ...loadEnvFile(path.join(process.env.HOME || '', '.gctoac', '.env')),
};

/** @type {import('pm2').StartOptions[]} */
module.exports = {
  apps: [
    {
      name: 'grok-openai-gateway',
      script: 'dist/server.js',
      cwd: root,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      // Prevent infinite EADDRINUSE crash loops
      max_restarts: 10,
      min_uptime: '5s',
      restart_delay: 2000,
      exp_backoff_restart_delay: 1000,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        ...fileEnv,
      },
      error_file: 'logs/pm2-error.log',
      out_file: 'logs/pm2-out.log',
      merge_logs: true,
      time: true,
    },
  ],
};
