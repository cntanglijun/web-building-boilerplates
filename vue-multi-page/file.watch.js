const { watch } = require('gulp')
const { spawn } = require('child_process')
const watcher = watch([ 'src/pages/**/*.vue' ])
const app = spawn('nodemon', [ '-x', 'webpack-dev-server --config config/webpack.dev.config.js --colors' ])

function handleMsg(event) {
  switch(event.type) {
    case 'start':
      console.log('nodemon started')
      break
    case 'crash':
      console.log('script crashed for some reason')
      break
  }
}

app.on('exit', () => console.log('nodemon quit'))
app.on('message', event => handleMsg(event))

watcher.on('add', () => app.send('restart'))
watcher.on('unlink', () => app.send('restart'))
watcher.on('error', () => app.send('quit'))
