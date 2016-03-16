'use strict'

const mongoose = require('mongoose')

const User = require('../models/user')

var ctrl = {}

ctrl.index = (req, res, next) => {
  User.find((err, users) => {
    if (err) throw err
    res.send(users)
    return next()
  })
}

module.exports = ctrl
