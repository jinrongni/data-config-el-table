const path = require('path');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = {
    entry: 'example/index.js',
    dist: 'dist-example',
    resolve: {
        alias: {

        }
    },
    webpack: {
        output: {
            path: path.resolve(__dirname, 'dist-example/'),
            publicPath: ''
        }
    },
    filename: {
        js: '[name].js',
        css: '[name].css'
    },
    html: {
        title: 'el-table-data-config'
    },
    copy: true,
    minimize: false,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            include: [resolve('src')],
            options: {
                presets: ['es2015', 'stage-2'],
                plugins: ['transform-runtime']
            }
        }]
    },
    plugins: [

    ]
};
