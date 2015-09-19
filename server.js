var express = require('express');
var app = express();

function root(req, res) {
	res.setHeader("Content-Type", 'text/txt');
	res.send('Hello world');
}

function market(req, res) {
	var id = req.params.id;

	res.setHeader("Content-Type", 'text/html');
	res.send('<html><body><h1>Welcome to Market ' + id + ' </h1><p>The best market site ever created!.</p></body></html>');
}

// Routes
app.get('/', root);
app.get('/market/:id', market);

var server = app.listen(3000, '127.0.0.1', function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server running on:' + host + ":" + port);

});

