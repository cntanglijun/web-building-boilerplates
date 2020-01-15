const { watch } = require('gulp')
const nodemon = require('nodemon')
const watcher = watch([ 'src/pages/**/entry.js' ])
const webpackCmdStr = '"webpack-dev-server --config config/webpack.dev.config.js --colors"'

nodemon(`-x ${ webpackCmdStr }`)
nodemon.on('start', () => console.log('App is starting...'))
nodemon.on('restart', () => console.log('App is restarting...'))
nodemon.on('quit', () => process.exit())

watcher.on('add', () => nodemon.emit('restart'))
watcher.on('unlink', () => nodemon.emit('restart'))
watcher.on('error', () => process.exit())
