module.exports = (app, server) => {
    const io = require('socket.io').listen(server);
    const messages = [];
    const users = [];

    io.on('connection', socket =>{
        socket.emit('chat_history_init', messages);

        socket.on('page_load', data => {
            if (!users.includes(data.user)) {
                io.emit('new_user', `User ${data.name} has joined.`);
                users.push(data.name);
            }
            });

        socket.on('add_message', data => {
            let message = {name : data.name, message : data.message};
            messages.push(message);
            io.emit('new_message', message);
            });

        });
    }
