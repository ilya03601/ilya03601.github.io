const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: ['./src/app.js'],
    module: {
        rules: [
            {
                include: [path.resolve(__dirname, 'src/js')],
                loader: 'babel-loader',

                options: {
                    plugins: ['syntax-dynamic-import'],

                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false
                            }
                        ]
                    ]
                },

                test: /\.js$/
            },
            {
                test: /\.(less|css)$/,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',

                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',

                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },

    output: {
        chunkFilename: '[name].[chunkhash].js',
        filename: '[name].js',
        path: path.resolve(__dirname, 'static')
    },

    mode: 'development',

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/img',
                to: 'img'
            }
        ])
    ]
};
