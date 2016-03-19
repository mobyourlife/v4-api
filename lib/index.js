'use strict'

// Load modules
const mongoose = require('mongoose')

/**
 * Data access wrapper to the Mob Your Life API.
 */
function MobApi () {
  // Load settings
  const database = process.env.DATABASE || 'mongodb://localhost:27017/mobyourlife'

  // Connect to the database
  mongoose.connect(database)

  // Expose data entities
  this.users = require('../data/users')
  this.sites = require('../data/sites')
  this.content = require('../data/content')
}

module.exports = MobApi
