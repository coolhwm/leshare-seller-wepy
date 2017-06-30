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

var UserIndex = function (_wepy$page) {
  _inherits(UserIndex, _wepy$page);

  function UserIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserIndex.__proto__ || Object.getPrototypeOf(UserIndex)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = {}, _this.methods = {}, _this.events = {}, _this.data = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserIndex, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return UserIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(UserIndex , 'pages/user/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlVzZXJJbmRleCIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZXZlbnRzIiwiZGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTLEUsUUFDVEMsVSxHQUFhLEUsUUFDYkMsTyxHQUFVLEUsUUFDVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPLEU7Ozs7OzZCQURHLENBQUU7Ozs7RUFMeUIsZUFBS0MsSTs7a0JBQXZCTixTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7fTtcbiAgICBjb21wb25lbnRzID0ge307XG4gICAgbWV0aG9kcyA9IHt9O1xuICAgIGV2ZW50cyA9IHt9O1xuICAgIG9uTG9hZCAoKSB7fTtcbiAgICBkYXRhID0ge307XG4gIH1cbiJdfQ==