const path = require('path')
const http = require('http')
const express = require('express')

const config = require('./config')

const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)

app.use(express.static(publicPath))

server.listen(config.PORT, () => console.log(`Server running on http://localhost:${config.PORT}`))
