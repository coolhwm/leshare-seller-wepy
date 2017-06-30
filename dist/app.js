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

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.globalData = {
      userInfo: null
    };
    _this.config = {
      pages: ['pages/order/index', 'pages/home/index', 'pages/user/index'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#1296db',
        navigationBarTitleText: '乐享商家助手'
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
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInBhZ2VQYXRoIiwidGV4dCIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUdFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFRZkEsVUFSZSxHQVFGO0FBQ1hDLGdCQUFVO0FBREMsS0FSRTtBQUFBLFVBWWZDLE1BWmUsR0FZTjtBQUNQQyxhQUFPLENBQ0wsbUJBREssRUFFTCxrQkFGSyxFQUdMLGtCQUhLLENBREE7QUFNUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCO0FBSGxCLE9BTkQ7QUFXUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxxQkFBYSxPQUhQO0FBSU5DLHlCQUFpQixTQUpYO0FBS05DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSx1QkFEWjtBQUVFQyw0QkFBa0IsOEJBRnBCO0FBR0VDLG9CQUFVLGtCQUhaO0FBSUVDLGdCQUFNO0FBSlIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLHNCQURaO0FBRUVDLDRCQUFrQiw2QkFGcEI7QUFHRUMsb0JBQVUsbUJBSFo7QUFJRUMsZ0JBQU07QUFKUixTQVBJLEVBYUo7QUFDRUgsb0JBQVUscUJBRFo7QUFFRUMsNEJBQWtCLDRCQUZwQjtBQUdFQyxvQkFBVSxrQkFIWjtBQUlFQyxnQkFBTTtBQUpSLFNBYkk7QUFMQTtBQVhELEtBWk07O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVLENBQ1Y7Ozs7RUFQMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvb3JkZXIvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3VzZXIvaW5kZXgnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzEyOTZkYicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5LmQ5Lqr5ZWG5a625Yqp5omLJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyM2NjY2NjYnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMxMjk2ZGInLFxuICAgICAgYm9yZGVyU3R5bGU6ICd3aGl0ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkFGQUZBJyxcbiAgICAgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL3RhYi9tYW5hZ2UucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3RhYi9tYW5hZ2UtYWN0aXZlLnBuZycsXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn5bel5L2c5Y+wJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvdGFiL29yZGVyLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy90YWIvb3JkZXItYWN0aXZlLnBuZycsXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9vcmRlci9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+iuouWNlSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL3RhYi91c2VyLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy90YWIvdXNlci1hY3RpdmUucG5nJyxcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3VzZXIvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==