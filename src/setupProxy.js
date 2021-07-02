const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/WebProject',
    createProxyMiddleware({
      target: 'http://13.37.90.242:8080',
      changeOrigin: true,
    })
  );
};