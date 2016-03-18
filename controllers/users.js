'use strict'

const Users = require('../entities/users')

module.exports = {
  index: Index
}

// List all registered users
function Index (req, res, next) {
  let success = (users) => res.send(users)
  let failure = (err) => res.status(500).send(err)

  Users.list()
    .then(success)
    .catch(failure)
    .then(next)
}
