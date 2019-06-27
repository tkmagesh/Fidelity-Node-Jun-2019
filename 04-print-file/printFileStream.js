var fs = require('fs');

var stream = fs.createReadStream('./test1.txt', {encoding : 'utf8'});

/* open, data, end, close, error */

stream.on('data', function(chunk){
	console.log(chunk);
});

stream.on('error', function(err){
	console.log(err);
});

stream.on('end', function(){
	console.log('Thats all folks!');
});