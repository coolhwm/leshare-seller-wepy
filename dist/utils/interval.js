"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Interval = function () {
  function Interval(interval, action, clearTime) {
    _classCallCheck(this, Interval);

    this.interval = interval;
    this.action = action;
    this.clearTime = clearTime;
  }

  /**
   * 开始运行
   */


  _createClass(Interval, [{
    key: "start",
    value: function start() {
      var id = setInterval(this.action, this.interval);
      setTimeout(function () {
        clearInterval(id);
      }, this.clearTime);
    }
  }]);

  return Interval;
}();

exports.default = Interval;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVydmFsLmpzIl0sIm5hbWVzIjpbIkludGVydmFsIiwiaW50ZXJ2YWwiLCJhY3Rpb24iLCJjbGVhclRpbWUiLCJpZCIsInNldEludGVydmFsIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDcUJBLFE7QUFDbkIsb0JBQWFDLFFBQWIsRUFBdUJDLE1BQXZCLEVBQStCQyxTQUEvQixFQUF5QztBQUFBOztBQUN2QyxTQUFLRixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NEJBR1M7QUFDUCxVQUFNQyxLQUFLQyxZQUFZLEtBQUtILE1BQWpCLEVBQXlCLEtBQUtELFFBQTlCLENBQVg7QUFDQUssaUJBQVcsWUFBTTtBQUNmQyxzQkFBY0gsRUFBZDtBQUNELE9BRkQsRUFFRyxLQUFLRCxTQUZSO0FBR0Q7Ozs7OztrQkFma0JILFEiLCJmaWxlIjoiaW50ZXJ2YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVydmFsIHtcbiAgY29uc3RydWN0b3IgKGludGVydmFsLCBhY3Rpb24sIGNsZWFyVGltZSl7XG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIHRoaXMuY2xlYXJUaW1lID0gY2xlYXJUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOW8gOWni+i/kOihjFxuICAgKi9cbiAgc3RhcnQgKCkge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwodGhpcy5hY3Rpb24sIHRoaXMuaW50ZXJ2YWwpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfSwgdGhpcy5jbGVhclRpbWUpO1xuICB9XG59XG4iXX0=