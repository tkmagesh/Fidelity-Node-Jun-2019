var http = require('http'),
	
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorReqHandler = require('./calculatorReqHandler'),
	notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req , res ){
	dataParser(req);
	console.log(req.method + '\t' + req.urlObj.pathname);
	serveStatic(req, res);
	calculatorReqHandler(req, res);
	notFoundHandler(res);	
});

server.listen(8080);
server.on('listening', function(){
	console.log('web-app-server listening on 8080...');
})
