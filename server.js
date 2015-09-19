var http = require('http');

http.createServer(function(req, res) {
	console.log(req.method + " " + req.url);
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n');
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('Page not found\n');
	}
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337');
