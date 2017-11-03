const path = require('path')
const express = require('express')

const config = require('./config')

const publicPath = path.join(__dirname, '../public')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`)
})

app.listen(config.PORT, () => console.log(`Server running on http://localhost:${config.PORT}`))
