'use strict';

var socket = io();

(function () {
  console.log('Test UI update babel');
  socket.on('connect', function () {
    console.log('Connected to server');
  });

  socket.on('disconnect', function () {
    console.log('Disconnect from server');
  });

  // listen for `newMessage` event from server
  socket.on('newMessage', function (data) {
    console.log(data, 'newMessage from the server....');
  });
})();