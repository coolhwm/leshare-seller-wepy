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
      pages: ['pages/shop/list', 'pages/home/login', 'pages/home/index', 'pages/order/index', 'pages/user/index'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJiYXNlVXJsIiwiY29uZmlnIiwicGFnZXMiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJwYWdlUGF0aCIsInRleHQiLCJ1c2UiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFHRSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUFVZkEsVUFWZSxHQVVGO0FBQ1hDLGdCQUFVLEtBREM7QUFFWEMsZUFBUztBQUZFLEtBVkU7QUFBQSxVQWVmQyxNQWZlLEdBZU47QUFDUEMsYUFBTyxDQUNMLGlCQURLLEVBRUwsa0JBRkssRUFHTCxrQkFISyxFQUlMLG1CQUpLLEVBS0wsa0JBTEssQ0FEQTtBQVFQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLGdDQUF3QixPQUZsQjtBQUdOQyxzQ0FBOEI7QUFIeEIsT0FSRDtBQWFQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE9BSFA7QUFJTkMseUJBQWlCLFNBSlg7QUFLTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLHVCQURaO0FBRUVDLDRCQUFrQiw4QkFGcEI7QUFHRUMsb0JBQVUsa0JBSFo7QUFJRUMsZ0JBQU07QUFKUixTQURJLEVBT0o7QUFDRUgsb0JBQVUsc0JBRFo7QUFFRUMsNEJBQWtCLDZCQUZwQjtBQUdFQyxvQkFBVSxtQkFIWjtBQUlFQyxnQkFBTTtBQUpSLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxxQkFEWjtBQUVFQyw0QkFBa0IsNEJBRnBCO0FBR0VDLG9CQUFVLGtCQUhaO0FBSUVDLGdCQUFNO0FBSlIsU0FiSTtBQUxBO0FBYkQsS0FmTTtBQUdiLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFKYTtBQUtkOzs7OytCQUVVLENBQ1Y7Ozs7RUFUMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIOazqOWGjOS4remXtOS7tlxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiAnMTIzJyxcbiAgICBiYXNlVXJsOiAnaHR0cDovL2xlc2hhcmUuc2hvcDo5OTk5L2FwaS92MS9zZWxsZXInXG4gIH1cblxuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9zaG9wL2xpc3QnLFxuICAgICAgJ3BhZ2VzL2hvbWUvbG9naW4nLFxuICAgICAgJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL29yZGVyL2luZGV4JyxcbiAgICAgICdwYWdlcy91c2VyL2luZGV4J1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjMTI5NmRiJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyM2NjY2NjYnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMxMjk2ZGInLFxuICAgICAgYm9yZGVyU3R5bGU6ICd3aGl0ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkFGQUZBJyxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL3RhYi9tYW5hZ2UucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3RhYi9tYW5hZ2UtYWN0aXZlLnBuZycsXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn5bel5L2c5Y+wJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvdGFiL29yZGVyLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy90YWIvb3JkZXItYWN0aXZlLnBuZycsXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9vcmRlci9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+iuouWNlSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL3RhYi91c2VyLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy90YWIvdXNlci1hY3RpdmUucG5nJyxcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3VzZXIvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==