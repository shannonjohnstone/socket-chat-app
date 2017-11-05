require('./config')

import path from 'path'
import http from 'http'
import express from 'express'
import socketIO from 'socket.io'

const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const PORT = process.env.PORT

if (process.env.NODE_ENV !== 'production') app.use(express.static(publicPath))
else app.use(express.static(`${publicPath}/index-dev.html`))

io.on('connection', (socket) => {
  console.log('New user connected to chat server...');

  socket.on('createMessage', data => {
    const newData = { ...data, createAt: new Date() }
    io.emit('newMessage', newData) // this will emit any item emitted with `createMessage` to everyone connected at them time
  })
})

server.listen(PORT, () => {
  console.log(process.env.NODE_ENV, 'NODE_ENV');
  if (PORT !== 'production') {
    console.log('Test server update babel...')
    console.log(`Server running on http://localhost:${PORT}`)
  }
})
