/**
 * Created by loutao on 2016/12/10.
 */

var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

function ConsolePlugin() {

}

ConsolePlugin.prototype.apply = function (compiler) {
    compiler.plugin('run', function (compiler, callback) {
        console.log('start');
        callback();
    });
};

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var configOne = {
    // target: 'node',
    entry: {
        vendor: ['moment', 'babel-polyfill', 'lodash'],
        main: './app/index.js',
        // one: './app/another/app.js'
    },
    output: {
        chunkFilename: '[id].js',    // id和name一样
        filename: '[name].bundle.js',
        path: './dist',
        // pathinfo: true,
        // sourcePrefix: '\t',
        // jsonpFunction: function () {
        //     console.log(1)
        // },
        // library: 'foo',
        // libraryTarget: 'amd',
    },
    // externals: {
    //     "demond": {
    //         commonjs: "demond",
    //         root: 'demo'
    //     }
    // },
    resolve: {
        // mainFiles: ['app'],
        // extension: ['', 'js'],
        // alias: {
        //     "vendor": path.resolve(__dirname, 'vendor/index')
        // }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {
        //     test: /\.css$/,
        //     exclude: /node_modules/,
        //     loader: ExtractTextPlugin.extract({
        //         loader: 'css-loader'
        //     }),
            // loader: 'style-loader!css-loader'
            // }
        ]
    },
    plugins: [
        new ConsolePlugin(),
        // new ExtractTextPlugin({filename: 'bundle.css'}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            // minChunks: Infinity
        }),
        new webpack.NamedModulesPlugin()
        // new WebpackMd5Hash(),
        // new ManifestPlugin(),
        // new ChunkManifestPlugin({
        //     filename: 'chunk-manifest-json',
        //     manifestVariable: 'webpackManifest'
        // })
        // new webpack.ProvidePlugin({
        //     $: 'jquery'
        // })
    ],
    // recordsPath: path.resolve('./records.json')
    // devtool: 'cheap-module-source-map'
};

var configTwo = {

};

module.exports = [configOne];