'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isWindows = require('is-windows');

var _isWindows2 = _interopRequireDefault(_isWindows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = commandConvert;

/**
 * Converts an environment variable usage to be appropriate for the current OS
 * @param {String} command Command to convert
 * @returns {String} Converted command
 */

function commandConvert(command) {
  if (!(0, _isWindows2.default)()) {
    return command;
  }
  var envUnixRegex = /\$(\w+)|\${(\w+)}/g; // $my_var or ${my_var}
  return command.replace(envUnixRegex, '%$1$2%');
}