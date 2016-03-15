'use strict'

const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  // Local account
  email: { type: String, unique: true, required: true },

  // Date events
  created_time: Date,
  updated_time: Date,

  // Password is optional because social login may be primary
  password: String,

  // Social logins
  social: {
    facebook: {
      // Personal user token
      user_token: String,

      // Date events
      created_time: Date,
      updated_time: Date,

      // Fanpages list
      fanpages: [
        {
          _id: false,
          id: { type: String, required: true, index: true },
          name: String,

          // Page token and permissions
          access_token: String,
          permissions: [String]

          // Page categories
          category: String,
          category_list: [
            {
              _id: false,
              id: String,
              name: String
            }
          ]
        }
      ]
    }
  }
})

module.exports = mongoose.model('User', UserSchema)
