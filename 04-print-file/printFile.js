var fs = require('fs');

fs.readFile('./test.txt', { encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log(err);
		return;
	}
	console.log(fileContents);
	console.log('Thats all folks!!');
});
