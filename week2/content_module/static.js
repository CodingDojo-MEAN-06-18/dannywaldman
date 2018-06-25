module.exports = function(request,response){
    let fs = require('fs');
    fs.readFile('./views/new_car.html','utf8',function(err, cnt){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(cnt);
        response.end();                    
        });    
};
