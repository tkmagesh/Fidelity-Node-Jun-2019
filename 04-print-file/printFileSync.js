var fs = require('fs');

try{
	var fileContents = fs.readFileSync('./test1.txt', { encoding : 'utf8'}, );

	console.log(fileContents);
	console.log('Thats all folks!!');
} catch(err){
	console.log(err);
}
