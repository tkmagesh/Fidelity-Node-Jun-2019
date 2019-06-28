var http = require('http'),	
	path = require('path'),
	dataParser = require('./dataParser'),
	serveStatic = require('./serveStatic'),
	calculatorReqHandler = require('./calculatorReqHandler'),
	notFoundHandler = require('./notFoundHandler'),
	logger = require('./logger'),
	app = require('./app');

app.use(dataParser);
app.use(logger);
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(calculatorReqHandler);
app.use(notFoundHandler);


var server = http.createServer(app);

server.listen(8080);
server.on('listening', function(){
	console.log('web-app-server listening on 8080...');
})
