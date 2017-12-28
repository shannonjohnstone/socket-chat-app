require('./config')

import path from 'path'
import http from 'http'
import express from 'express'
import pug from 'pug'
const webpack = require('webpack')
import socketIO from 'socket.io'
import routes from './routes'
import socketConfiguration from './socketio'

// const webpackConfig from '../webpack.config'

const publicPath = path.join(__dirname, '../dist')
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')

console.log('TEST');
app.use(express.static(publicPath))
routes(app)

socketConfiguration(io)

server.listen(PORT, () => {
  if (NODE_ENV !== 'production') {
    console.log('Test server update babel...')
    console.log(`Server running on http://localhost:${PORT}`)
  }
})
