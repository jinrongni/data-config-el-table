const path = require('path');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
    entry: 'src/index.js',
    moduleName: 'DataConfigElTable',
    html: false,
    minimize: false,
    sourceMap: false,
    extract: false,
    filename: {
        js: 'index.js',
        css: 'index.css'
    },
    copy: true,
    plugins: [
        //
    ],
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src')],
                options: {
                    presets: ['es2015', 'stage-2'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};