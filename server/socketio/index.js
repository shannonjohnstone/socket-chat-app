import * as constants from '../../config/constants'
import { generateMessage } from '../utils/message'

console.log(constants, 'constants server');
export default function (io) {
  console.log('SOCKET CONFIG');
  io.on('connection', (socket) => {
    console.log('New user connected to chat server...');

    socket.emit(constants.NEW_MESSAGE, generateMessage(constants.ADMIN, constants.ADMIN_WELCOME_MESSAGE))
    socket.broadcast.emit(constants.NEW_MESSAGE, generateMessage(constants.ADMIN, constants.NEW_USER_ENTERED_MESSAGE))
    socket.on(constants.CREATE_LOCATION_MESSAGE, (coords) => {
      io.emit(constants.NEW_MESSAGE, generateMessage(constants.ADMIN, `${coords.latitude}, ${coords.longitude}`))
    })
    socket.on(constants.CREATE_MESSAGE, (data, cb) => {
      io.emit(constants.NEW_MESSAGE, generateMessage(data.from, data.text))
      cb('This is from the server')
    })
  })
}
