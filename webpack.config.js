const {HotModuleReplacementPlugin} = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, './dist');

module.exports = {
    mode: 'development',
    entry: {
        app: [
            path.resolve(__dirname, './src/index.js')
        ]
    },
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/assets'),
                use: 'url-loader?limit=10000&name=assets/[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/assets/index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new HotModuleReplacementPlugin()
    ],
    optimization: {
        moduleIds: 'named',
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        port: 8080,
        historyApiFallback: true,
        hot: true,
        host: '0.0.0.0'
    }
}