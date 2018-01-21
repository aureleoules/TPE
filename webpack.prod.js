var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './client/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
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
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        }),
        new webpack.DefinePlugin({ //Config
            "process.env": { 
                NODE_ENV: JSON.stringify("production") 
            }
        })
    ]
};
