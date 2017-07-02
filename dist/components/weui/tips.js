'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tips = function (_wepy$component) {
  _inherits(Tips, _wepy$component);

  function Tips() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tips);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tips.__proto__ || Object.getPrototypeOf(Tips)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      display: false,
      message: '',
      timeoutId: null
    }, _this.methods = {
      show: function show(message) {
        var _this2 = this;

        this.display = true;
        this.message = message;
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
          this.timeoutId = null;
        }
        this.timeoutId = setTimeout(function () {
          _this2.display = false;
          _this2.timeoutId = null;
          _this2.$apply();
        }, 3000);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Tips;
}(_wepy2.default.component);

exports.default = Tips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcHMuanMiXSwibmFtZXMiOlsiVGlwcyIsImRhdGEiLCJkaXNwbGF5IiwibWVzc2FnZSIsInRpbWVvdXRJZCIsIm1ldGhvZHMiLCJzaG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIiRhcHBseSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSSxHQUFPO0FBQ0xDLGVBQVMsS0FESjtBQUVMQyxlQUFTLEVBRko7QUFHTEMsaUJBQVc7QUFITixLLFFBS1BDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNISCxPQURHLEVBQ007QUFBQTs7QUFDWixhQUFLRCxPQUFMLEdBQWUsSUFBZjtBQUNBLGFBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFlBQUksS0FBS0MsU0FBVCxFQUFvQjtBQUNsQkcsdUJBQWEsS0FBS0gsU0FBbEI7QUFDQSxlQUFLQSxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7QUFDRCxhQUFLQSxTQUFMLEdBQWlCSSxXQUFXLFlBQU07QUFDaEMsaUJBQUtOLE9BQUwsR0FBZSxLQUFmO0FBQ0EsaUJBQUtFLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxpQkFBS0ssTUFBTDtBQUNELFNBSmdCLEVBSWQsSUFKYyxDQUFqQjtBQUtEO0FBYk8sSzs7OztFQU5zQixlQUFLQyxTOztrQkFBbEJWLEkiLCJmaWxlIjoidGlwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBzIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgdGltZW91dElkOiBudWxsXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgc2hvdyhtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XG4gICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuIl19