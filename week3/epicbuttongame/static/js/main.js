const socket = io.connect();

$(document).ready(() => {
    $('#incriment').click( e => socket.emit('incriment') );
    $('#reset').click( e => socket.emit('reset') );
    
    socket.on('number_changed', count => {
        $('#number').html(count);
        })    
    });
