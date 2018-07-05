$(document).ready(()=> {
    const socket = io.connect();
    let user = null;

    (function() {
        user = prompt('enter your username to chat');
        socket.emit('page_load', { name : user });
        $('#message').focus();
    }())

    socket.on('chat_history_init', history => {
       for( let item in history ) {
            add(history[item].name, history[item].message);
       }
        });

    socket.on('new_user', message => {
        add('system', message);
        });

    socket.on('new_message', data => {
       add(data.name, data.message);
       $(document).scrollTop($(document).height());
        });

    $('form').submit(function(e){
        e.preventDefault();
        socket.emit('add_message', { name : user, message : $('#message').val() });
        $('form')[0].reset();
        });

    const add = (name, message) => $('table').append(`<tr><td class="w-25 text-right text-primary">${name} : </td><td>${message}</td></tr>`);

    });
