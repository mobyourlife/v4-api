'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  // Local account
  name: String,
  email: { type: String, unique: true, required: true },

  // Date events
  createdTime: Date,
  updatedTime: Date,

  // Password is optional because social login may be primary
  password: String,

  // Social logins
  social: {
    facebook: {
      _id: { type: String, requied: true },

      name: String,
      email: String,

      // Personal user token
      userToken: String,

      // Date events
      createdTime: Date,
      updatedTime: Date,

      // Fanpages list
      fanpages: [
        {
          _id: { type: String, required: true },
          name: String,

          // Page token and permissions
          accessToken: String,
          permissions: [String],

          // Page categories
          category: String,
          categoryList: [
            {
              _id: { type: String, required: true },
              name: String
            }
          ]
        }
      ]
    }
  }
})

module.exports = mongoose.model('User', UserSchema)
