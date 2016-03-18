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
  let promise = new Promise((resolve, reject) => {
    Site.find(filter, select, (err, rows) => {
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
 * Get details of a given website.
 * @param {String} siteId ID of the site to be queried.
 */
function GetSite (siteId) {
  let promise = new Promise((resolve, reject) => {
    Site.findOne({ id: siteId }, (err, row) => {
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
 * Create a new website.
 * @param {Object} siteData Site data to be created.
 */
function CreateSite (siteData) {
  let promise = new Promise((resolve, reject) => {
    var newSite = new Site(siteData)
    newSite.save((err) => {
      if (err) {
        reject(err)
      } else {
        resolve(newSite)
      }
    })
  })

  return promise
}

/**
 * Update data of an existing website.
 * @param {String} siteId   ID of the site to be updated.
 * @param {Object} siteData Site data to be updated.
 */
function UpdateSite (siteId, siteData) {
  let promise = new Promise((resolve, reject) => {
    Site.update({ id: siteId }, sitedata, { upsert: true }, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(siteData)
      }
    })
  })

  return promise
}

/**
 * Delete an existing website.
 * @param {String} siteId ID of the site to be deleted.
 */
function DeleteSite (siteId) {
  let promise = new Promise((resolve, reject) => {
    Site.findByIdAndRemove(siteId, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })

  return promise
}
