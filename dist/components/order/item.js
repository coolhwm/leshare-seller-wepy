'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _goods = require('./goods.js');

var _goods2 = _interopRequireDefault(_goods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderItem = function (_wepy$component) {
  _inherits(OrderItem, _wepy$component);

  function OrderItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderItem.__proto__ || Object.getPrototypeOf(OrderItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      order: {}
    }, _this.$props = { "OrderGoods": { "xmlns:v-bind": { "for": "order.orderGoodsInfos", "item": "item", "index": "index", "key": "goodsId", "value": "item" }, "v-bind:goods.once": { "for": "order.orderGoodsInfos", "item": "item", "index": "index", "key": "goodsId", "value": "item" } } }, _this.$events = {}, _this.components = {
      OrderGoods: _goods2.default
    }, _this.data = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return OrderItem;
}(_wepy2.default.component);

exports.default = OrderItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0uanMiXSwibmFtZXMiOlsiT3JkZXJJdGVtIiwicHJvcHMiLCJvcmRlciIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiT3JkZXJHb29kcyIsImRhdGEiLCJtZXRob2RzIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEssR0FBUTtBQUNOQyxhQUFPO0FBREQsSyxRQUdUQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsZ0JBQWUsRUFBQyxPQUFNLHVCQUFQLEVBQStCLFFBQU8sTUFBdEMsRUFBNkMsU0FBUSxPQUFyRCxFQUE2RCxPQUFNLFNBQW5FLEVBQTZFLFNBQVEsTUFBckYsRUFBaEIsRUFBNkcscUJBQW9CLEVBQUMsT0FBTSx1QkFBUCxFQUErQixRQUFPLE1BQXRDLEVBQTZDLFNBQVEsT0FBckQsRUFBNkQsT0FBTSxTQUFuRSxFQUE2RSxTQUFRLE1BQXJGLEVBQWpJLEVBQWQsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBR1ZDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxFOzs7O0VBWDRCLGVBQUtDLFM7O2tCQUF2QlYsUyIsImZpbGUiOiJpdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBPcmRlckdvb2RzIGZyb20gJy4vZ29vZHMnXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVySXRlbSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIG9yZGVyOiB7fVxuICAgIH07XG4gICAkcHJvcHMgPSB7XCJPcmRlckdvb2RzXCI6e1wieG1sbnM6di1iaW5kXCI6e1wiZm9yXCI6XCJvcmRlci5vcmRlckdvb2RzSW5mb3NcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJnb29kc0lkXCIsXCJ2YWx1ZVwiOlwiaXRlbVwifSxcInYtYmluZDpnb29kcy5vbmNlXCI6e1wiZm9yXCI6XCJvcmRlci5vcmRlckdvb2RzSW5mb3NcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJnb29kc0lkXCIsXCJ2YWx1ZVwiOlwiaXRlbVwifX19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgT3JkZXJHb29kczogT3JkZXJHb29kc1xuICAgIH07XG4gICAgZGF0YSA9IHt9O1xuICAgIG1ldGhvZHMgPSB7fTtcbiAgICBldmVudHMgPSB7fTtcbiAgfVxuIl19