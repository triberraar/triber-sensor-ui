'use strict';

// Modules
var config = require('./webpack.dev');

config.entry = {};
config.output = {};

config.devtool = 'inline-source-map';

config.module.preLoaders.push({
    test: /\.js$/,
    exclude: [
        /node_modules/,
        /\.spec\.js$/
    ],
    loader: 'isparta-instrumenter'
});

config.progress = true;

module.exports = config;