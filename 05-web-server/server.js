var http = require('http'),
	fs = require('fs');

var server = http.createServer(function(req /*IncomingMessage*/, res /*ServerResponse*/){
	if (req.url === '/'){
		var stream = fs.createReadStream('./index.html');
		stream.on('data', function(chunk){
			res.write(chunk);
		});
		stream.on('end', function(){
			res.end();
		});
	} else {
		res.statusCode = 404;
		res.end();
	}

});

server.listen(8080);
