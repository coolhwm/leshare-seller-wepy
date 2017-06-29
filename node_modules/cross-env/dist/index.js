'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _crossSpawn = require('cross-spawn');

var _command = require('./command');

var _command2 = _interopRequireDefault(_command);

var _variable = require('./variable');

var _variable2 = _interopRequireDefault(_variable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = crossEnv;

var envSetterRegex = /(\w+)=('(.*)'|"(.*)"|(.*))/;

function crossEnv(args) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _parseCommand = parseCommand(args),
      _parseCommand2 = _slicedToArray(_parseCommand, 3),
      envSetters = _parseCommand2[0],
      command = _parseCommand2[1],
      commandArgs = _parseCommand2[2];

  if (command) {
    var proc = (0, _crossSpawn.spawn)((0, _command2.default)(command), commandArgs.map(_command2.default), {
      stdio: 'inherit',
      shell: options.shell,
      env: getEnvVars(envSetters)
    });
    process.on('SIGTERM', function () {
      return proc.kill('SIGTERM');
    });
    process.on('SIGINT', function () {
      return proc.kill('SIGINT');
    });
    process.on('SIGBREAK', function () {
      return proc.kill('SIGBREAK');
    });
    process.on('SIGHUP', function () {
      return proc.kill('SIGHUP');
    });
    proc.on('exit', process.exit);
    return proc;
  }
  return null;
}

function parseCommand(args) {
  var envSetters = {};
  var command = null;
  var commandArgs = [];
  for (var i = 0; i < args.length; i++) {
    var match = envSetterRegex.exec(args[i]);
    if (match) {
      var value = void 0;

      if (typeof match[3] !== 'undefined') {
        value = match[3];
      } else if (typeof match[4] === 'undefined') {
        value = match[5];
      } else {
        value = match[4];
      }

      envSetters[match[1]] = value;
    } else {
      // No more env setters, the rest of the line must be the command and args
      command = args[i];
      commandArgs = args.slice(i + 1);
      break;
    }
  }

  return [envSetters, command, commandArgs];
}

function getEnvVars(envSetters) {
  var envVars = Object.assign({}, process.env);
  if (process.env.APPDATA) {
    envVars.APPDATA = process.env.APPDATA;
  }
  Object.keys(envSetters).forEach(function (varName) {
    envVars[varName] = (0, _variable2.default)(envSetters[varName], varName);
  });
  return envVars;
}