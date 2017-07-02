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
    key: 'sms',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(phone) {
        var reg, url, ERROR_WAIT, data, result, errorCode;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(phone === null || phone === '')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', '电话号码不能为空');

              case 2:
                reg = /^1[34578]\d{9}$/;

                if (reg.test(phone)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt('return', '电话号码格式错误');

              case 5:
                url = this.baseUrl + '/auth/sms_code?phone=' + phone;
                ERROR_WAIT = 10003;
                _context.prev = 7;
                _context.next = 10;
                return this.get(url);

              case 10:
                data = _context.sent;
                result = data.result;
                return _context.abrupt('return', result === 'SUCCESS' ? result : '服务器错误');

              case 15:
                _context.prev = 15;
                _context.t0 = _context['catch'](7);
                errorCode = _context.t0.serverCode;
                return _context.abrupt('return', errorCode === ERROR_WAIT ? '请求过于频繁' : '服务器错误');

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 15]]);
      }));

      function sms(_x) {
        return _ref.apply(this, arguments);
      }

      return sms;
    }()
  }]);

  return auth;
}(_base3.default);

exports.default = auth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguanMiXSwibmFtZXMiOlsiYXV0aCIsInBob25lIiwicmVnIiwidGVzdCIsInVybCIsImJhc2VVcmwiLCJFUlJPUl9XQUlUIiwiZ2V0IiwiZGF0YSIsInJlc3VsdCIsImVycm9yQ29kZSIsInNlcnZlckNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7OzRFQUNEQyxLOzs7Ozs7c0JBQ1pBLFVBQVUsSUFBVixJQUFrQkEsVUFBVSxFOzs7OztpREFDdkIsVTs7O0FBRUhDLG1CLEdBQU0saUI7O29CQUNQQSxJQUFJQyxJQUFKLENBQVNGLEtBQVQsQzs7Ozs7aURBQ0ksVTs7O0FBRUhHLG1CLEdBQVMsS0FBS0MsTyw2QkFBK0JKLEs7QUFDN0NLLDBCLEdBQWEsSzs7O3VCQUVFLEtBQUtDLEdBQUwsQ0FBU0gsR0FBVCxDOzs7QUFBYkksb0I7QUFDQUMsc0IsR0FBU0QsS0FBS0MsTTtpREFDYkEsV0FBVyxTQUFYLEdBQXVCQSxNQUF2QixHQUFnQyxPOzs7OztBQUVqQ0MseUIsR0FBWSxZQUFFQyxVO2lEQUNiRCxjQUFjSixVQUFkLEdBQTJCLFFBQTNCLEdBQXNDLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFqQjlCTixJIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZSBmcm9tICcuL2Jhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGF1dGggZXh0ZW5kcyBiYXNlIHtcbiAgc3RhdGljIGFzeW5jIHNtcyAocGhvbmUpIHtcbiAgICBpZiAocGhvbmUgPT09IG51bGwgfHwgcGhvbmUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gJ+eUteivneWPt+eggeS4jeiDveS4uuepuic7XG4gICAgfVxuICAgIGNvbnN0IHJlZyA9IC9eMVszNDU3OF1cXGR7OX0kLztcbiAgICBpZiAoIXJlZy50ZXN0KHBob25lKSkge1xuICAgICAgcmV0dXJuICfnlLXor53lj7fnoIHmoLzlvI/plJnor68nO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2F1dGgvc21zX2NvZGU/cGhvbmU9JHtwaG9uZX1gXG4gICAgY29uc3QgRVJST1JfV0FJVCA9IDEwMDAzO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5nZXQodXJsKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGEucmVzdWx0O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gJ1NVQ0NFU1MnID8gcmVzdWx0IDogJ+acjeWKoeWZqOmUmeivryc7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3JDb2RlID0gZS5zZXJ2ZXJDb2RlO1xuICAgICAgcmV0dXJuIGVycm9yQ29kZSA9PT0gRVJST1JfV0FJVCA/ICfor7fmsYLov4fkuo7popHnuYEnIDogJ+acjeWKoeWZqOmUmeivryc7XG4gICAgfVxuICB9XG59XG4iXX0=