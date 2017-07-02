'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }
  /**
   * 弹出提示框
   */


  _createClass(Tips, null, [{
    key: 'toast',
    value: function toast(title, onHide) {
      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'success';

      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 警告框
     */

  }, {
    key: 'alert',
    value: function alert(title) {
      wx.showToast({
        title: title,
        image: '/images/icons/alert.png',
        mask: true,
        duration: 500
      });
    }

    /**
     * 错误框
     */

  }, {
    key: 'error',
    value: function error(title, onHide) {
      wx.showToast({
        title: title,
        image: '/images/icons/error.png',
        mask: true,
        duration: 500
      });
      // 隐藏结束回调
      if (onHide) {
        setTimeout(function () {
          onHide();
        }, 500);
      }
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      wx.showLoading({
        title: title,
        mask: true
      });
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        wx.hideLoading();
      }
    }

    /**
     * 弹出下拉动作栏
     */

  }, {
    key: 'action',
    value: function action(items) {
      return new Promise(function (resolve, reject) {
        wx.showActionSheet({
          itemList: items,
          success: function success(res) {
            var result = {
              index: res.tapIndex,
              text: items[res.tapIndex]
            };
            resolve(result);
          },
          fail: function fail(res) {
            reject(res.errMsg);
          }
        });
      });
    }
  }, {
    key: 'actionWithFunc',
    value: function actionWithFunc(items) {
      for (var _len = arguments.length, functions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        functions[_key - 1] = arguments[_key];
      }

      wx.showActionSheet({
        itemList: items,
        success: function success(res) {
          var index = res.tapIndex;
          if (index >= 0 && index < functions.length) {
            functions[index]();
          }
        }
      });
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm(text) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '提示';

      return new Promise(function (resolve, reject) {
        wx.showModal({
          title: title,
          content: text,
          showCancel: true,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            } else if (res.cancel) {
              reject(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      });
    }
  }, {
    key: 'share',
    value: function share(title, url, desc) {
      return {
        title: title,
        path: url,
        desc: desc,
        success: function success(res) {
          Tips.toast('分享成功');
        }
      };
    }
  }]);

  return Tips;
}();

/**
 * 静态变量，是否加载中
 */


exports.default = Tips;
Tips.isLoading = false;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRpcHMuanMiXSwibmFtZXMiOlsiVGlwcyIsImlzTG9hZGluZyIsInRpdGxlIiwib25IaWRlIiwiaWNvbiIsInd4Iiwic2hvd1RvYXN0IiwibWFzayIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsImltYWdlIiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsIml0ZW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzaG93QWN0aW9uU2hlZXQiLCJpdGVtTGlzdCIsInN1Y2Nlc3MiLCJyZXMiLCJyZXN1bHQiLCJpbmRleCIsInRhcEluZGV4IiwidGV4dCIsImZhaWwiLCJlcnJNc2ciLCJmdW5jdGlvbnMiLCJsZW5ndGgiLCJwYXlsb2FkIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiY2FuY2VsIiwidXJsIiwiZGVzYyIsInBhdGgiLCJ0b2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7QUFDbkIsa0JBQWU7QUFBQTs7QUFDYixTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7QUFDRDs7Ozs7OzswQkFHY0MsSyxFQUFPQyxNLEVBQTBCO0FBQUEsVUFBbEJDLElBQWtCLHVFQUFYLFNBQVc7O0FBQzdDQyxTQUFHQyxTQUFILENBQWE7QUFDWEosZUFBT0EsS0FESTtBQUVYRSxjQUFNQSxJQUZLO0FBR1hHLGNBQU0sSUFISztBQUlYQyxrQkFBVTtBQUpDLE9BQWI7QUFNQTtBQUNBLFVBQUlMLE1BQUosRUFBWTtBQUNWTSxtQkFBVyxZQUFNO0FBQ2ZOO0FBQ0QsU0FGRCxFQUVHLEdBRkg7QUFHRDtBQUNGOztBQUVEOzs7Ozs7MEJBR2NELEssRUFBTztBQUNuQkcsU0FBR0MsU0FBSCxDQUFhO0FBQ1hKLGVBQU9BLEtBREk7QUFFWFEsZUFBTyx5QkFGSTtBQUdYSCxjQUFNLElBSEs7QUFJWEMsa0JBQVU7QUFKQyxPQUFiO0FBTUQ7O0FBRUQ7Ozs7OzswQkFJY04sSyxFQUFPQyxNLEVB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5YW357G7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpcHMge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZVxuICB9XG4gIC8qKlxuICAgKiDlvLnlh7rmj5DnpLrmoYZcbiAgICovXG4gIHN0YXRpYyB0b2FzdCAodGl0bGUsIG9uSGlkZSwgaWNvbiA9ICdzdWNjZXNzJykge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpY29uOiBpY29uLFxuICAgICAgbWFzazogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KVxuICAgIC8vIOmakOiXj+e7k+adn+Wbnuiwg1xuICAgIGlmIChvbkhpZGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBvbkhpZGUoKVxuICAgICAgfSwgNTAwKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDorablkYrmoYZcbiAgICovXG4gIHN0YXRpYyBhbGVydCAodGl0bGUpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2ljb25zL2FsZXJ0LnBuZycsXG4gICAgICBtYXNrOiB0cnVlLFxuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICog6ZSZ6K+v5qGGXG4gICAqL1xuXG4gIHN0YXRpYyBlcnJvciAodGl0bGUsIG9uSGlkZSkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvaWNvbnMvZXJyb3IucG5nJyxcbiAgICAgIG1hc2s6IHRydWUsXG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSlcbiAgICAvLyDpmpDol4/nu5PmnZ/lm57osINcbiAgICBpZiAob25IaWRlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgb25IaWRlKClcbiAgICAgIH0sIDUwMClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5by55Ye65Yqg6L295o+Q56S6XG4gICAqL1xuICBzdGF0aWMgbG9hZGluZyAodGl0bGUgPSAn5Yqg6L295LitJykge1xuICAgIGlmIChUaXBzLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFRpcHMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIG1hc2s6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOWKoOi9veWujOavlVxuICAgKi9cbiAgc3RhdGljIGxvYWRlZCAoKSB7XG4gICAgaWYgKFRpcHMuaXNMb2FkaW5nKSB7XG4gICAgICBUaXBzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICB3eC5oaWRlTG9hZGluZygpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuS4i+aLieWKqOS9nOagj1xuICAgKi9cbiAgc3RhdGljIGFjdGlvbiAoaXRlbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgaXRlbUxpc3Q6IGl0ZW1zLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgaW5kZXg6IHJlcy50YXBJbmRleCxcbiAgICAgICAgICAgIHRleHQ6IGl0ZW1zW3Jlcy50YXBJbmRleF1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICByZWplY3QocmVzLmVyck1zZylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGFjdGlvbldpdGhGdW5jIChpdGVtcywgLi4uZnVuY3Rpb25zKSB7XG4gICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgIGl0ZW1MaXN0OiBpdGVtcyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByZXMudGFwSW5kZXhcbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBmdW5jdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgZnVuY3Rpb25zW2luZGV4XSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOW8ueWHuuehruiupOeql+WPo1xuICAgKi9cbiAgc3RhdGljIGNvbmZpcm0gKHRleHQsIHBheWxvYWQgPSB7fSwgdGl0bGUgPSAn5o+Q56S6Jykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNvbnRlbnQ6IHRleHQsXG4gICAgICAgIHNob3dDYW5jZWw6IHRydWUsXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICByZXNvbHZlKHBheWxvYWQpXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgICAgICAgICByZWplY3QocGF5bG9hZClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IHJlcyA9PiB7XG4gICAgICAgICAgcmVqZWN0KHBheWxvYWQpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBzaGFyZSAodGl0bGUsIHVybCwgZGVzYykge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBwYXRoOiB1cmwsXG4gICAgICBkZXNjOiBkZXNjLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBUaXBzLnRvYXN0KCfliIbkuqvmiJDlip8nKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIOmdmeaAgeWPmOmHj++8jOaYr+WQpuWKoOi9veS4rVxuICovXG5UaXBzLmlzTG9hZGluZyA9IGZhbHNlO1xuIl19