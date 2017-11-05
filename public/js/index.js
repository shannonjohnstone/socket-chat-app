const socket = io();

(function() {
  console.log('Test UI update babel');
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

})()
