'use strict'

const Content = require('../models/content')

// Exported functions
module.exports = {
  list: ListContents,
  get: GetContent,
  create: CreateContent,
  update: UpdateContent,
  delete: DeleteContent
}

/**
 * List existing contents.
 * @param {Object} filter Filters to be applied in the query.
 * @param {Object} select Fields to be selected from the query.
 */
function ListContents (filter, select) {
  let promise = new Promise((resolve, reject) => {
    Content.find(filter, select, (err, rows) => {
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
 * Get details of a given content.
 * @param {String} userId ID of the content to be queried.
 */
function GetContent (contentId) {
  let promise = new Promise((resolve, reject) => {
    Content.findOne({ id: contentId }, (err, row) => {
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
 * Create a new content.
 * @param {Object} contentData Content data to be created.
 */
function CreateContent (contentData) {
  //
}

/**
 * Update data of an existing content.
 * @param {String} contentId   ID of the content to be updated.
 * @param {Object} contentData Content data to be updated.
 */
function UpdateContent (contentId, contentData) {
  //
}

/**
 * Delete an existing content.
 * @param {String} contentId ID of the content to be deleted.
 */
function DeleteContent (contentId) {
  //
}
