'use strict'

// Load settings
const info = require('./package')
const port = process.env.PORT || 3000

// Load modules
const restify = require('restify')
const bunyan = require('bunyan')

// Initialise logging
const log = bunyan.createLogger({
  name: info.name
})

// Setup Restify parameters
var server = restify.createServer({
  name: info.name,
  version: info.version,
  log :log
})

// Logging format
const requestLog = (req) => {
  let data = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    statusCode: req.statusCode,
    statusMessage: req.statusMessage
  }
  return data
}

// Log requests
server.pre((req, res, next) => {
  req.log.info(requestLog(req), 'start')
  return next()
})

// Log responses
server.on('after', (req, res, next) => {
  req.log.info(requestLog(res), 'finished')
  return next()
})

// Setup routing
server.get('/hello', (req, res, next) => {
  res.send({ message: 'It works!' })
  return next()
})

// Start listening Restify
server.listen(port, () => {
  log.info(`${server.name} listening at ${server.url}`)
})
