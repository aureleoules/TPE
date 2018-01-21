var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './client/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: "file-loader",
                query: {
                    name: 'img/[name].[ext]'
                }
            }
        ]
    },
    output: {
        path: 'dist',
        filename: 'js/bundle.min.js',
        sourceMapFilename: 'bundle.js.map'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({ //Config
            "process.env": { 
                NODE_ENV: JSON.stringify("dev") 
            }
        })
    ]
};
