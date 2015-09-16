var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {

    var url = req.url;
    
    if (url === '/') {

        fs.readFile('index.html', function(err, data) {

            if (err){
                res.writeHead(500);
                res.write("opps a server error occoured : 500");

            } else {

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data, "utf8");
            }

            res.end();
            console.log('Connected ' + res.statusCode + ' ' + url);
    });

    }
    else if (url === '/about.html') {

        fs.readFile('about.html', function(err, data) {

            if (err){
                res.writeHead(500);
                res.write("opps a server error occoured : 500");

            } else {

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data, "utf8");
            }

            res.end();

            console.log('Connected ' + res.statusCode + ' ' + url);
        
        });

    }
    else if (url === '/contact.html') {

        fs.readFile('contact.html', function(err, data) {

            if (err){
                res.writeHead(500);
                res.write("opps a server error occoured : 500");

            } else {

                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data, "utf8");
            }

            res.end();

            console.log('Connected ' + res.statusCode + ' ' + url);
            
            });
    }
    else {
        res.writeHead(404);
        res.write("opps this doesn't exist - 404 " + url);
        res.end();

        console.log('Connected ' + res.statusCode + ' ' + url);
    }
    

});

server.listen(process.env.PORT || 8080);


