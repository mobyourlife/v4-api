'use strict';

var Fanpage = require('../models/fanpage');

module.exports = {};

module.exports.get = (id) => {

	let promise = new Promise((resolve, reject) => {
		Fanpage.findOne({ _id: id }, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
	return promise;
};
