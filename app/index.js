/**
 * Created by loutao on 2016/12/10.
 */

// var _ = require('lodash');
// console.log(_.map([1, 2], function (item) {
//     return item * 2
// }));
// var lib = require('../library/dist/main.bundle');
// lib.foo();
//
var moment = require('moment');
// var polyfill = require('babel-polyfill');
// var lodash = require('lodash');

import another from './another/app';
another.another();

// define(['page'], function (page) {
//     console.log(page)
// });
// require.ensure([], function () {
//    require('./b')
// });
// var lodash = require('lodash');
// var css = require('./index.css');
// require('./another/app').another();
// require('./b');

let b = 1;
console.log(b);

var div = document.createElement('div');
div.innerText = moment().format();
document.body.appendChild(div);

var _ = require('lodash');

class A {
    constructor() {
        console.log(_.toString('AAA'))
    }
}

new A();
//
var c = new Set();
console.log(c);

require('./c');
// require('./b');
require('./a');

var $ = require('jquery');
console.log($('div'));
console.log($('div'));
