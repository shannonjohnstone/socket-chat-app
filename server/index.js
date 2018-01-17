
/* eslint global-require: 0 */


import path from 'path';
import express from 'express';
// import httpProxy from 'http-proxy';
import http from 'http';

require('./config');

const { PORT, NODE_ENV } = process.env;

// TODO: setup proxy of requests to api
const app = express();
const server = http.createServer(app);

if (NODE_ENV !== 'production') {
  console.log('NOT PRODUCTION'); // eslint-disable-line

  const webpack = require('webpack'); // eslint-disable-line

  const webpackConfig = require('../config/webpack.config.dev');
  const middlewareOptions = {
    stats: { colors: true },
    noInfo: false,
    lazy: false,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost'
    },
    publicPath: webpackConfig.output.publicPath
  };

  const compiler = webpack(webpackConfig);
  const devMiddleware = require("webpack-dev-middleware")(compiler, middlewareOptions) // eslint-disable-line
  const hotMiddleware = require("webpack-hot-middleware")(compiler, { 'log': console.log }) // eslint-disable-line
  // console.log(compiler, 'compiler');
  app.use(devMiddleware);
  app.use(hotMiddleware);

  app.use('*', (req, res) => {
    const index = devMiddleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, 'index.html'));
    return res.end(index);
  });
}

if (NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html')));
}

server.listen(PORT, (err) => {
  if (err) {
    return console.error(err); // eslint-disable-line
  }

  return console.log('Listening at http://localhost:3000/'); // eslint-disable-line
});
