const { Pool } = require('pg');
const config = require('./lib/config');

let pool;
let dbConfig;

if (process.env.POSTGRES_URL) {
  // Use Vercel Postgres automatically
  dbConfig = {
    connectionString: process.env.POSTGRES_URL,
    ssl: process.env.POSTGRES_URL.includes('sslmode=require') ? true : { rejectUnauthorized: false }
  };
  pool = new Pool(dbConfig);
} else {
  // Local Database Fallback
  dbConfig = {
    user: config.get('DB_USER'),
    host: config.get('DB_HOST', 'localhost'),
    database: config.get('DB_NAME'),
    password: config.get('DB_PASSWORD'),
    port: config.getInt('DB_PORT', 5432),
  };
  pool = new Pool(dbConfig);
}

module.exports = {
  pool,
  dbConfig,
};
