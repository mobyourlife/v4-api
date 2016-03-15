'use strict'

const Std = require('../lib/standard')

const response = Joi.object({
  id: Std.Fields.id
})

module.exports = [
  // List all registered users
  {
    method: 'GET',
    path: '/users',
    config: {
      tags: [ 'api' ],
      description: 'Lista todos os usuários cadastrados.',
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
