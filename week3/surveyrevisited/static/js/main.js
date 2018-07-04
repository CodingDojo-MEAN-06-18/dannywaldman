const socket = io.connect();

$(document).ready(() => {
    $('form').submit(e => {
        e.preventDefault();
        socket.emit('posting_form', $('form').serializeArray()); 
        });                

    socket.on("updated_message", data => {
        let html = '<ul>';
        for ( let item in data.response ) {
            html += `<li><Strong>${data.response[item].name} : </strong>${data.response[item].value}</li>`;
        }
        $('#message').html(html);
        $('#message').fadeIn(1000);
        });

    socket.on('random_number', data => {
        $('#lucky_number').html(`Your lucky number is ${JSON.stringify(data.response)}`);
        $('#lucky_number').fadeIn(1000);
        })
    
    });
