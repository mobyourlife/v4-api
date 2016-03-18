'use strict'

const Content = require('../models/content')

var ctrl = {}

ctrl.index = (req, res, next) => {
  Content.find((err, contents) => {
    if (err) throw err
    res.send(contents)
    return next()
  })
}

module.exports = ctrl
