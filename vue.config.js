const path = require('path');
// const Mock = require('./mock/mock.js');
const rootPath = path.resolve(__dirname);

module.exports = {
    publicPath: './',
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
        hot: true,
        overlay: {
            warnings: false,
            errors: true
        },
        // before(app, s) {
        //     Mock(app)
        // },
        proxy: {
            '/v2x/bsp': {
                target: 'http://10.138.36.142:8086',
                changeOrigin: true,
                pathRewrite: {'': ''}
            }
        }
    },
    pluginOptions: {
        'resolve-alias': {
            alias: {
                src: path.resolve(rootPath, 'src'),
                components: path.resolve(rootPath, 'src/components'),
                utils: path.resolve(rootPath, 'src/utils')
            }
        }
    }
}