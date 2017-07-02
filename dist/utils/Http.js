'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _Tips = require('./Tips.js');

var _Tips2 = _interopRequireDefault(_Tips);

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

                _Tips2.default.loading();
                _context.next = 5;
                return _wepy2.default.request(param);

              case 5:
                res = _context.sent;

                if (!this.isSuccess(res)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return', res.data.data);

              case 10:
                throw this.requestException(res);

              case 11:
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
        error.message = serverData.message;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkh0dHAuanMiXSwibmFtZXMiOlsiaHR0cCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJoZWFkZXIiLCJjcmVhdGVBdXRoSGVhZGVyIiwicGFyYW0iLCJsb2FkaW5nIiwicmVxdWVzdCIsInJlcyIsImlzU3VjY2VzcyIsInJlcXVlc3RFeGNlcHRpb24iLCJ3eENvZGUiLCJzdGF0dXNDb2RlIiwid3hEYXRhIiwiY29kZSIsImVycm9yIiwic2VydmVyRGF0YSIsInNlcnZlckNvZGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0FBRUE7SUFDcUJBLEk7Ozs7Ozs7OzRFQUNHQyxNLEVBQVFDLEcsRUFBS0MsSTs7Ozs7O0FBQzNCQyxzQixHQUFTLEtBQUtDLGdCQUFMLEU7QUFDVEMscUIsR0FBUTtBQUNaSix1QkFBS0EsR0FETztBQUVaRCwwQkFBUUEsTUFGSTtBQUdaRywwQkFBUUEsTUFISTtBQUlaRCx3QkFBTUE7QUFKTSxpQjs7QUFNZCwrQkFBS0ksT0FBTDs7dUJBQ2tCLGVBQUtDLE9BQUwsQ0FBYUYsS0FBYixDOzs7QUFBWkcsbUI7O3FCQUNGLEtBQUtDLFNBQUwsQ0FBZUQsR0FBZixDOzs7OztpREFDS0EsSUFBSU4sSUFBSixDQUFTQSxJOzs7c0JBRVYsS0FBS1EsZ0JBQUwsQ0FBc0JGLEdBQXRCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVY7Ozs7Ozs4QkFHaUJBLEcsRUFBSztBQUNwQixVQUFNRyxTQUFTSCxJQUFJSSxVQUFuQjtBQUNBO0FBQ0EsVUFBSUQsV0FBVyxHQUFmLEVBQW9CO0FBQ2xCLGVBQU8sS0FBUDtBQUNEO0FBQ0QsVUFBTUUsU0FBU0wsSUFBSU4sSUFBbkI7QUFDQSxhQUFPLEVBQUVXLFVBQVVBLE9BQU9DLElBQVAsS0FBZ0IsQ0FBNUIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7cUNBR3dCTixHLEVBQUs7QUFDM0IsVUFBTU8sUUFBUSxFQUFkO0FBQ0FBLFlBQU1ILFVBQU4sR0FBbUJKLElBQUlJLFVBQXZCO0FBQ0EsVUFBTUksYUFBYVIsSUFBSU4sSUFBdkI7QUFDQSxVQUFJYyxVQUFKLEVBQWdCO0FBQ2RELGNBQU1FLFVBQU4sR0FBbUJELFdBQVdGLElBQTlCO0FBQ0FDLGNBQU1HLE9BQU4sR0FBZ0JGLFdBQVdFLE9BQTNCO0FBQ0Q7QUFDRCxhQUFPSCxLQUFQO0FBQ0Q7QUFDRDs7Ozs7O3VDQUcyQixDQUUxQjs7O3dCQUVXZCxHLEVBQUtDLEksRUFBTTtBQUNyQixhQUFPLEtBQUtLLE9BQUwsQ0FBYSxLQUFiLEVBQW9CTixHQUFwQixFQUF5QkMsSUFBekIsQ0FBUDtBQUNEOzs7d0JBRVdELEcsRUFBS0MsSSxFQUFNO0FBQ3JCLGFBQU8sS0FBS0ssT0FBTCxDQUFhLEtBQWIsRUFBb0JOLEdBQXBCLEVBQXlCQyxJQUF6QixDQUFQO0FBQ0Q7Ozt5QkFFWUQsRyxFQUFLQyxJLEVBQU07QUFDdEIsYUFBTyxLQUFLSyxPQUFMLENBQWEsTUFBYixFQUFxQk4sR0FBckIsRUFBMEJDLElBQTFCLENBQVA7QUFDRDs7OzBCQUVhRCxHLEVBQUtDLEksRUFBTTtBQUN2QixhQUFPLEtBQUtLLE9BQUwsQ0FBYSxPQUFiLEVBQXNCTixHQUF0QixFQUEyQkMsSUFBM0IsQ0FBUDtBQUNEOzs7NEJBRWNELEcsRUFBS0MsSSxFQUFNO0FBQ3hCLGFBQU8sS0FBS0ssT0FBTCxDQUFhLFFBQWIsRUFBdUJOLEdBQXZCLEVBQTRCQyxJQUE1QixDQUFQO0FBQ0Q7Ozs7OztrQkFyRWtCSCxJIiwiZmlsZSI6Ikh0dHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFRpcHMgZnJvbSAnLi9UaXBzJztcblxuLy8gSFRUUOW3peWFt+exu1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaHR0cCB7XG4gIHN0YXRpYyBhc3luYyByZXF1ZXN0IChtZXRob2QsIHVybCwgZGF0YSkge1xuICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuY3JlYXRlQXV0aEhlYWRlcigpO1xuICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGhlYWRlcjogaGVhZGVyLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH1cbiAgICBUaXBzLmxvYWRpbmcoKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3QocGFyYW0pO1xuICAgIGlmICh0aGlzLmlzU3VjY2VzcyhyZXMpKSB7XG4gICAgICByZXR1cm4gcmVzLmRhdGEuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgdGhpcy5yZXF1ZXN0RXhjZXB0aW9uKHJlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWIpOaWreivt+axguaYr+WQpuaIkOWKn1xuICAgKi9cbiAgc3RhdGljIGlzU3VjY2VzcyhyZXMpIHtcbiAgICBjb25zdCB3eENvZGUgPSByZXMuc3RhdHVzQ29kZTtcbiAgICAvLyDlvq7kv6Hor7fmsYLplJnor69cbiAgICBpZiAod3hDb2RlICE9PSAyMDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgd3hEYXRhID0gcmVzLmRhdGE7XG4gICAgcmV0dXJuICEod3hEYXRhICYmIHd4RGF0YS5jb2RlICE9PSAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvILluLhcbiAgICovXG4gIHN0YXRpYyByZXF1ZXN0RXhjZXB0aW9uKHJlcykge1xuICAgIGNvbnN0IGVycm9yID0ge307XG4gICAgZXJyb3Iuc3RhdHVzQ29kZSA9IHJlcy5zdGF0dXNDb2RlO1xuICAgIGNvbnN0IHNlcnZlckRhdGEgPSByZXMuZGF0YTtcbiAgICBpZiAoc2VydmVyRGF0YSkge1xuICAgICAgZXJyb3Iuc2VydmVyQ29kZSA9IHNlcnZlckRhdGEuY29kZTtcbiAgICAgIGVycm9yLm1lc3NhZ2UgPSBzZXJ2ZXJEYXRhLm1lc3NhZ2U7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuICAvKipcbiAgICog5p6E6YCg5p2D6ZmQ5aS06YOoXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlQXV0aEhlYWRlciAoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBnZXQgKHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0dFVCcsIHVybCwgZGF0YSlcbiAgfVxuXG4gIHN0YXRpYyBwdXQgKHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ1BVVCcsIHVybCwgZGF0YSlcbiAgfVxuXG4gIHN0YXRpYyBwb3N0ICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQT1NUJywgdXJsLCBkYXRhKVxuICB9XG5cbiAgc3RhdGljIHBhdGNoICh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQQVRDSCcsIHVybCwgZGF0YSlcbiAgfVxuXG4gIHN0YXRpYyBkZWxldGUgKHVybCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHVybCwgZGF0YSlcbiAgfVxufVxuIl19