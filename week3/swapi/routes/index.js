const axios = require('axios');

module.exports = function Route(app){   
    
    app.get('/fetch/:type', function(request, response){
        axios.get(`https://swapi.co/api/${request.params.type}/`)
            .then(data => {
                return response.json(data.data);
            })
            .catch(error => {
                return response.json(error);   
            })
        });
    
    app.get('/fetch/:type/:page', function(request, response){
        axios.get(`https://swapi.co/api/${request.params.type}/?page=${request.params.page}`)
            .then(data => {
                return response.json(data.data);
            })
            .catch(error => {
                return response.json(error);   
            })
        });
    

    app.get('/all/:type', function(request, response){
        let items = [];
        const all = function(type){                    
            let page = 1;
            const walk = function(page){                       
                axios.get(`https://swapi.co/api/${type}/?page=${page}`)
                    .then(results => {                        
                        for (var i = 0; i < results.data.results.length; i++){
                            items.push(results.data.results[i]);                                                  
                        }
                        console.log('running');             
                        console.log(items.length); 
                        page = results.data.next ? results.data.next.match(/\d+$/)[0] : 0;
                        if (page > 0){ 
                            return walk(page);
                        }
                        console.log(items);
                        return response.json(items);
                    })
                }
                walk(1);
        }
        all(request.params.type);
        })  
};
