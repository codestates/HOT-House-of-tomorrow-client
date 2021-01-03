// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      // target: 'http://3.35.124.68:5000/',
      changeOrigin: true,
    })
  );
};
