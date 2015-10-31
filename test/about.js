'use strict';

var test = require('tape'),
	mongoose = require('mongoose'),
	about = require('../lib/about');

const DEFAULT_DATABASE = 'mongodb://localhost:27017/mobyourlife';
const DEFAULT_FANPAGE = '1446731825581145';

var database = process.env.MOBYOURLIFE_DATABASE || DEFAULT_DATABASE;

test('Setup', (t) => {
	if (database) {
		mongoose.connect(database);
	} else {
		t.fail('Database connection string not supplied!');
	}
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
