$(document).ready(()=>{
    const socket = io.connect();
    
    $('button').click(function() {
        socket.emit('change_color', $(this).attr('color'));
    });
    
    socket.on('color_changed', color => {
        $('body').css('background-color', color);
        });    
    });
