'use strict'

const Site = require('../models/site')

// Exported functions
module.exports = {
  list: ListSites,
  create: CreateSite,
  update: UpdateSite,
  delete: DeleteSite
}

/**
 * List existing websites.
 * @param {Object} filter Filters to be applied in the query.
 * @param {Object} select Fields to be selected from the query.
 */
function ListSites (filter, select) {
  //
}

/**
 * Create a new website.
 * @param {Object} siteData Site data to be created.
 */
function CreateSite (siteData) {
  //
}

/**
 * Update data of an existing website.
 * @param {String} siteId   ID of the site to be updated.
 * @param {Object} siteData Site data to be updated.
 */
function UpdateSite (siteId, siteData) {
  //
}

/**
 * Delete an existing website.
 * @param {String} siteId ID of the site to be deleted.
 */
function DeleteSite (siteId) {
  //
}
