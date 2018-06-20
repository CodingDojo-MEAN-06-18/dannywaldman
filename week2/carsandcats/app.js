var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req,res){
    
        console.log(`requested url-> ${req.url}`);

        if(req.url === '/cars/new'){
            fs.readFile('./views/new_car.html','utf8',function(err, cnt){
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(cnt);
                    res.end();                    
                });
        }
        else if(req.url === '/cars'){
            fs.readFile('./views/cars.html','utf8',function(err, cnt){
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.write(cnt);
                    res.end();                    
                });
        }
        else if (req.url === '/cats'){
            fs.readFile('./views/cats.html','utf8',function(err,cnt){
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(cnt);
                    res.end();                   
                });
        }
        else if (req.url === '/images/red.jpg'){
            fs.readFile('./images/red.jpg',function(err,cnt){
                    res.writeHead(200,{'Content-Type':'image/jpg'});
                    res.write(cnt);
                    res.end();
                });
        }
        else if (req.url === '/images/yellow.jpeg'){
            fs.readFile('./images/yellow.jpeg',function(err,cnt){
                    res.writeHead(200,{'Content-Type':'image/jpeg'});
                    res.write(cnt);
                    res.end();
                });
        }            
        else if (req.url === '/images/cat1.jpeg'){
            fs.readFile('./images/cat1.jpeg',function(err,cnt){
                    res.writeHead(200,{'Content-Type':'image/jpeg'});
                    res.write(cnt);
                    res.end();
                });
        }            
        else if (req.url === '/images/cat2.jpeg'){
            fs.readFile('./images/cat2.jpeg',function(err,cnt){
                    res.writeHead(200,{'Content-Type':'image/jpeg'});
                    res.write(cnt);
                    res.end();
                });
        }            
        else if (req.url === '/stylesheets/main.css'){
            fs.readFile('./stylesheets/main.css','utf8',function(err,cnt){
                    res.writeHead(200,{'Content-Type':'text/css'});
                    res.write(cnt);
                    res.end();
                });
        }  else {
            res.writeHead(404);
            res.end('File not found!');
        }
    });

server.listen(8080, function(){
        console.log(`server is listening on port 8080`);
    });
