import * as constants from '../../../config/constants'
console.log(constants, 'constants socket');
export const createMessage = (socket, { from, message }) => {
  socket.emit(constants.CREATE_MESSAGE, { from, text: message }, data => console.log('Sent message successfully,', data))
}
