'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var Clean = require('clean-webpack-plugin');

var config = {};

config.entry = {};
config.output = {};

config.devtool = 'inline-source-map';
config.module = {
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
    }, {
        test: /\.css$/,
        loader: 'style!css'
    }
    ]
};

config.module.preLoaders=[{
    test: /\.js$/,
    exclude: [
        /node_modules/,
        /\.spec\.js$/
    ],
    loader: 'isparta-instrumenter'
}];

config.plugins = [
    new Clean(['./public/build']),
    new ngAnnotatePlugin({
        add: true
    })
];

config.progress = true;

module.exports = config;