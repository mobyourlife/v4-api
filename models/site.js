'use strict'

const mongoose = require('mongoose')

var SiteSchema = new mongoose.Schema({
  // Basic info
  name: { type: String, required: true },

  // Date events
  created_time: Date,
  updated_time: Date,

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
            issued_by: String,
            issued_time: Date,
            expiration_time: Date,
            path: String,
            chksum: String
          }
        ]
      },

      // Date events
      created_time: Date,
      updated_time: Date,

      // Keep track of DNS records to popup misconfiguration warnings
      records: [
        {
          type: String,
          name: String,
          value: String
        }
      ]
    }
  ]
})

module.exports = mongoose.model('Site', SiteSchema)
