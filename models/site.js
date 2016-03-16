'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

var SiteSchema = new Schema({
  // Basic info
  name: { type: String, required: true },

  // Date events
  createdTime: Date,
  updatedTime: Date,

  // Search engine optimisation
  description: String,
  keywords: String,

  // Site domains list
  domains: [
    {
      // FQDN, even if mob subdomain (e.g. coruscant.meusitemob.com.br)
      fqdn: String,

      // All requests will be redirected to the primary domain
      primary: Boolean,

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
      },

      // Date events
      createdTime: Date,
      updatedTime: Date,

      // Keep track of DNS records to popup misconfiguration warnings
      records: [
        {
          type: String,
          name: String,
          value: String
        }
      ]
    }
  ],

  // Data sources
  sources: {
    facebook: {
      fanpages: [
        _id :false,
        id: { type: String, required: true }
      ]
    }
  }
})

module.exports = mongoose.model('Site', SiteSchema)
