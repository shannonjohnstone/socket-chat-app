/* global io */
import * as constants from '../../constants'
import moment from 'moment';

let socket = undefined

console.log(io, 'io outside');
const init = (cb) => {
  console.log(io, 'io init');
  socket = io()
  socket.on('connect', () => console.log('Connected to server'))
  // socket.on('disconnect', () => console.log('Disconnect from server'))
  listenForMessages(cb)
}

const listenForMessages = (cb) => {
  socket.on(constants.NEW_MESSAGE, (data) => {
    const formatedData = { ...data, createAt: moment(data.createAt).format('h:mm:a') }
    cb(formatedData)
  })
}

export const createMessage = ({ from, message }) => {
  socket.emit(constants.CREATE_MESSAGE, { from, text: message }, data => console.log('Sent message successfully,', data))
}

export const messaging = {
  init,
  createMessage
}
