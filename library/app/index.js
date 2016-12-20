/**
 * Created by loutao on 2016/12/10.
 */

// import _ from 'lodash';
// var _ = require('lodash');
var _ = require('lodash');

function component () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.map(['Hello','webpack'], function(item){
        return item + ' ';
    });
    document.body.appendChild(element);

    return element;
}

module.exports = component;

// require(['./demond']);
// require(['./vendor']);
