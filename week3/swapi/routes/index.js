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
};
