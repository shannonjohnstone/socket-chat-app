import { NEW_MESSAGE, CREATE_MESSAGE } from '../constants'

export const createMessage = (socket, { from, message }) => {
  socket.emit(CREATE_MESSAGE, { from, text: message }, data => console.log('Sent message successfully,', data))
}
