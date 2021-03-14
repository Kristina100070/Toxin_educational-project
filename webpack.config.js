const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключили плагин

module.exports = {
    entry: { 
        main: './src/js/index.js',
        search: './src/js/scripts/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
    {
                test: /\.css$/,
                use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
             }
        ]
    },
    plugins: [
        
        new MiniCssExtractPlugin({filename: 'style.css'}),
        new HtmlWebpackPlugin({ // настроили плагин
            inject: false,
            hash: true,
            template: './src/pages/index.pug',
            filename: 'index.pug',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({ // настроили плагин
            inject: false,
            hash: true,
            template: './src/pages/search.html',
            filename: 'search.html',
            chunks: ['search'],
        })
    ]
};
    