'use strict';

var socket = io();

(function () {
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

  // emitting `createMessage` back to the server
  socket.emit('createMessage', {
    text: 'This is message from the UI',
    user: 'user 2'
  });
})();
