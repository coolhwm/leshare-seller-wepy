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

var VCode = function (_wepy$component) {
  _inherits(VCode, _wepy$component);

  function VCode() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VCode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VCode.__proto__ || Object.getPrototypeOf(VCode)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tap: {}
    }, _this.data = {
      display: false,
      message: '',
      waitSecond: {},
      timeoutId: null
    }, _this.computed = {
      isWaiting: function isWaiting() {
        return this.waitSecond > 0;
      },
      btnText: function btnText() {
        return this.isWaiting > 0 ? '\u8BF7\u7B49\u5F85' + this.waitSecond + '\u79D2' : '获取验证码';
      }
    }, _this.methods = {
      cd: function cd(second) {
        var _this2 = this;

        if (this.isWaiting) {
          return;
        }
        this.waitSecond = second;
        this.interval = setInterval(function () {
          _this2.waitSecond--;
          if (_this2.waitSecond === 0) {
            clearInterval(_this2.interval);
          }
          _this2.$apply();
        }, 1000);
      },

      /**
       * 传递点击事件
       */
      onCodeTap: function onCodeTap() {
        if (this.isWaiting) {
          return;
        }
        this.$emit('tap');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return VCode;
}(_wepy2.default.component);

exports.default = VCode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZjb2RlLmpzIl0sIm5hbWVzIjpbIlZDb2RlIiwicHJvcHMiLCJ0YXAiLCJkYXRhIiwiZGlzcGxheSIsIm1lc3NhZ2UiLCJ3YWl0U2Vjb25kIiwidGltZW91dElkIiwiY29tcHV0ZWQiLCJpc1dhaXRpbmciLCJidG5UZXh0IiwibWV0aG9kcyIsImNkIiwic2Vjb25kIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCIkYXBwbHkiLCJvbkNvZGVUYXAiLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLFdBQUs7QUFEQyxLLFFBR1JDLEksR0FBTztBQUNMQyxlQUFTLEtBREo7QUFFTEMsZUFBUyxFQUZKO0FBR0xDLGtCQUFZLEVBSFA7QUFJTEMsaUJBQVc7QUFKTixLLFFBTVBDLFEsR0FBVztBQUNUQyxlQURTLHVCQUNHO0FBQ1YsZUFBTyxLQUFLSCxVQUFMLEdBQWtCLENBQXpCO0FBQ0QsT0FIUTtBQUlUSSxhQUpTLHFCQUlDO0FBQ1IsZUFBTyxLQUFLRCxTQUFMLEdBQWlCLENBQWpCLDBCQUEyQixLQUFLSCxVQUFoQyxjQUFnRCxPQUF2RDtBQUNEO0FBTlEsSyxRQVFYSyxPLEdBQVU7QUFDUkMsUUFEUSxjQUNMQyxNQURLLEVBQ0c7QUFBQTs7QUFDVCxZQUFJLEtBQUtKLFNBQVQsRUFBb0I7QUFDbEI7QUFDRDtBQUNELGFBQUtILFVBQUwsR0FBa0JPLE1BQWxCO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQkMsWUFBWSxZQUFNO0FBQ2hDLGlCQUFLVCxVQUFMO0FBQ0EsY0FBSSxPQUFLQSxVQUFMLEtBQW9CLENBQXhCLEVBQTJCO0FBQ3pCVSwwQkFBYyxPQUFLRixRQUFuQjtBQUNEO0FBQ0QsaUJBQUtHLE1BQUw7QUFDRCxTQU5lLEVBTWIsSUFOYSxDQUFoQjtBQU9ELE9BYk87O0FBY1I7OztBQUdBQyxlQWpCUSx1QkFpQkk7QUFDVixZQUFJLEtBQUtULFNBQVQsRUFBb0I7QUFDbEI7QUFDRDtBQUNELGFBQUtVLEtBQUwsQ0FBVyxLQUFYO0FBQ0Q7QUF0Qk8sSzs7OztFQWxCdUIsZUFBS0MsUzs7a0JBQW5CcEIsSyIsImZpbGUiOiJ2Y29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBWQ29kZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHRhcDoge31cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogJycsXG4gICAgICB3YWl0U2Vjb25kOiB7fSxcbiAgICAgIHRpbWVvdXRJZDogbnVsbFxuICAgIH07XG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBpc1dhaXRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRTZWNvbmQgPiAwO1xuICAgICAgfSxcbiAgICAgIGJ0blRleHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzV2FpdGluZyA+IDAgPyBg6K+3562J5b6FJHt0aGlzLndhaXRTZWNvbmR956eSYCA6ICfojrflj5bpqozor4HnoIEnO1xuICAgICAgfVxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGNkKHNlY29uZCkge1xuICAgICAgICBpZiAodGhpcy5pc1dhaXRpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53YWl0U2Vjb25kID0gc2Vjb25kO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMud2FpdFNlY29uZC0tO1xuICAgICAgICAgIGlmICh0aGlzLndhaXRTZWNvbmQgPT09IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog5Lyg6YCS54K55Ye75LqL5Lu2XG4gICAgICAgKi9cbiAgICAgIG9uQ29kZVRhcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNXYWl0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGVtaXQoJ3RhcCcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiJdfQ==