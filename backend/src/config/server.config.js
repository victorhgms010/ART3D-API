const config = {
  port: process.env.PORT || 3333,
  corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:19006,http://localhost:8081')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
};

module.exports = config;
