'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZanTab = function (_wepy$component) {
  _inherits(ZanTab, _wepy$component);

  function ZanTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ZanTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ZanTab.__proto__ || Object.getPrototypeOf(ZanTab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tab: { twoWay: true },
      fixed: {
        type: Boolean,
        default: true
      }
    }, _this.data = {}, _this.methods = {
      /**
       * 事件处理函数
       */
      handleZanTabChange: function handleZanTabChange(e) {
        var dataset = e.currentTarget.dataset;
        var componentId = dataset.componentId;
        var selectedId = dataset.itemId;
        var data = { componentId: componentId, selectedId: selectedId };
        // 直接修改数据/双向通讯
        this.tab.selectedId = selectedId;
        // 发射事件
        this.$emit('tab-change', data);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ZanTab;
}(_wepy2.default.component);

exports.default = ZanTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJaYW5UYWIiLCJwcm9wcyIsInRhYiIsInR3b1dheSIsImZpeGVkIiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiZGF0YSIsIm1ldGhvZHMiLCJoYW5kbGVaYW5UYWJDaGFuZ2UiLCJlIiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJjb21wb25lbnRJZCIsInNlbGVjdGVkSWQiLCJpdGVtSWQiLCIkZW1pdCIsImV2ZW50cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSyxHQUFRO0FBQ05DLFdBQUssRUFBQ0MsUUFBUSxJQUFULEVBREM7QUFFTkMsYUFBTztBQUNMQyxjQUFNQyxPQUREO0FBRUxDLGlCQUFTO0FBRko7QUFGRCxLLFFBT1JDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNSOzs7QUFHQUMsd0JBSlEsOEJBSVdDLENBSlgsRUFJYztBQUNwQixZQUFNQyxVQUFVRCxFQUFFRSxhQUFGLENBQWdCRCxPQUFoQztBQUNBLFlBQU1FLGNBQWNGLFFBQVFFLFdBQTVCO0FBQ0EsWUFBTUMsYUFBYUgsUUFBUUksTUFBM0I7QUFDQSxZQUFNUixPQUFPLEVBQUVNLHdCQUFGLEVBQWVDLHNCQUFmLEVBQWI7QUFDQTtBQUNBLGFBQUtiLEdBQUwsQ0FBU2EsVUFBVCxHQUFzQkEsVUFBdEI7QUFDQTtBQUNBLGFBQUtFLEtBQUwsQ0FBVyxZQUFYLEVBQXlCVCxJQUF6QjtBQUNEO0FBYk8sSyxRQWVWVSxNLEdBQVMsRTs7OztFQXhCeUIsZUFBS0MsUzs7a0JBQXBCbkIsTSIsImZpbGUiOiJ0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgWmFuVGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgdGFiOiB7dHdvV2F5OiB0cnVlfSxcbiAgICAgIGZpeGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuICAgIGRhdGEgPSB7fTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgLyoqXG4gICAgICAgKiDkuovku7blpITnkIblh73mlbBcbiAgICAgICAqL1xuICAgICAgaGFuZGxlWmFuVGFiQ2hhbmdlKGUpIHtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgICBjb25zdCBjb21wb25lbnRJZCA9IGRhdGFzZXQuY29tcG9uZW50SWQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBkYXRhc2V0Lml0ZW1JZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHsgY29tcG9uZW50SWQsIHNlbGVjdGVkSWQgfTtcbiAgICAgICAgLy8g55u05o6l5L+u5pS55pWw5o2uL+WPjOWQkemAmuiur1xuICAgICAgICB0aGlzLnRhYi5zZWxlY3RlZElkID0gc2VsZWN0ZWRJZDtcbiAgICAgICAgLy8g5Y+R5bCE5LqL5Lu2XG4gICAgICAgIHRoaXMuJGVtaXQoJ3RhYi1jaGFuZ2UnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50cyA9IHt9O1xuICB9XG4iXX0=