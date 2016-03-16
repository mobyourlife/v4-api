'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FacebookSchema = require('./facebook')

const ContentSchema = new Schema({
  // From which social network this content came from
  // facebook, instagram, linkedin, twitter
  sourceType: String,

  // Content schema for Facebook
  facebook: FacebookSchema
})

module.exports = mongoose.model('Content', ContentSchema)
