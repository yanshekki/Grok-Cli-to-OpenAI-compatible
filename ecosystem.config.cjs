/** @type {import('pm2').StartOptions[]} */
module.exports = {
  apps: [
    {
      name: 'grok-openai-gateway',
      script: 'dist/server.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
      },
      error_file: 'logs/pm2-error.log',
      out_file: 'logs/pm2-out.log',
      merge_logs: true,
      time: true,
    },
  ],
};
