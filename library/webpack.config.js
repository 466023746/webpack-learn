/**
 * Created by loutao on 2016/12/10.
 */

var path = require('path');

module.exports = {
    entry: {
        main: './app/index.js'
    },
    output: {
        // chunkFilename: '[id].[hash].js',    // id和name一样
        filename: '[name].bundle.js',
        path: './dist',
        // pathinfo: true,
        // sourcePrefix: '\t',
        // jsonpFunction: function () {
        //     console.log(1)
        // },
        library: 'foo',
        libraryTarget: 'commonjs',
    },
    externals: {
        "lodash": {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: '_'
        }
    },
    // resolve: {
    //     extension: ['', 'js'],
    //     alias: {
    //         "vendor": path.resolve(__dirname, '../vendor/index')
    //     }
    // }
};