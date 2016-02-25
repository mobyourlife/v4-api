'use strict'

const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')
const Swagger = require('hapi-swagger')
const Package = require('./package')

// Initialise server
const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: process.env.PORT || 3000
})

// Add routes
const users = require('./controllers/users')

const routes = [].concat(
  users
)

server.route(routes)

// Documentation options
const options = {
  info: {
    title: Package.description,
    version: Package.version
  }
}

// Register server plugins
server.register([
  Inert,
  Vision,
  {
    register: Swagger,
    options: options
  }], (err) => {
    // Start the server
    server.start((err) => {
      if (err) {
        throw err
      } else {
        console.log(`API listening on ${server.info.uri}`)
      }
    })
  })