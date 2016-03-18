'use strict'

const Users = require('../entities/users')

var ctrl = {}

// List all registered users
ctrl.index = (req, res, next) => {
  let success = (users) => res.send(users)
  let failure = (err) => res.status(500).send(err)

  Users.list()
    .then(success)
    .catch(failure)
    .then(next)
}

module.exports = ctrl
