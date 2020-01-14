const path = require('path')
const liveServer = require('live-server')

const params = {
  port: 3000,
  host: '0.0.0.0',
  root: path.resolve(__dirname, './dist'),
  file: 'index.html'
}

liveServer.start(params)
