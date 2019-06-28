var path = require('path'),
	fs = require('fs');

var staticExtns = ['.html', '.css', '.js', '.ico', '.jpg', '.png', '.xml', '.json'];

function isStatic(resourceName){
	var resourceExtn = path.extname(resourceName);
	return staticExtns.indexOf(resourceExtn) >= 0;
}

module.exports = function(staticResourcePath){
	return function(req, res, next){
		var resourceName = req.urlObj.pathname === '/' ? '/index.html' : req.urlObj.pathname;
		
		if (isStatic(resourceName)){
			var resourceFullName = path.join(staticResourcePath, resourceName);
			if (!fs.existsSync(resourceFullName)){
				res.statusCode = 404;
				res.end();
				return;
			}
			var stream = fs.createReadStream(resourceFullName);
			stream.pipe(res);	
			stream.on('end', function(){
				next();
			});
		} else {
			next();
		}
	};
}