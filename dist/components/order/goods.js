'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderGoods = function (_wepy$component) {
  _inherits(OrderGoods, _wepy$component);

  function OrderGoods() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderGoods);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderGoods.__proto__ || Object.getPrototypeOf(OrderGoods)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      goods: {}
    }, _this.data = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderGoods, [{
    key: 'onLoad',
    value: function onLoad() {
      console.info('goods', this.props);
      console.info('组件加载！');
    }
  }]);

  return OrderGoods;
}(_wepy2.default.component);

exports.default = OrderGoods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzLmpzIl0sIm5hbWVzIjpbIk9yZGVyR29vZHMiLCJwcm9wcyIsImdvb2RzIiwiZGF0YSIsIm1ldGhvZHMiLCJldmVudHMiLCJjb25zb2xlIiwiaW5mbyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxLLEdBQVE7QUFDTkMsYUFBTztBQURELEssUUFHUkMsSSxHQUFPLEUsUUFDUEMsTyxHQUFVLEUsUUFDVkMsTSxHQUFTLEU7Ozs7OzZCQUNBO0FBQ1BDLGNBQVFDLElBQVIsQ0FBYSxPQUFiLEVBQXNCLEtBQUtOLEtBQTNCO0FBQ0FLLGNBQVFDLElBQVIsQ0FBYSxPQUFiO0FBQ0Q7Ozs7RUFWcUMsZUFBS0MsUzs7a0JBQXhCUixVIiwiZmlsZSI6Imdvb2RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyR29vZHMgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICBnb29kczoge31cbiAgICB9O1xuICAgIGRhdGEgPSB7fTtcbiAgICBtZXRob2RzID0ge307XG4gICAgZXZlbnRzID0ge307XG4gICAgb25Mb2FkKCkge1xuICAgICAgY29uc29sZS5pbmZvKCdnb29kcycsIHRoaXMucHJvcHMpXG4gICAgICBjb25zb2xlLmluZm8oJ+e7hOS7tuWKoOi9ve+8gScpXG4gICAgfVxuICB9XG4iXX0=