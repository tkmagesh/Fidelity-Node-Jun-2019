var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url'),
	querystring = require('querystring'),
	calculator = require('./calculator');

/*
	dataParser.js
	serveStatic.js
	calculatorReqHandler.js
	notFoundHandler.js
*/
var staticExtns = ['.html', '.css', '.js', '.ico', '.jpg', '.png', '.xml', '.json'];

function isStatic(resourceName){
	var resourceExtn = path.extname(resourceName);
	return staticExtns.indexOf(resourceExtn) >= 0;
}

var server = http.createServer(function(req , res ){
	var urlObj = url.parse(req.url);
	var resourceName = urlObj.pathname === '/' ? '/index.html' : urlObj.pathname;
	console.log(req.method + '\t' + urlObj.pathname);

	if (isStatic(resourceName)){
		var resourceFullName = path.join(__dirname, resourceName);
		if (!fs.existsSync(resourceFullName)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourceFullName);
		stream.pipe(res);	
	} else if (urlObj.pathname === '/calculator'){
		if (req.method === 'GET'){
			var queryData = querystring.parse(urlObj.query),
				op = queryData.op,
				x = parseInt(queryData.x),
				y = parseInt(queryData.y),
				result = calculator[op](x,y);
			res.write(result.toString());
			res.end();
		} else if (req.method === 'POST'){
			var rawData = '';
			req.on('data', function(chunk){
				rawData += chunk;
			});
			req.on('end', function(){
				var bodyData = querystring.parse(rawData),
					op = bodyData.op,
					x = parseInt(bodyData.x),
					y = parseInt(bodyData.y),
					result = calculator[op](x,y);
				res.write(result.toString());
				res.end();
			});
		} else {
			res.statusCode = 400;
			res.end();
		}
	} else {
		res.statusCode = 404;
		res.end();
	}
	
});

server.listen(8080);
server.on('listening', function(){
	console.log('web-app-server listening on 8080...');
})
