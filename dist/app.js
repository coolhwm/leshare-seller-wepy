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
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInBhZ2VQYXRoIiwidGV4dCIsInVzZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUdFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUFRZkEsVUFSZSxHQVFGO0FBQ1hDLGdCQUFVO0FBREMsS0FSRTtBQUFBLFVBWWZDLE1BWmUsR0FZTjtBQUNQQyxhQUFPLENBQ0wsa0JBREssRUFFTCxrQkFGSyxFQUdMLG1CQUhLLEVBSUwsa0JBSkssQ0FEQTtBQU9QQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLGdDQUF3QixPQUZsQjtBQUdOQyxzQ0FBOEI7QUFIeEIsT0FQRDtBQVlQQyxjQUFRO0FBQ05DLGVBQU8sU0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE9BSFA7QUFJTkMseUJBQWlCLFNBSlg7QUFLTkMsY0FBTSxDQUNKO0FBQ0VDLG9CQUFVLHVCQURaO0FBRUVDLDRCQUFrQiw4QkFGcEI7QUFHRUMsb0JBQVUsa0JBSFo7QUFJRUMsZ0JBQU07QUFKUixTQURJLEVBT0o7QUFDRUgsb0JBQVUsc0JBRFo7QUFFRUMsNEJBQWtCLDZCQUZwQjtBQUdFQyxvQkFBVSxtQkFIWjtBQUlFQyxnQkFBTTtBQUpSLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxxQkFEWjtBQUVFQyw0QkFBa0IsNEJBRnBCO0FBR0VDLG9CQUFVLGtCQUhaO0FBSUVDLGdCQUFNO0FBSlIsU0FiSTtBQUxBO0FBWkQsS0FaTTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBRVUsQ0FDVjs7OztFQVAwQixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICB9XG5cbiAgb25MYXVuY2goKSB7XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsXG4gIH1cblxuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgICdwYWdlcy9ob21lL2xvZ2luJyxcbiAgICAgICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICdwYWdlcy9vcmRlci9pbmRleCcsXG4gICAgICAncGFnZXMvdXNlci9pbmRleCdcbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzEyOTZkYidcbiAgICB9LFxuICAgIHRhYkJhcjoge1xuICAgICAgY29sb3I6ICcjNjY2NjY2JyxcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjMTI5NmRiJyxcbiAgICAgIGJvcmRlclN0eWxlOiAnd2hpdGUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZBRkFGQScsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy90YWIvbWFuYWdlLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy90YWIvbWFuYWdlLWFjdGl2ZS5wbmcnLFxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaG9tZS9pbmRleCcsXG4gICAgICAgICAgdGV4dDogJ+W3peS9nOWPsCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL3RhYi9vcmRlci5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvdGFiL29yZGVyLWFjdGl2ZS5wbmcnLFxuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvb3JkZXIvaW5kZXgnLFxuICAgICAgICAgIHRleHQ6ICforqLljZUnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy90YWIvdXNlci5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvdGFiL3VzZXItYWN0aXZlLnBuZycsXG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy91c2VyL2luZGV4JyxcbiAgICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG59XG4iXX0=