'use strict';

var mongoose = require('mongoose'),
	Fanpage = require('../models/fanpage');

module.exports = {};

module.exports.get = (id, cb) => {
	Fanpage.findOne({ _id: id }, (err, data) => {
		if (err) {
			cb(err);
		} else {
			cb(null, data);
		}
	});
};
