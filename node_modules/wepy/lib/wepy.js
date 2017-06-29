'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _event = require('./event');

var _event2 = _interopRequireDefault(_event);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _mixin = require('./mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    event: _event2.default,
    app: _app2.default,
    component: _component2.default,
    page: _page2.default,
    mixin: _mixin2.default,

    $createApp: _base2.default.$createApp,
    $createPage: _base2.default.$createPage,

    $isEmpty: _util2.default.$isEmpty,
    $isEqual: _util2.default.$isEqual,
    $isDeepEqual: _util2.default.$isDeepEqual,
    $has: _util2.default.$has,
    $extend: _util2.default.$extend,
    $isPlainObject: _util2.default.$isPlainObject,
    $copy: _util2.default.$copy
};
//# sourceMappingURL=wepy.js.map