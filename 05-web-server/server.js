var http = require('http');

var server = http.createServer(function(req /*IncomingMessage*/, res /*ServerResponse*/){
	console.log('a new connection established - ', req.url);
	res.write('<h1>Welcome to Node.js</h1>');
	res.end();
});

server.listen(8080);
