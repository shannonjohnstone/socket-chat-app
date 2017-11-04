const socket = io();

(function() {
  socket.on('connect', () => {
    console.log('Connected to server')
  })

  socket.on('disconnect', () => {
    console.log('Disconnect from server')
  })

  // listen for `newMessage` event from server
  socket.on('newMessage', (data) => {
    console.log(data, 'newMessage from the server....');
  })

  // emitting `createMessage` back to the server
  socket.emit('createMessage', {
    text: 'This is message from the UI',
    user: 'user 2'
  })
})()
