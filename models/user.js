'use strict'

const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  // Local account
  email: { type: String, unique: true, required: true },

  // Password is optional because social login may be primary
  password: String,

  // Social logins
  social: {
    facebook: {
      token: String
    }
  }
})

module.exports = mongoose.model('User', UserSchema)
