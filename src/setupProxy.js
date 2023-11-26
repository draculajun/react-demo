const {createProxyMiddleware} = require('http-proxy-middleware')

// 解决跨域，暂没用到
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {
            target: 'https://api.900sui.cn:442',
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
        })
    )
}