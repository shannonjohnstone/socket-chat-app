'use strict';

var _constants = require('./constants');

var env = process.env.NODE_ENV || _constants.DEVELOPMENT;

if (env === _constants.DEVELOPMENT) {
  var envConfig = require('./config.json')[env];
  Object.keys(envConfig).forEach(function (key) {
    return process.env[key] = envConfig[key];
  });
}