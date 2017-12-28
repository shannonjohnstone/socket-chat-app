const socket = io();
import { messageFormSubmitEventListener } from './formLib'
import '../styles/main.pcss'
import { NEW_MESSAGE, CREATE_MESSAGE } from './constants'
import { createMessage } from './socketLib'

(function() {
  socket.on('connect', () => console.log('Connected to server'))
  socket.on('disconnect', () => console.log('Disconnect from server'))
  socket.on(NEW_MESSAGE, (data) => console.log(data, 'newMessage from the server....'))

  messageFormSubmitEventListener(socket, createMessage, )

})()
