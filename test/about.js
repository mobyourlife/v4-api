'use strict';

var test = require('tape'),
	mongoose = require('mongoose'),
	about = require('../lib/about');

const DEFAULT_FANPAGE = '1446731825581145';

test('Setup', (t) => {
	mongoose.connect(process.env.MOBYOURLIFE_DATABASE);
	t.end();
});

test('About page should contain a default fanpage', (t) => {
	about.get(DEFAULT_FANPAGE)
		.then((data) => {
			t.ok(data);
			t.equal(data._id, DEFAULT_FANPAGE);
			t.end();
		});
});

test('Teardown', (t) => {
	mongoose.disconnect();
	t.end();
});
