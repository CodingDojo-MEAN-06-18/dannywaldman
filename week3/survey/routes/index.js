module.exports = function Route(app){
    app.post('/results', (request, response) => {
        response.render('results', {'details' : {name : request.body.name, location : request.body.location, language : request.body.language, comments : request.body.comments}});            
    });
};
