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
      user_token: String,
      fanpages: [
        {
          _id: false,
          id: { type: String, required: true, index: true },
          name: String,
          access_token: String,
          category: String,
          category_list: [
            {
              _id: false,
              id: String,
              name: String
            }
          ],
          permissions: [String]
        }
      ]
    }
  }
})

module.exports = mongoose.model('User', UserSchema)
