module.exports = (app, server) => {
    const io = require('socket.io').listen(server);
    let color = 'white';

    app.get('/', (request, response) => {
        response.render('index');
        });

    io.on('connection', socket => {
        socket.emit('color_changed', color);

        socket.on('change_color', clr => {
            color = clr;
            io.emit('color_changed', color);
            });
        });
}
