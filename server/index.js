const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const config = require('./config')

const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', (socket) => {
  console.log('Server connection from server/index...');
})

server.listen(config.PORT, () => console.log(`Server running on http://localhost:${config.PORT}`))
