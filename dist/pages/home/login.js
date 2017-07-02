'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _auth = require('./../../api/auth.js');

var _auth2 = _interopRequireDefault(_auth);

var _tips = require('./../../components/weui/tips.js');

var _tips2 = _interopRequireDefault(_tips);

var _vcode = require('./../../components/weui/vcode.js');

var _vcode2 = _interopRequireDefault(_vcode);

var _Tips = require('./../../utils/Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      code: null,
      phone: null
    }, _this.methods = {
      onConfirmTap: function onConfirmTap() {
        var _this2 = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var loginCode;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (_this2.isValid()) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt('return');

                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return _auth2.default.login(_this2.phone, _this2.code);

                case 5:
                  loginCode = _context.sent;
                  _context.next = 8;
                  return _wepy2.default.setStorage({ key: 'login_code', data: loginCode });

                case 8:
                  _this2.$switch('/pages/home/index');
                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](2);

                  _this2.$invoke('Tips', 'show', _context.t0.message);

                case 14:
                  _context.prev = 14;

                  _Tips2.default.loaded();
                  return _context.finish(14);

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[2, 11, 14, 17]]);
        }))();
      },
      onCodeInput: function onCodeInput(event) {
        this.code = event.detail.value;
      },
      onPhoneInput: function onPhoneInput(event) {
        this.phone = event.detail.value;
      },
      onCodeTap: function onCodeTap() {
        var _this3 = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (_this3.isPhoneValid()) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt('return');

                case 2:
                  _context2.prev = 2;
                  _context2.next = 5;
                  return _auth2.default.sms(_this3.phone);

                case 5:
                  _this3.$invoke('VCode', 'cd', 60);
                  _context2.next = 11;
                  break;

                case 8:
                  _context2.prev = 8;
                  _context2.t0 = _context2['catch'](2);

                  _this3.$invoke('Tips', 'show', _context2.t0.message);

                case 11:
                  _context2.prev = 11;

                  _Tips2.default.loaded();
                  return _context2.finish(11);

                case 14:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[2, 8, 11, 14]]);
        }))();
      }
    }, _this.events = {}, _this.config = {
      navigationBarTitleText: '商家登录'
    }, _this.$props = { "VCode": { "xmlns:v-on": "" } }, _this.$events = { "VCode": { "v-on:tap": "onCodeTap" } }, _this.components = {
      Tips: _tips2.default,
      VCode: _vcode2.default
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onLoad',
    value: function onLoad() {}

    /**
     * 校验表单提交
     */

  }, {
    key: 'isValid',
    value: function isValid() {
      if (!this.isPhoneValid()) {
        return false;
      }
      if (this.code === null) {
        this.$invoke('Tips', 'show', '请输入验证码');
        return false;
      }
      return true;
    }
    /**
     * 校验电话号码
     */

  }, {
    key: 'isPhoneValid',
    value: function isPhoneValid() {
      if (this.phone === null || this.phone === '') {
        this.$invoke('Tips', 'show', '请输入手机号码');
        return false;
      }
      var reg = /^1[34578]\d{9}$/;
      if (!reg.test(this.phone)) {
        this.$invoke('Tips', 'show', '电话号码格式错误');
        return false;
      }
      return true;
    }
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/home/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiZGF0YSIsImNvZGUiLCJwaG9uZSIsIm1ldGhvZHMiLCJvbkNvbmZpcm1UYXAiLCJpc1ZhbGlkIiwibG9naW4iLCJsb2dpbkNvZGUiLCJzZXRTdG9yYWdlIiwia2V5IiwiJHN3aXRjaCIsIiRpbnZva2UiLCJtZXNzYWdlIiwibG9hZGVkIiwib25Db2RlSW5wdXQiLCJldmVudCIsImRldGFpbCIsInZhbHVlIiwib25QaG9uZUlucHV0Iiwib25Db2RlVGFwIiwiaXNQaG9uZVZhbGlkIiwic21zIiwiZXZlbnRzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGlwcyIsIlZDb2RlIiwicmVnIiwidGVzdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEksR0FBTztBQUNMQyxZQUFNLElBREQ7QUFFTEMsYUFBTztBQUZGLEssUUFJUEMsTyxHQUFVO0FBQ0ZDLGtCQURFLDBCQUNhO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ2QsT0FBS0MsT0FBTCxFQURjO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUtPLGVBQUtDLEtBQUwsQ0FBVyxPQUFLSixLQUFoQixFQUF1QixPQUFLRCxJQUE1QixDQUxQOztBQUFBO0FBS1hNLDJCQUxXO0FBQUE7QUFBQSx5QkFNWCxlQUFLQyxVQUFMLENBQWdCLEVBQUNDLEtBQUssWUFBTixFQUFvQlQsTUFBTU8sU0FBMUIsRUFBaEIsQ0FOVzs7QUFBQTtBQU9qQix5QkFBS0csT0FBTCxDQUFhLG1CQUFiO0FBUGlCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVNqQix5QkFBS0MsT0FBTCxDQUFhLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsWUFBRUMsT0FBL0I7O0FBVGlCO0FBQUE7O0FBV2pCLGlDQUFLQyxNQUFMO0FBWGlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYXBCLE9BZE87QUFlUkMsaUJBZlEsdUJBZUlDLEtBZkosRUFlVztBQUNqQixhQUFLZCxJQUFMLEdBQVljLE1BQU1DLE1BQU4sQ0FBYUMsS0FBekI7QUFDRCxPQWpCTztBQWtCUkMsa0JBbEJRLHdCQWtCS0gsS0FsQkwsRUFrQlk7QUFDbEIsYUFBS2IsS0FBTCxHQUFhYSxNQUFNQyxNQUFOLENBQWFDLEtBQTFCO0FBQ0QsT0FwQk87QUFxQkZFLGVBckJFLHVCQXFCVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDWCxPQUFLQyxZQUFMLEVBRFc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTVIsZUFBS0MsR0FBTCxDQUFTLE9BQUtuQixLQUFkLENBTlE7O0FBQUE7QUFPZCx5QkFBS1MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsSUFBdEIsRUFBNEIsRUFBNUI7QUFQYztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFTZCx5QkFBS0EsT0FBTCxDQUFhLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsYUFBRUMsT0FBL0I7O0FBVGM7QUFBQTs7QUFXZCxpQ0FBS0MsTUFBTDtBQVhjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYWpCO0FBbENPLEssUUFvQ1ZTLE0sR0FBUyxFLFFBQ1RDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsY0FBYSxFQUFkLEVBQVQsRSxRQUNaQyxPLEdBQVUsRUFBQyxTQUFRLEVBQUMsWUFBVyxXQUFaLEVBQVQsRSxRQUNUQyxVLEdBQWE7QUFDUkMsMEJBRFE7QUFFUkM7QUFGUSxLOzs7Ozs2QkFJQSxDQUFFOztBQUVaOzs7Ozs7OEJBR1U7QUFDUixVQUFJLENBQUMsS0FBS1QsWUFBTCxFQUFMLEVBQTBCO0FBQ3hCLGVBQU8sS0FBUDtBQUNEO0FBQ0QsVUFBSSxLQUFLbkIsSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3RCLGFBQUtVLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLFFBQTdCO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDtBQUNEOzs7Ozs7bUNBR2U7QUFDYixVQUFJLEtBQUtULEtBQUwsS0FBZSxJQUFmLElBQXVCLEtBQUtBLEtBQUwsS0FBZSxFQUExQyxFQUE4QztBQUM1QyxhQUFLUyxPQUFMLENBQWEsTUFBYixFQUFxQixNQUFyQixFQUE2QixTQUE3QjtBQUNBLGVBQU8sS0FBUDtBQUNEO0FBQ0QsVUFBTW1CLE1BQU0saUJBQVo7QUFDQSxVQUFJLENBQUNBLElBQUlDLElBQUosQ0FBUyxLQUFLN0IsS0FBZCxDQUFMLEVBQTJCO0FBQ3pCLGFBQUtTLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLFVBQTdCO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7QUFDRCxhQUFPLElBQVA7QUFDRDs7OztFQWhGZ0MsZUFBS3FCLEk7O2tCQUFuQmpDLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG4gIGltcG9ydCBhdXRoIGZyb20gJy4uLy4uL2FwaS9hdXRoJztcbiAgaW1wb3J0IEZvcm1UaXBzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2V1aS90aXBzJztcbiAgaW1wb3J0IFZDb2RlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2V1aS92Y29kZSc7XG4gIGltcG9ydCBUaXBzIGZyb20gJy4uLy4uL3V0aWxzL1RpcHMnO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGNvZGU6IG51bGwsXG4gICAgICBwaG9uZTogbnVsbFxuICAgIH07XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFzeW5jIG9uQ29uZmlybVRhcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGxvZ2luQ29kZSA9IGF3YWl0IGF1dGgubG9naW4odGhpcy5waG9uZSwgdGhpcy5jb2RlKTtcbiAgICAgICAgICBhd2FpdCB3ZXB5LnNldFN0b3JhZ2Uoe2tleTogJ2xvZ2luX2NvZGUnLCBkYXRhOiBsb2dpbkNvZGV9KTtcbiAgICAgICAgICB0aGlzLiRzd2l0Y2goJy9wYWdlcy9ob21lL2luZGV4Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ1RpcHMnLCAnc2hvdycsIGUubWVzc2FnZSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgVGlwcy5sb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uQ29kZUlucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY29kZSA9IGV2ZW50LmRldGFpbC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBvblBob25lSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5waG9uZSA9IGV2ZW50LmRldGFpbC52YWx1ZTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBvbkNvZGVUYXAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1Bob25lVmFsaWQoKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDlj5HpgIHpqozor4HnoIFcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCBhdXRoLnNtcyh0aGlzLnBob25lKTtcbiAgICAgICAgICB0aGlzLiRpbnZva2UoJ1ZDb2RlJywgJ2NkJywgNjApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy4kaW52b2tlKCdUaXBzJywgJ3Nob3cnLCBlLm1lc3NhZ2UpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIFRpcHMubG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50cyA9IHt9O1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblrrbnmbvlvZUnXG4gICAgfTtcbiAgICRwcm9wcyA9IHtcIlZDb2RlXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcIlZDb2RlXCI6e1widi1vbjp0YXBcIjpcIm9uQ29kZVRhcFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgVGlwczogRm9ybVRpcHMsXG4gICAgICBWQ29kZTogVkNvZGVcbiAgICB9O1xuICAgIG9uTG9hZCAoKSB7fVxuXG4gICAgLyoqXG4gICAgICog5qCh6aqM6KGo5Y2V5o+Q5LqkXG4gICAgICovXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgIGlmICghdGhpcy5pc1Bob25lVmFsaWQoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb2RlID09PSBudWxsKSB7XG4gICAgICAgIHRoaXMuJGludm9rZSgnVGlwcycsICdzaG93JywgJ+ivt+i+k+WFpemqjOivgeeggScpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5qCh6aqM55S16K+d5Y+356CBXG4gICAgICovXG4gICAgaXNQaG9uZVZhbGlkKCkge1xuICAgICAgaWYgKHRoaXMucGhvbmUgPT09IG51bGwgfHwgdGhpcy5waG9uZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdUaXBzJywgJ3Nob3cnLCAn6K+36L6T5YWl5omL5py65Y+356CBJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlZyA9IC9eMVszNDU3OF1cXGR7OX0kLztcbiAgICAgIGlmICghcmVnLnRlc3QodGhpcy5waG9uZSkpIHtcbiAgICAgICAgdGhpcy4kaW52b2tlKCdUaXBzJywgJ3Nob3cnLCAn55S16K+d5Y+356CB5qC85byP6ZSZ6K+vJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuIl19