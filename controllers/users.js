'use strict'

const Std = require('../lib/standard')

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
          offset: Std.Fields.offset,
          limit: Std.Fields.limit
        }
      },
      handler: (req, reply) => {
        reply({ id: 0 })
      }
    }
  }
]
