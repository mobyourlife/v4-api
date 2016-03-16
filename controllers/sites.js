'use strict'

const mongoose = require('mongoose')

const Site = require('../models/site')

var ctrl = {}

ctrl.index = (req, res, next) => {
  Site.find((err, sites) => {
    if (err) throw err
    res.send(sites)
    return next()
  })
}

module.exports = ctrl
