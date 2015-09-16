var fs = require('fs');

fs.readFile('text.txt', function (err, data) {
	
	// data is a Buffer, use toString() or + '' to change it to a string
	// or put 'utf-8' as a 2nd parameter in the readFile function
	console.log(data.toString()); 
});
