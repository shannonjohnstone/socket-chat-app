import { generateMessage } from '../utils/message'

export default function (io) {
  io.on('connection', (socket) => {
    console.log('New user connected to chat server...');

    socket.emit('newMessage', generateMessage('admin', 'Welcome to the chat.'))
    socket.broadcast.emit('newMessage', generateMessage('admin', 'New user has entered the chat room.'))

    socket.on('createMessage', data => {
      socket.broadcast.emit('newMessage', generateMessage(data.from, data.text))
    })
  })
}
