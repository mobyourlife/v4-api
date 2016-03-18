'use strict'

const User = require('../../models/user')

// Exported functions
module.exports = {
  list: ListUsers,
  create: CreateUser,
  update: UpdateUser,
  delete: DeleteUser
}

/**
 * List registered users.
 * @param {Object} filter Filters to be applied in the query.
 * @param {Object} select Fields to be selected from the query.
 */
function ListUsers (filter, select) {
  let promise = new Promise((resolve, reject) => {
    User.find(filter, select, (err, rows) => {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })

  return promise
}

function CreateUser (userData) {
  //
}

function UpdateUser (userId, userData) {
  //
}

function DeleteUser (userId) {
  //
}
