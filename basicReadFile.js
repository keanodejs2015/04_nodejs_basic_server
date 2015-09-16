var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

    fs.readFile('index.html', function(err, data) {

        if (err){
            res.writeHead(500);
            res.write("opps a server error occoured : 500");

        } else {

            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data, "utf8");
        }

        res.end();
        console.log('Connected ' + res.statusCode + ' ' + req.url);
    });
 
});

server.listen(8080);

