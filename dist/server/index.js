'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./config');

var publicPath = _path2.default.join(__dirname, '../public');
var app = (0, _express2.default)();
var server = _http2.default.createServer(app);
var io = (0, _socket2.default)(server);

var PORT = process.env.PORT;
var NODE_ENV = process.env.NODE_ENV;

if (process.env.NODE_ENV !== 'production') app.use(_express2.default.static(publicPath + '/local-dist'));else app.use(_express2.default.static(publicPath));

io.on('connection', function (socket) {
  console.log('New user connected to chat server...');

  socket.on('createMessage', function (data) {
    var newData = _extends({}, data, { createAt: new Date() });
    io.broadcast.emit('newMessage', newData); // this will emit any item emitted with `createMessage` to everyone connected at them time
  });
});

server.listen(PORT, function () {
  if (NODE_ENV !== 'production') {
    console.log('Test server update babel...');
    console.log('Server running on http://localhost:' + PORT);
  }
});