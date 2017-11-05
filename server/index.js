require('./config')

import path from 'path'
import http from 'http'
import express from 'express'
import pug from 'pug'
import socketIO from 'socket.io'

const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.set('views', path.join(__dirname, '../public', 'views'))
app.set('view engine', 'pug')

app.use(express.static(publicPath))

app.get('/', (req, res) => {
  res.render('index.pug', {
    isDevelopment: NODE_ENV === 'development',
    title: 'Chat Application'
  })
})
console.log('test');
io.on('connection', (socket) => {
  console.log('New user connected to chat server...');

  socket.on('createMessage', data => {
    const newData = { ...data, createAt: new Date() }
    socket.broadcast.emit('newMessage', newData) // this will emit any item emitted with `createMessage` to everyone connected at them time
  })
})

server.listen(PORT, () => {
  if (NODE_ENV !== 'production') {
    console.log('Test server update babel...')
    console.log(`Server running on http://localhost:${PORT}`)
  }
})
