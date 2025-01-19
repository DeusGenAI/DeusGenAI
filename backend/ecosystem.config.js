module.exports = {
  apps: [
    {
      name: 'DeusGen AI Services',
      script: 'dist/main.js',
      interpreter_args: '--max-old-space-size=2560',
      instances: 1,
      autorestart: true,
      watch: ['dist', '.env', '.apprc'],
      watch_delay: 60000,
      restart_delay: 6000,
      min_uptime: 6000,
      max_restarts: 65536,
      ignore_watch: ['node_modules', 'logs'],
      watch_options: {
        followSymlinks: false,
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      log_file: 'logs/combined.log',
      combine_logs: true,
      cron_restart: '6 6 * * *',
      max_memory_restart: '2G',
      env: {},
      env_development: {
        NODE_ENV: 'development',
        NODE_TLS_REJECT_UNAUTHORIZED: 0,
      },
      env_test: {
        NODE_ENV: 'test',
        NODE_TLS_REJECT_UNAUTHORIZED: 0,
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
