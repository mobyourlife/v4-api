'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SiteSchema = new Schema({
  // Basic info
  name: { type: String, required: true },

  // Date events
  createdTime: Date,
  updatedTime: Date,

  // Search engine optimisation
  description: String,
  keywords: String,

  // Basic info about the website
  info: {
    location: {
      address: String,
      parking: {
        lot: Number,
        street: Number,
        valet: Number
      }
    },

    company: {
      founded: String
    }
  },

  // Site domains list
  domains: [
    {
      // FQDN, even if mob subdomain (e.g. coruscant.meusitemob.com.br)
      _id: { type: String, required: true },

      // All requests will be redirected to the primary domain
      primary: { type: Boolean, required: true },

      // Date events
      createdTime: Date,
      updatedTime: Date,
      expiresTime: Date,

      // Keep track of DNS records to popup misconfiguration warnings
      records: [
        {
          type: { type: String, required: true },
          name: { type: String, required: true },
          value: { type: String, required: true }
        }
      ],

      // SSL certificates
      ssl: {
        enabled: Boolean,
        certificates: [
          {
            issuedBy: String,
            issuedTime: Date,
            expirationTime: Date,
            path: String,
            chksum: String
          }
        ]
      }
    }
  ],

  // Data sources
  sources: {
    facebook: {
      fanpages: [
        {
          _id: { type: Number, required: true },

          // Latest sync event dates
          latestSync: {
            about: Date,
            picture: Date,
            posts: Date,
            albums: Date,
            photos: Date,
            videos: Date
          }
        }
      ]
    }
  }
})

module.exports = mongoose.model('Site', SiteSchema)
