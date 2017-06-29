'use strict';

exports.__esModule = true;

exports.default = function (content, config) {
    var p = void 0;
    try {
        var rst = (0, _babelCore.transform)(content, config);
        p = Promise.resolve(rst);
    } catch (e) {
        p = Promise.reject(e);
    }
    return p;
};

var _babelCore = require('babel-core');

;