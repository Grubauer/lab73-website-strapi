const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strap'),
        username: env('DATABASE_USERNAME', 'max'),
        password: env('DATABASE_PASSWORD', 'lonos'),
      },
      options: {
        ssl: false,
      },
    },
  },
});
 