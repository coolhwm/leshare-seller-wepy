'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShopList = function (_wepy$page) {
  _inherits(ShopList, _wepy$page);

  function ShopList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShopList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShopList.__proto__ || Object.getPrototypeOf(ShopList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.methods = {}, _this.events = {}, _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShopList, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ShopList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ShopList , 'pages/shop/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiU2hvcExpc3QiLCJjb25maWciLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImV2ZW50cyIsImRhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUyxFLFFBQ1RDLFUsR0FBYSxFLFFBQ2JDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxFLFFBRVRDLEksR0FBTyxFOzs7Ozs2QkFERyxDQUFFOzs7O0VBTHdCLGVBQUtDLEk7O2tCQUF0Qk4sUSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvcExpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHt9O1xuICAgIGNvbXBvbmVudHMgPSB7fTtcbiAgICBtZXRob2RzID0ge307XG4gICAgZXZlbnRzID0ge307XG4gICAgb25Mb2FkICgpIHt9O1xuICAgIGRhdGEgPSB7fTtcbiAgfVxuIl19