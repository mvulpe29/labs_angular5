/**
 * Created by marius on 14/03/2017.
 */
var webpack = require('webpack');

module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/target/',
        publicPath: '/target/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    mode: 'development'
};