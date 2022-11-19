const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: {
        'bundle': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'static/js/[name].[contenthash].js'
    },
    optimization: {
        //保证加载库生成的文件id一致
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.(png|jpe?g)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: 'static/media',
                    outputPath: 'static/media'
                }
            }
        }, {
            test: /\.(css)$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }]
        }]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000,
        static: {
            directory: path.join(__dirname, "build"),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    devtool: 'source-map',
}
module.exports = config;