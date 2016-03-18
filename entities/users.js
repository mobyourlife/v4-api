'use strict'

const User = require('../models/user')

// Exported functions
module.exports = {
  list: ListUsers,
  get: GetUser,
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

/**
 * Get details of a given user.
 * @param {String} userId ID of the user to be queried.
 */
function GetUser (userId) {
  let promise = new Promise((resolve, reject) => {
    User.findOne({ id: siteId }, (err, row) => {
      if (err) {
        reject(err)
      } else {
        resolve(row)
      }
    })
  })

  return promise
}

/**
 * Create a new user.
 * @param {Object} userData User data to be created.
 */
function CreateUser (userData) {
  //
}

/**
 * Update data of an existing user.
 * @param {String} userId   ID of the user to be updated.
 * @param {Object} userData User data to be updated.
 */
function UpdateUser (userId, userData) {
  //
}

/**
 * Delete an existing user.
 * @param {String} userId ID of the user to be deleted.
 */
function DeleteUser (userId) {
  //
}
