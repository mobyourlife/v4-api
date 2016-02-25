'use strict'

const Joi = require('joi')

module.exports = [
  // List all registered users
  {
    method: 'GET',
    path: '/users',
    config: {
      tags: [ 'api' ],
      description: 'List all registered users.',
      validate: {
        params: {
          offset: Joi.number()
            .default(0)
            .description('Which index to start reading.'),
          limit: Joi.number()
            .default(10)
            .description('How many users to read at a time.')
        }
      },
      handler: (req, reply) => {
        reply({ id: 0 })
      }
    }
  }
]
