'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base2 = require('./base.js');

var _base3 = _interopRequireDefault(_base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var auth = function (_base) {
  _inherits(auth, _base);

  function auth() {
    _classCallCheck(this, auth);

    return _possibleConstructorReturn(this, (auth.__proto__ || Object.getPrototypeOf(auth)).apply(this, arguments));
  }

  _createClass(auth, null, [{
    key: 'login',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(phone, code) {
        var url, dara;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.baseUrl + '/auth/login?phone=' + phone + '&sms_code=' + code;
                _context.next = 3;
                return this.get(url);

              case 3:
                dara = _context.sent;
                return _context.abrupt('return', dara.login_code);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
    /**
     * 短信验证码
     */

  }, {
    key: 'sms',
    value: function () {
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(phone) {
        var url, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this.baseUrl + '/auth/sms_code?phone=' + phone;
                _context2.next = 3;
                return this.get(url);

              case 3:
                data = _context2.sent;
                return _context2.abrupt('return', data.result);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function sms(_x3) {
        return _ref2.apply(this, arguments);
      }

      return sms;
    }()
  }]);

  return auth;
}(_base3.default);

exports.default = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguanMiXSwibmFtZXMiOlsiYXV0aCIsInBob25lIiwiY29kZSIsInVybCIsImJhc2VVcmwiLCJnZXQiLCJkYXJhIiwibG9naW5fY29kZSIsImRhdGEiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7OzRFQUNBQyxLLEVBQU9DLEk7Ozs7OztBQUNsQkMsbUIsR0FBUyxLQUFLQyxPLDBCQUE0QkgsSyxrQkFBa0JDLEk7O3VCQUMvQyxLQUFLRyxHQUFMLENBQVNGLEdBQVQsQzs7O0FBQWJHLG9CO2lEQUNDQSxLQUFLQyxVOzs7Ozs7Ozs7Ozs7Ozs7O0FBRWQ7Ozs7Ozs7OEVBR2tCTixLOzs7Ozs7QUFDVkUsbUIsR0FBUyxLQUFLQyxPLDZCQUErQkgsSzs7dUJBQ2hDLEtBQUtJLEdBQUwsQ0FBU0YsR0FBVCxDOzs7QUFBYkssb0I7a0RBQ0NBLEtBQUtDLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFaS1QsSSIsImZpbGUiOiJhdXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2UgZnJvbSAnLi9iYXNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhdXRoIGV4dGVuZHMgYmFzZSB7XG4gIHN0YXRpYyBhc3luYyBsb2dpbihwaG9uZSwgY29kZSkge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVybH0vYXV0aC9sb2dpbj9waG9uZT0ke3Bob25lfSZzbXNfY29kZT0ke2NvZGV9YDtcbiAgICBjb25zdCBkYXJhID0gYXdhaXQgdGhpcy5nZXQodXJsKTtcbiAgICByZXR1cm4gZGFyYS5sb2dpbl9jb2RlO1xuICB9XG4gIC8qKlxuICAgKiDnn63kv6Hpqozor4HnoIFcbiAgICovXG4gIHN0YXRpYyBhc3luYyBzbXMgKHBob25lKSB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVXJsfS9hdXRoL3Ntc19jb2RlP3Bob25lPSR7cGhvbmV9YFxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldCh1cmwpO1xuICAgIHJldHVybiBkYXRhLnJlc3VsdDtcbiAgfVxufVxuIl19