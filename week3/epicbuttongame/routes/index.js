module.exports = function Route(app, server){
    const io = require('socket.io').listen(server);
    let count = 0;
    
    app.get('/', (request, response) => {
        response.render('index');
        });

    io.on('connection', socket => {
        socket.emit('number_changed', count);
    
        socket.on('incriment', data => {
            io.emit('number_changed', ++count);
            });    
        
        socket.on('reset', data => {
            count = 0;
            io.emit('number_changed', count);
            });    
        });
}
