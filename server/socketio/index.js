import { NEW_MESSAGE, CREATE_MESSAGE, ADMIN, ADMIN_WELCOME_MESSAGE, NEW_USER_ENTERED_MESSAGE } from '../constants'
import { generateMessage } from '../utils/message'

export default function (io) {
  console.log('SOCKET CONFIG');
  io.on('connection', (socket) => {
    console.log('New user connected to chat server...');

    socket.emit(NEW_MESSAGE, generateMessage(ADMIN, ADMIN_WELCOME_MESSAGE))
    socket.broadcast.emit(NEW_MESSAGE, generateMessage(ADMIN, NEW_USER_ENTERED_MESSAGE))
    socket.on(CREATE_MESSAGE, (data, cb) => {
      io.emit(NEW_MESSAGE, generateMessage(data.from, data.text))
      cb('This is from the server')
    })
  })
}
