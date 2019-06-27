var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url');
	

var server = http.createServer(function(req , res ){
	
	var urlObj = url.parse(req.url);
	
	var resourceName = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname;
	console.log(req.method + '\t' + urlObj.pathname);

	var resourceFullName = path.join(__dirname, resourceName);
	if (!fs.existsSync(resourceFullName)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(resourceFullName);
	stream.pipe(res);
});

server.listen(8080);
server.on('listening', function(){
	console.log('server listening on 8080...');
})
