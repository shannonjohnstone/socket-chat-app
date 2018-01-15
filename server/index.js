import path from 'path'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express'
import httpProxy from 'http-proxy'
import http from 'http'

// import http from 'http'
// import socketIO from 'socket.io'
// import routes from './routes'
// import socketConfiguration from './socketio'

require('./config')
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

// TODO: setup webpack middleware
// TODO: setup proxy of requests to api
const app = express()
const server = http.createServer(app)

if (process.env.NODE_ENV !== 'production') {
  console.log('NOT PRODUCTION');

  const webpack = require('webpack')

  const webpackConfig = require('../config/webpack.config.dev')
  const middlewareOptions = {
    stats: { colors: true },
    noInfo: false,
    lazy: false,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost"
    },
    publicPath: webpackConfig.output.publicPath
  }
  // console.log(webpackConfig.output, 'webpackConfig.output');
  const compiler = webpack(webpackConfig);
  const devMiddleware = require("webpack-dev-middleware")(compiler, middlewareOptions)
  const hotMiddleware = require("webpack-hot-middleware")(compiler, { 'log': console.log })
  // console.log(compiler, 'compiler');
  app.use(devMiddleware)
  app.use(hotMiddleware)

  app.use('*', function(req, res) {
    const index = devMiddleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, 'index.html'))
    return res.end(index)
  })
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')));
}

server.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
// server.createServer(function (req, res) {
//   console.log(req.headers.host, "req.headers.host");
//   proxy.web(req, res, { target: sites(req.headers.host) });
// }).listen(3000);

// function log_error(e,req){
//   if(e){
//     console.error(e.message);
//     console.log(req.headers.host,'-->',options[req.headers.host]);
//     console.log('-----');
//   }
// }

// const io = socketIO(server)

// socketConfiguration(io)

// Serve static

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.resolve(__dirname, '..', 'build')));
//   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')));
// }

// routes(app)
// socketConfiguration(io)

// server.listen(PORT, () => {
//   if (NODE_ENV !== 'production') {
//     console.log('Test server update babel...')
//     console.log(`Server running on http://localhost:${PORT}`)
//   }
// })
