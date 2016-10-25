var webpack = require('webpack');

module.exports = {
    output: {
        path: './js',
        publicPath: '/js/',
        filename: 'bundle.js'
    },
    entry: {
        app: ['./src/app.js']
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.html'],
        modulesDirectories: ["node_modules"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 9250, //8000 local
    }
};