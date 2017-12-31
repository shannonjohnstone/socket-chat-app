const socket = io();
import { messageFormSubmitEventListener } from './formLib'
import { appendChildTextElementToIdElement, appendChildElementToIdElement, createAtagElement, log } from './helpers'
import '../styles/main.pcss'
import * as constants from '../../config/constants'
import { createMessage } from './socketLib'
import './geoLocationLib'

(function() {
  log.setLevel('info')
  socket.on('connect', () => log.info('Connected to server'))
  socket.on('disconnect', () => log.info('Disconnect from server'))

  // general message coming in from server to append to chat window
  socket.on(constants.NEW_MESSAGE, (data) => {
    log.info(data, 'newMessage from the server....')
    appendChildTextElementToIdElement({
      id: 'displayed-messages',
      newElement: 'li',
      newElementContent: data.text
    })
  })

  // location message coming in from server to append to chat window as a link
  socket.on(constants.NEW_LOCATION_MESSAGE, (data) => {
    log.info(data, 'NEW_LOCATION_MESSAGE from the server....')

    const aTag = createAtagElement({
      attributes: [{ name: 'href', value: data.url, }, { name: 'target', value: '_blank' }],
      innerHTML: 'My current location'
    })

    appendChildElementToIdElement({
      id: 'displayed-messages',
      newElement: 'li',
      newChildElement: aTag
    })
  })

  messageFormSubmitEventListener(socket, createMessage)

  // NOTE: POC, will need cleanup and moving
  const sidebar = document.querySelector('.c-sidebar')
  sidebar.addEventListener('click', function() {
    const isOpenBool = this.className.split(' ').includes('is-open')
    if (isOpenBool) this.classList.remove('is-open')
    else this.classList.add('is-open')
  })
})()
