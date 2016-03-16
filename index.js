'use strict'

// Load settings
const info = require('./package')
const port = process.env.PORT || 3000
const database = process.env.DATABASE || 'mongodb://localhost:27017/mobyourlife'

// Load modules
const restify = require('restify')
const bunyan = require('bunyan')
const mongoose = require('mongoose')

// Initialise logging
const log = bunyan.createLogger({
  name: info.name
})

// Setup Restify parameters
var server = restify.createServer({
  name: info.name,
  version: info.version,
  log: log
})

// Log all requests
server.on('after', restify.auditLogger({ log: log }))

// Connect to the database
mongoose.connect(database)

// Setup routing
const users = require('./controllers/users')
server.get('/users', users.index)

const sites = require('./controllers/sites')
server.get('/sites', sites.index)

// Start listening Restify
server.listen(port, () => {
  log.info(`${server.name} listening at ${server.url}`)
})
