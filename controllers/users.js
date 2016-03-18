'use strict'

const mongoose = require('mongoose')

const Users = require('../entities/users')

var ctrl = {}

// Index controller will list all registered users
ctrl.index = (req, res, next) => {
  Users.list().then((users) => {
    res.send(users)
    return next()
  }, (err) => {
    res.status(500).send(err)
    return next()
  })
}

module.exports = ctrl
