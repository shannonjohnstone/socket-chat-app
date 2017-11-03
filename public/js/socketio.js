const socket = io();

(function() {
  socket.on('connect', () => {
    console.log('Connected to server')
  })

  socket.on('disconnect', () => {
    console.log('Disconnect from server')
  })
})()
