var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response){
        console.log(`requested url ${request.url}`);
        
        if(request.url === '/'){
            fs.readFile('index.html','utf8',function(errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
                });        
        }
        else if (request.url === '/ninjas'){
            fs.readFile('ninjas.html', 'utf8',function(errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
                });
        }
        else if (request.url === '/dojos/new'){
            fs.readFile('dojos.html', 'utf8', function(errors, contents){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(contents);
                response.end();
                });
        }
        else {
            fs.readFile('error.html','utf8',function(errors, contents){
                response.writeHead(400, {'Content-Type':'text/html'});
                response.write(contents);
                response.end();
                });
        }
    });

server.listen(8080);

console.log('Server is listening on port 8080');
