'use strict';

var should = require('should'),
	about = require('../lib/about');

const DEFAULT_FANPAGE = 1446731825581145;

describe('About page', () => {
	it('should contain a default fanpage', (done) => {
		about.get(DEFAULT_FANPAGE)
			.then((obj) => {
				data.should.be.ok();
				data.should.have.property('_id').and.equal(DEFAULT_FANPAGE);
			})
			.then(done);
	});
});
