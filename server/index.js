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
  console.log('New user connected to chat server...');

  socket.on('createMessage', data => {
    const newData = { ...data, createAt: new Date() }
    io.emit('newMessage', newData) // this will emit any item emitted with `createMessage` to everyone connected at them time
  })
})

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
