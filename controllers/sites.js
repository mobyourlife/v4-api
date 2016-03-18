'use strict'

const Site = require('../models/site')

var ctrl = {}

ctrl.index = (req, res, next) => {
  Site.find((err, sites) => {
    if (err) throw err
    res.send(sites)
    return next()
  })
}

ctrl.get = (req, res, next) => {
  Site.findOne({ _id: req.params.id }, (err, site) => {
    if (err) throw err
    res.send(site)
    return next()
  })
}

module.exports = ctrl
