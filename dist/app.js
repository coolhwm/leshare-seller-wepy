'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // 注册中间件
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.globalData = {
      userInfo: '123',
      baseUrl: 'http://leshare.shop:9999/api/v1/seller'
    };
    _this.config = {
      pages: ['pages/home/login', 'pages/home/index', 'pages/order/index', 'pages/user/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarTextStyle: 'white',
        navigationBarBackgroundColor: '#1296db'
      },
      tabBar: {
        color: '#666666',
        selectedColor: '#1296db',
        borderStyle: 'white',
        backgroundColor: '#FAFAFA',
        list: [{
          iconPath: 'images/tab/manage.png',
          selectedIconPath: 'images/tab/manage-active.png',
          pagePath: 'pages/home/index',
          text: '工作台'
        }, {
          iconPath: 'images/tab/order.png',
          selectedIconPath: 'images/tab/order-active.png',
          pagePath: 'pages/order/index',
          text: '订单'
        }, {
          iconPath: 'images/tab/user.png',
          selectedIconPath: 'images/tab/user-active.png',
          pagePath: 'pages/user/index',
          text: '我的'
        }]
      }
    };
    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJiYXNlVXJsIiwiY29uZmlnIiwicGFnZXMiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJwYWdlUGF0aCIsInRleHQiLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFHRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUFVZkEsVUFWZSxHQVVGO0FBQ1hDLGdCQUFVLEtBREM7QUFFWEMsZUFBUztBQUZFLEtBVkU7QUFBQSxVQWVmQyxNQWZlLEdBZU47QUFDUEMsYUFBTyxDQUNMLGtCQURLLEVBRUwsa0JBRkssRUFHTCxtQkFISyxFQUlMLGtCQUpLLENBREE7QUFPUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxnQ0FBd0IsT0FGbEI7QUFHTkMsc0NBQThCO0FBSHhCLE9BUEQ7QUFZUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxxQkFBYSxPQUhQO0FBSU5DLHlCQUFpQixTQUpYO0FBS05DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSx1QkFEWjtBQUVFQyw0QkFBa0IsOEJBRnBCO0FBR0VDLG9CQUFVLGtCQUhaO0FBSUVDLGdCQUFNO0FBSlIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLHNCQURaO0FBRUVDLDRCQUFrQiw2QkFGcEI7QUFHRUMsb0JBQVUsbUJBSFo7QUFJRUMsZ0JBQU07QUFKUixTQVBJLEVBYUo7QUFDRUgsb0JBQVUscUJBRFo7QUFFRUMsNEJBQWtCLDRCQUZwQjtBQUdFQyxvQkFBVSxrQkFIWjtBQUlFQyxnQkFBTTtBQUpSLFNBYkk7QUFMQTtBQVpELEtBZk07QUFHYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSmE7QUFLZDs7OzsrQkFFVSxDQUNWOzs7O0VBVDBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICAvLyDms6jlhozkuK3pl7Tku7ZcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogJzEyMycsXG4gICAgYmFzZVVybDogJ2h0dHA6Ly9sZXNoYXJlLnNob3A6OTk5OS9hcGkvdjEvc2VsbGVyJ1xuICB9XG5cbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaG9tZS9sb2dpbicsXG4gICAgICAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAncGFnZXMvb3JkZXIvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3VzZXIvaW5kZXgnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMxMjk2ZGInXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzY2NjY2NicsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzEyOTZkYicsXG4gICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGQUZBRkEnLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvdGFiL21hbmFnZS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvdGFiL21hbmFnZS1hY3RpdmUucG5nJyxcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICflt6XkvZzlj7AnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy90YWIvb3JkZXIucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3RhYi9vcmRlci1hY3RpdmUucG5nJyxcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL29yZGVyL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn6K6i5Y2VJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvdGFiL3VzZXIucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3RhYi91c2VyLWFjdGl2ZS5wbmcnLFxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdXNlci9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19