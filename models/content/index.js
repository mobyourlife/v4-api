'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FacebookSchema = require('./facebook')

const ContentSchema = new Schema({
  siteId: { type: Schema.Types.ObjectId, required: true },

  // From which social network this content came from
  // facebook, instagram, linkedin, twitter
  sourceType: {
    type: String,
    enum: ['facebook']
  },

  // Content schema for Facebook
  facebook: FacebookSchema
})

module.exports = mongoose.model('Content', ContentSchema)
