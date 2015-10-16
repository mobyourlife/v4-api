var restify = require('restify'),
	mongoose = require('mongoose'),
	package = require('./package'),
	about = require('./controllers/about');

var server = restify.createServer({
	name: package.name,
	version: package.version
});

mongoose.connect(process.env.MOBYOURLIFE_DATABASE);

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/about/:id', about.get);

server.listen(port, () => {
	console.log('%s listening at %s', server.name, server.url);
});
