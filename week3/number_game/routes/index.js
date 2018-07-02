module.exports = function Route(app){   
    app.get('/', (request, response) => {
        if (!request.session.number){
            request.session.number = Math.floor(Math.random() * (101)) + 1;
        }
        if (!request.session.answer){
            request.session.answer = 'start';
        }
        console.log(`number: ${request.session.number}; answer: ${request.session.answer}`);
        response.render('index', {number : request.session.number, answer : request.session.answer});   
    });

    app.post('/process', (request, response) => {
        if (request.body.action == 'try'){
            let guess = request.body.guess;
            if ( guess > request.session.number) {
                request.session.answer = 'badhigh';
            } else if ( guess < request.session.number) {
                request.session.answer = 'badlow';
            } else {
                request.session.answer = 'good';
            }
        } else if ( request.body.action == 'reset' ) {
            request.session.destroy();
        }
        response.redirect('/');
    });
};
