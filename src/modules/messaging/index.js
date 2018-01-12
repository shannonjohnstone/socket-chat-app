/* global io */
import * as constants from '../../constants'
import moment from 'moment';

let socket = undefined
// socket.on('disconnect', () => console.log('Disconnect from server'))

const init = (dispatch) => {
  socket = io()
  socket.on('connect', () => console.log('Connected to server'))
  listenForMessages(dispatch)
}

const listenForMessages = (dispatch) => {
  socket.on(constants.NEW_MESSAGE, (data) => {
    const formatedData = {
      ...data,
      createAt: moment(data.createAt).format('h:mm:a')
    }
    dispatch({ type: 'NEW_MESSAGE', data: formatedData })
    // const nameAndTime = createElement('p')
    // nameAndTime.appendChild(createTextNode(`${data.from} ${formattedTime}: `))
    // appendChildElementsToIdElement({
    //   id: 'displayed-messages',
    //   newElement: 'div',
    //   newElementsArray: [nameAndTime, createTextNode(data.text)]
    // })
    // scrollToBottom()
  })
}

export const createMessage = ({ from, message }) => {
  socket.emit(constants.CREATE_MESSAGE, { from, text: message }, data => console.log('Sent message successfully,', data))
}

export const messaging = {
  init,
  createMessage
}
