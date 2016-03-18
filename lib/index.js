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
  this.users = require('../entities/users')
  this.sites = require('../entities/sites')
  this.content = require('../entities/content')
}

module.exports = MobApi
