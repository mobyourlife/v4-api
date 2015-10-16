'use strict';

var about = require('../lib/about');

module.exports = {};

module.exports.get = (req, res, next) => {
	console.log(`GET about: ${req.params.id}`);
	about.get(req.params.id, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.send(data);
		}
		next();
	});
};
