var g = require('./global.js');

// IOS 10.0.1 may cause IOS crash.
g.Promise = require('./../promise-polyfill/promise.js');
g.regeneratorRuntime = require('./../regenerator-runtime/runtime.js');

