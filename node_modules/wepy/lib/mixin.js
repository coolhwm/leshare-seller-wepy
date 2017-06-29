'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.data = {};
        this.components = {};
        this.methods = {};
        this.events = {};
    }

    _createClass(_class, [{
        key: '$init',
        value: function $init(parent) {
            var _this = this;

            var k = void 0;

            Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(this))).forEach(function (k) {
                if (k[0] + k[1] !== 'on' && k !== 'constructor') {
                    if (!parent[k]) parent[k] = _this[k];
                }
            });

            ['data', 'events', 'components'].forEach(function (item) {
                Object.getOwnPropertyNames(_this[item]).forEach(function (k) {
                    if (k !== 'init' && !parent[item][k]) parent[item][k] = _this[item][k];
                });
            });
        }
    }]);

    return _class;
}();

exports.default = _class;
//# sourceMappingURL=mixin.js.map