const socket = io();
import { messageFormSubmitEventListener } from './formLib'
import { appendChildToIdElement } from './helpers'
import '../styles/main.pcss'
import * as constants from '../../config/constants'
import { createMessage } from './socketLib'
import './geoLocationLib'

(function() {
  socket.on('connect', () => console.log('Connected to server'))
  socket.on('disconnect', () => console.log('Disconnect from server'))
  socket.on(constants.NEW_MESSAGE, (data) => {
    console.log(data, 'newMessage from the server....')
    appendChildToIdElement({
      id: 'displayed-messages',
      newElement: 'li',
      newElementContent: data.text
    })
  })

  messageFormSubmitEventListener(socket, createMessage)

})()
