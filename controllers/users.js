'use strict'

// Load users entity
const Users = require('../entities/users')

// Exported controllers
module.exports = {
  index: Index
}

// List all registered users
function Index (req, res, next) {
  const success = (data) => res.send(data)
  const failure = (err) => res.status(500).send(err)

  Users.list()
    .then(success)
    .catch(failure)
    .then(next)
}
