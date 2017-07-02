'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _auth = require('./../../api/auth.js');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderIndex = function (_wepy$page) {
  _inherits(OrderIndex, _wepy$page);

  function OrderIndex() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderIndex.__proto__ || Object.getPrototypeOf(OrderIndex)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      code: null,
      phone: null,
      waitSecond: 0,
      interval: null
    }, _this.methods = {
      onCodeTap: function onCodeTap() {
        var _this2 = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!_this2.isWaiting) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt('return');

                case 2:
                  _context.next = 4;
                  return _auth2.default.sms(_this2.phone);

                case 4:
                  result = _context.sent;

                  if (!(result !== 'SUCCESS')) {
                    _context.next = 8;
                    break;
                  }

                  console.info(result);
                  return _context.abrupt('return');

                case 8:
                  // 设置定时器
                  _this2.waitSecond = 60;
                  _this2.interval = setInterval(function () {
                    _this2.waitSecond--;
                    if (_this2.waitSecond === 0) {
                      clearInterval(_this2.interval);
                    }
                    _this2.$apply();
                  }, 1000);

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      onCodeInput: function onCodeInput(event) {
        this.code = event.detail.value;
      },
      onPhoneInput: function onPhoneInput(event) {
        this.phone = event.detail.value;
      }
    }, _this.computed = {
      isWaiting: function isWaiting() {
        return this.waitSecond > 0;
      },
      btnText: function btnText() {
        return this.isWaiting > 0 ? '\u8BF7\u7B49\u5F85' + this.waitSecond + '\u79D2' : '获取验证码';
      }
    }, _this.events = {}, _this.config = {
      navigationBarTitleText: '商家登录'
    }, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderIndex, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return OrderIndex;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(OrderIndex , 'pages/home/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIk9yZGVySW5kZXgiLCJkYXRhIiwiY29kZSIsInBob25lIiwid2FpdFNlY29uZCIsImludGVydmFsIiwibWV0aG9kcyIsIm9uQ29kZVRhcCIsImlzV2FpdGluZyIsInNtcyIsInJlc3VsdCIsImNvbnNvbGUiLCJpbmZvIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiJGFwcGx5Iiwib25Db2RlSW5wdXQiLCJldmVudCIsImRldGFpbCIsInZhbHVlIiwib25QaG9uZUlucHV0IiwiY29tcHV0ZWQiLCJidG5UZXh0IiwiZXZlbnRzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxJLEdBQU87QUFDTEMsWUFBTSxJQUREO0FBRUxDLGFBQU8sSUFGRjtBQUdMQyxrQkFBWSxDQUhQO0FBSUxDLGdCQUFVO0FBSkwsSyxRQU1QQyxPLEdBQVU7QUFDRkMsZUFERSx1QkFDVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNaLE9BQUtDLFNBRE87QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQUtLLGVBQUtDLEdBQUwsQ0FBUyxPQUFLTixLQUFkLENBTEw7O0FBQUE7QUFLVk8sd0JBTFU7O0FBQUEsd0JBTVpBLFdBQVcsU0FOQztBQUFBO0FBQUE7QUFBQTs7QUFPZEMsMEJBQVFDLElBQVIsQ0FBYUYsTUFBYjtBQVBjOztBQUFBO0FBVWhCO0FBQ0EseUJBQUtOLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSx5QkFBS0MsUUFBTCxHQUFnQlEsWUFBWSxZQUFNO0FBQ2hDLDJCQUFLVCxVQUFMO0FBQ0Esd0JBQUksT0FBS0EsVUFBTCxLQUFvQixDQUF4QixFQUEyQjtBQUN6QlUsb0NBQWMsT0FBS1QsUUFBbkI7QUFDRDtBQUNELDJCQUFLVSxNQUFMO0FBQ0QsbUJBTmUsRUFNYixJQU5hLENBQWhCOztBQVpnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CakIsT0FwQk87QUFxQlJDLGlCQXJCUSx1QkFxQklDLEtBckJKLEVBcUJXO0FBQ2pCLGFBQUtmLElBQUwsR0FBWWUsTUFBTUMsTUFBTixDQUFhQyxLQUF6QjtBQUNELE9BdkJPO0FBd0JSQyxrQkF4QlEsd0JBd0JLSCxLQXhCTCxFQXdCWTtBQUNsQixhQUFLZCxLQUFMLEdBQWFjLE1BQU1DLE1BQU4sQ0FBYUMsS0FBMUI7QUFDRDtBQTFCTyxLLFFBNEJWRSxRLEdBQVc7QUFDVGIsZUFEUyx1QkFDRztBQUNWLGVBQU8sS0FBS0osVUFBTCxHQUFrQixDQUF6QjtBQUNELE9BSFE7QUFJVGtCLGFBSlMscUJBSUM7QUFDUixlQUFPLEtBQUtkLFNBQUwsR0FBaUIsQ0FBakIsMEJBQTJCLEtBQUtKLFVBQWhDLGNBQWdELE9BQXZEO0FBQ0Q7QUFOUSxLLFFBUVhtQixNLEdBQVMsRSxRQUNUQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEU7Ozs7OzZCQUNILENBQUU7Ozs7RUFoRDBCLGVBQUtDLEk7O2tCQUF4QjNCLFUiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCBhdXRoIGZyb20gJy4uLy4uL2FwaS9hdXRoJztcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXJJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGNvZGU6IG51bGwsXG4gICAgICBwaG9uZTogbnVsbCxcbiAgICAgIHdhaXRTZWNvbmQ6IDAsXG4gICAgICBpbnRlcnZhbDogbnVsbFxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIG9uQ29kZVRhcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNXYWl0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWPkemAgemqjOivgeeggVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoLnNtcyh0aGlzLnBob25lKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gJ1NVQ0NFU1MnKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKHJlc3VsdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOiuvue9ruWumuaXtuWZqFxuICAgICAgICB0aGlzLndhaXRTZWNvbmQgPSA2MDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLndhaXRTZWNvbmQtLTtcbiAgICAgICAgICBpZiAodGhpcy53YWl0U2Vjb25kID09PSAwKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0sXG4gICAgICBvbkNvZGVJbnB1dChldmVudCkge1xuICAgICAgICB0aGlzLmNvZGUgPSBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgICB9LFxuICAgICAgb25QaG9uZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMucGhvbmUgPSBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGlzV2FpdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdFNlY29uZCA+IDA7XG4gICAgICB9LFxuICAgICAgYnRuVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNXYWl0aW5nID4gMCA/IGDor7fnrYnlvoUke3RoaXMud2FpdFNlY29uZH3np5JgIDogJ+iOt+WPlumqjOivgeeggSc7XG4gICAgICB9XG4gICAgfTtcbiAgICBldmVudHMgPSB7fTtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ZWG5a6255m75b2VJ1xuICAgIH07XG4gICAgY29tcG9uZW50cyA9IHt9O1xuICAgIG9uTG9hZCAoKSB7fTtcbiAgfVxuIl19