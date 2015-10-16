'use strict';

var about = require('../lib/about');

module.exports = {};

module.exports.get = (req, res, next) => {
	about.get(req.params.id)
		.then(
			(obj) => res.send(obj),
			(err) => res.status(500).send(err)
		)
		.then(next);
};
