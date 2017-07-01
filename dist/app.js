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
      pages: ['pages/home/index', 'pages/order/index', 'pages/user/index'],
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
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInBhZ2VQYXRoIiwidGV4dCIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUdFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFRZkEsVUFSZSxHQVFGO0FBQ1hDLGdCQUFVO0FBREMsS0FSRTtBQUFBLFVBWWZDLE1BWmUsR0FZTjtBQUNQQyxhQUFPLENBQ0wsa0JBREssRUFFTCxtQkFGSyxFQUdMLGtCQUhLLENBREE7QUFNUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxnQ0FBd0IsT0FGbEI7QUFHTkMsc0NBQThCO0FBSHhCLE9BTkQ7QUFXUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyxxQkFBYSxPQUhQO0FBSU5DLHlCQUFpQixTQUpYO0FBS05DLGNBQU0sQ0FDSjtBQUNFQyxvQkFBVSx1QkFEWjtBQUVFQyw0QkFBa0IsOEJBRnBCO0FBR0VDLG9CQUFVLGtCQUhaO0FBSUVDLGdCQUFNO0FBSlIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLHNCQURaO0FBRUVDLDRCQUFrQiw2QkFGcEI7QUFHRUMsb0JBQVUsbUJBSFo7QUFJRUMsZ0JBQU07QUFKUixTQVBJLEVBYUo7QUFDRUgsb0JBQVUscUJBRFo7QUFFRUMsNEJBQWtCLDRCQUZwQjtBQUdFQyxvQkFBVSxrQkFIWjtBQUlFQyxnQkFBTTtBQUpSLFNBYkk7QUFMQTtBQVhELEtBWk07O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVLENBQ1Y7Ozs7RUFQMEIsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgfVxuXG4gIG9uTGF1bmNoKCkge1xuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAncGFnZXMvb3JkZXIvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL3VzZXIvaW5kZXgnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMxMjk2ZGInXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzY2NjY2NicsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzEyOTZkYicsXG4gICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGQUZBRkEnLFxuICAgICAgbGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvdGFiL21hbmFnZS5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvdGFiL21hbmFnZS1hY3RpdmUucG5nJyxcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWUvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICflt6XkvZzlj7AnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy90YWIvb3JkZXIucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3RhYi9vcmRlci1hY3RpdmUucG5nJyxcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL29yZGVyL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn6K6i5Y2VJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvdGFiL3VzZXIucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL3RhYi91c2VyLWFjdGl2ZS5wbmcnLFxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdXNlci9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19