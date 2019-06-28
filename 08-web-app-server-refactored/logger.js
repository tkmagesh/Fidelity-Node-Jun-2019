var chalk = require('chalk');

module.exports = function(req, res, next){
	var logMessage = chalk.red(req.method) + '\t' + chalk.blue(req.urlObj.pathname);
	var startTime = new Date();
	res.on('finish', function(){
		var endTime = new Date(),
			elapsed = endTime - startTime;
		logMessage += '\t' + chalk.cyan(res.statusCode) + '\t' + chalk.yellow(elapsed) + 'ms';
		console.log(logMessage);
	});
	next();
}