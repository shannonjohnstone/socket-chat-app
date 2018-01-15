import io from 'socket.io-client' // Non proxy version
import * as constants from '../../constants'
import moment from 'moment';

let socket = undefined

// console.log(io, 'io outside');
const init = (cb) => {
  socket = io('http://localhost:3001', { path: '/chatty/socket.io' }) // Non proxy version
  socket.on('connect', () => console.log('Connected to server'))
  listenForMessages(cb)
}

const listenForMessages = (cb) => {
  socket.on(constants.NEW_MESSAGE, (data) => {
    console.log('NEW_MESSAGE...');
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
