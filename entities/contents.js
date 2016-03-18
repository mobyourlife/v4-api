'use strict'

const Content = require('../models/content')

// Exported functions
module.exports = {
  list: ListContents,
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
  //
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
