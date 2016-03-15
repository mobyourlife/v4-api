'use strict'

const mongoose = require('mongoose')

var SiteSchema = new mongoose.Schema({
  // Basic info
  name: { type: String, required: true },

  // Search engine optimisation
  description: String,
  keywords: String,

  // Site domains, include free subdomain and FQDNs
  domains: [
    {
      fqdn: String,
      primary: Boolean
    }
  ]
})

module.exports = mongoose.model('Site', SiteSchema)
