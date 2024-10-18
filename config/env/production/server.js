module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://165.232.32.246:1337'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});