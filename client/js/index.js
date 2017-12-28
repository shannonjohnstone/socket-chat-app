const socket = io();
import '../styles/main.pcss'
import { NEW_MESSAGE, CREATE_MESSAGE } from './constants'

console.log('This is a test');
(function() {
  console.log('Test UI update babel');
  socket.on('connect', () => {
    console.log('Connected to server')
  })

  socket.on('disconnect', () => {
    console.log('Disconnect from server')
  })

  // listen for `newMessage` event from server
  socket.on(NEW_MESSAGE, (data) => {
    console.log(data, 'newMessage from the server....');
  })

  socket.emit(CREATE_MESSAGE, {
    from: 'Shannon',
    text: 'This Shannon\'s message'
  }, data => console.log('Got it!', data))
})()
