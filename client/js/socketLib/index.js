import * as constants from '../../../config/constants'
import { log } from '../helpers'

export const createMessage = (socket, { from, message }) => {
  socket.emit(constants.CREATE_MESSAGE, { from, text: message }, data => log.info('Sent message successfully,', data))
}
