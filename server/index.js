import path from 'path'
import http from 'http'
import express from 'express'
import socketIO from 'socket.io'

import { PORT } from './config'

const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('Server connection from server/index...');

  socket.emit('newMessage', {
    text: 'This is a new message coming from the server',
    createAt: new Date(),
    user: 'user 1'
  })

  socket.on('createMessage', data => {
    const newData = { ...data, createAt: new Date() }
    console.log(newData, 'createMessage from UI')
  })
})

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
