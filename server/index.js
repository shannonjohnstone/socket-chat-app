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

import routes from './routes'
import socketConfiguration from './socketio'

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.set('views', path.join(__dirname, '../public', 'views'))
app.set('view engine', 'pug')
app.use(express.static(publicPath))

routes(app)
socketConfiguration(io)

server.listen(PORT, () => {
  if (NODE_ENV !== 'production') {
    console.log('Test server update babel...')
    console.log(`Server running on http://localhost:${PORT}`)
  }
})
