'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// HTTP工具类
var http = function () {
  function http() {
    _classCallCheck(this, http);
  }

  _createClass(http, null, [{
    key: 'request',
    value: function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(method, url, data) {
        var header, param, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                header = this.createAuthHeader();
                param = {
                  url: url,
                  method: method,
                  header: header,
                  data: data
                };
                _context.next = 4;
                return _wepy2.default.request(param);

              case 4:
                res = _context.sent;

                if (!this.isSuccess(res)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return', res.data.data);

              case 9:
                throw this.requestException(res);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return request;
    }()

    /**
     * 判断请求是否成功
     */

  }, {
    key: 'isSuccess',
    value: function isSuccess(res) {
      var wxCode = res.statusCode;
      // 微信请求错误
      if (wxCode !== 200) {
        return false;
      }
      var wxData = res.data;
      return !(wxData && wxData.code !== 0);
    }

    /**
     * 异常
     */

  }, {
    key: 'requestException',
    value: function requestException(res) {
      var error = {};
      error.statusCode = res.statusCode;
      var serverData = res.data;
      if (serverData) {
        error.serverCode = serverData.code;
        error.serverMessage = serverData.message;
      }
      return error;
    }
    /**
     * 构造权限头部
     */

  }, {
    key: 'createAuthHeader',
    value: function createAuthHeader() {}
  }, {
    key: 'get',
    value: function get(url, data) {
      return this.request('GET', url, data);
    }
  }, {
    key: 'put',
    value: function put(url, data) {
      return this.request('PUT', url, data);
    }
  }, {
    key: 'post',
    value: function post(url, data) {
      return this.request('POST', url, data);
    }
  }, {
    key: 'patch',
    value: function patch(url, data) {
      return this.request('PATCH', url, data);
    }
  }, {
    key: 'delete',
    value: function _delete(url, data) {
      return this.request('DELETE', url, data);
    }
  }]);

  return http;
}();

exports.default = http;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkh0dHAuanMiXSwibmFtZXMiOlsiaHR0cCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXIiLCJjcmVhdGVBdXRoSGVhZGVyIiwicGFyYW0iLCJyZXF1ZXN0IiwicmVzIiwiaXNTdWNjZXNzIiwicmVxdWVzdEV4Y2VwdGlvbiIsInd4Q29kZSIsInN0YXR1c0NvZGUiLCJ3eERhdGEiLCJjb2RlIiwiZXJyb3IiLCJzZXJ2ZXJEYXRhIiwic2VydmVyQ29kZSIsInNlcnZlck1lc3NhZ2UiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUVBO0lBQ3FCQSxJOzs7Ozs7Ozs0RUFDR0MsTSxFQUFRQyxHLEVBQUtDLEk7Ozs7OztBQUMzQkMsc0IsR0FBUyxLQUFLQyxnQkFBTCxFO0FBQ1RDLHFCLEdBQVE7QUFDWkosdUJBQUtBLEdBRE87QUFFWkQsMEJBQVFBLE1BRkk7QUFHWkcsMEJBQVFBLE1BSEk7QUFJWkQsd0JBQU1BO0FBSk0saUI7O3VCQU1JLGVBQUtJLE9BQUwsQ0FBYUQsS0FBYixDOzs7QUFBWkUsbUI7O3FCQUNGLEtBQUtDLFNBQUwsQ0FBZUQsR0FBZixDOzs7OztpREFDS0EsSUFBSUwsSUFBSixDQUFTQSxJOzs7c0JBRVYsS0FBS08sZ0JBQUwsQ0FBc0JGLEdBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVY7Ozs7Ozs4QkFHaUJBLEcsRUFBSztBQUNwQixVQUFNRyxTQUFTSCxJQUFJSSxVQUFuQjtBQUNBO0FBQ0EsVUFBSUQsV0FBVyxHQUFmLEVBQW9CO0FBQ2xCLGVBQU8sS0FBUDtBQUNEO0FBQ0QsVUFBTUUsU0FBU0wsSUFBSUwsSUFBbkI7QUFDQSxhQUFPLEVBQUVVLFVBQVVBLE9BQU9DLElBQVAsS0FBZ0IsQ0FBNUIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7cUNBR3dCTixHLEVBQUs7QUFDM0IsVUFBTU8sUUFBUSxFQUFkO0FBQ0FBLFlBQU1ILFVBQU4sR0FBbUJKLElBQUlJLFVBQXZCO0FBQ0EsVUFBTUksYUFBYVIsSUFBSUwsSUFBdkI7QUFDQSxVQUFJYSxVQUFKLEVBQWdCO0FBQ2RELGNBQU1FLFVBQU4sR0FBbUJELFdBQVdGLElBQTlCO0FBQ0FDLGNBQU1HLGFBQU4sR0FBc0JGLFdBQVdHLE9BQWpDO0FBQ0Q7QUFDRCxhQUFPSixLQUFQO0FBQ0Q7QUFDRDs7Ozs7O3VDQUcyQixDQUUxQjs7O3dCQUVXYixHLEVBQUtDLEksRUFBTTtBQUNyQixhQUFPLEtBQUtJLE9BQUwsQ0FBYSxLQUFiLEVBQW9CTCxHQUFwQixFQUF5QkMsSUFBekIsQ0FBUDtBQUNEOzs7d0JBRVdELEcsRUFBS0MsSSxFQUFNO0FBQ3JCLGFBQU8sS0FBS0ksT0FBTCxDQUFhLEtBQWIsRUFBb0JMLEdBQXBCLEVBQXlCQyxJQUF6QixDQUFQO0FBQ0Q7Ozt5QkFFWUQsRyxFQUFLQyxJLEVBQU07QUFDdEIsYUFBTyxLQUFLSSxPQUFMLENBQWEsTUFBYixFQUFxQkwsR0FBckIsRUFBMEJDLElBQTFCLENBQVA7QUFDRDs7OzBCQUVhRCxHLEVBQUtDLEksRUFBTTtBQUN2QixhQUFPLEtBQUtJLE9BQUwsQ0FBYSxPQUFiLEVBQXNCTCxHQUF0QixFQUEyQkMsSUFBM0IsQ0FBUDtBQUNEOzs7NEJBRWNELEcsRUFBS0MsSSxFQUFNO0FBQ3hCLGFBQU8sS0FBS0ksT0FBTCxDQUFhLFFBQWIsRUFBdUJMLEdBQXZCLEVBQTRCQyxJQUE1QixDQUFQO0FBQ0Q7Ozs7OztrQkFwRWtCSCxJIiwiZmlsZSI6Ikh0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4vLyBIVFRQ5bel5YW357G7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBodHRwIHtcbiAgc3RhdGljIGFzeW5jIHJlcXVlc3QgKG1ldGhvZCwgdXJsLCBkYXRhKSB7XG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5jcmVhdGVBdXRoSGVhZGVyKClcbiAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBoZWFkZXI6IGhlYWRlcixcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9XG4gICAgY29uc3QgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHBhcmFtKTtcbiAgICBpZiAodGhpcy5pc1N1Y2Nlc3MocmVzKSkge1xuICAgICAgcmV0dXJuIHJlcy5kYXRhLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHRoaXMucmVxdWVzdEV4Y2VwdGlvbihyZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDliKTmlq3or7fmsYLmmK/lkKbmiJDlip9cbiAgICovXG4gIHN0YXRpYyBpc1N1Y2Nlc3MocmVzKSB7XG4gICAgY29uc3Qgd3hDb2RlID0gcmVzLnN0YXR1c0NvZGU7XG4gICAgLy8g5b6u5L+h6K+35rGC6ZSZ6K+vXG4gICAgaWYgKHd4Q29kZSAhPT0gMjAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHd4RGF0YSA9IHJlcy5kYXRhO1xuICAgIHJldHVybiAhKHd4RGF0YSAmJiB3eERhdGEuY29kZSAhPT0gMCk7XG4gIH1cblxuICAvKipcbiAgICog5byC5bi4XG4gICAqL1xuICBzdGF0aWMgcmVxdWVzdEV4Y2VwdGlvbihyZXMpIHtcbiAgICBjb25zdCBlcnJvciA9IHt9O1xuICAgIGVycm9yLnN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZTtcbiAgICBjb25zdCBzZXJ2ZXJEYXRhID0gcmVzLmRhdGE7XG4gICAgaWYgKHNlcnZlckRhdGEpIHtcbiAgICAgIGVycm9yLnNlcnZlckNvZGUgPSBzZXJ2ZXJEYXRhLmNvZGU7XG4gICAgICBlcnJvci5zZXJ2ZXJNZXNzYWdlID0gc2VydmVyRGF0YS5tZXNzYWdlO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgLyoqXG4gICAqIOaehOmAoOadg+mZkOWktOmDqFxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUF1dGhIZWFkZXIgKCkge1xuXG4gIH1cblxuICBzdGF0aWMgZ2V0ICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCB1cmwsIGRhdGEpXG4gIH1cblxuICBzdGF0aWMgcHV0ICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQVVQnLCB1cmwsIGRhdGEpXG4gIH1cblxuICBzdGF0aWMgcG9zdCAodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUE9TVCcsIHVybCwgZGF0YSlcbiAgfVxuXG4gIHN0YXRpYyBwYXRjaCAodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnUEFUQ0gnLCB1cmwsIGRhdGEpXG4gIH1cblxuICBzdGF0aWMgZGVsZXRlICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdERUxFVEUnLCB1cmwsIGRhdGEpXG4gIH1cbn1cbiJdfQ==