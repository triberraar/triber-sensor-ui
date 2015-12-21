'use strict';

// Modules
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Clean = require('clean-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var webpack = require('webpack');
var packageJson = require('./package.json');

var config = {
    entry: {
        app: './public/src/app.js'
    },
    output: {
        path: __dirname + '/public/build',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolveLoader: {
        packageMains: ['json-loader']
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ],
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        },{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.json$/,
            loader: 'json-loader',
            exclude: /node_modules/
        }]
    },
    plugins:[
        new Clean(['./public/build']),
        new ngAnnotatePlugin({
            add: true
        }),
        new HtmlWebpackPlugin({
            template: './public/src/index.html',
            inject: 'body'
        }),
        new webpack.BannerPlugin('' +
            '**************************************************************\n' +
            ' ' + packageJson.name + ' build by webpack. version: ' + packageJson.version + '\n' +
            '**************************************************************\n'

        )
    ]
};

module.exports = config;