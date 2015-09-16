var http = require('http');

var server = http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<h3>Hello World</h3>');
    res.end('<p>end hello<p>'); // could be empty, or have all text

    console.log('Request ' + res.statusCode);
});

server.listen(8001);