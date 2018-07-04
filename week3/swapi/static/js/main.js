$(document).ready(function(){
    $('#all button').hide();
    $('#next button').hide();
    $('#previous button').hide();
    $('button.get').click(function(){
        const type = $(this).attr('ref');
        $(`#all button`).attr('ref', type);
        $.get(`/fetch${type}`, function(data){
            let next = data.next ? data.next.match(/\d+$/)[0] : 0;
            let previous = data.previous ? data.previous.match(/\d+$/)[0] : 0;
            setAll(data.count, type.slice(1));
            set(next, 'next', type);
            set(previous, 'previous', type);
            setResults(data.results);
        }, 'json');

    });

    $('button.page').click(function(){
        const type = $(this).attr('type');
        const page = $(this).attr('page');
        getData(type, page)
            .then(function(data){                    
                let next = data.next ? data.next.match(/\d+$/)[0] : 0;
                let previous = data.previous ? data.previous.match(/\d+$/)[0] : 0;                
                setAll(data.count, type.slice(1));
                set(next, 'next', type);
                set(previous, 'previous', type);
                setResults(data.results);
            })
            .catch(function(error){
                console.log(error);    
            });
    });

    $('button.all').click(function(){
        const type = $(this).attr('ref');
        $('#all button').hide();
        $('#next button').hide();
        $('#previous button').hide();
        $('#results').html('Getting data, sit tight...');
        $.get(`/all${type}`, function(data){
            setResults(data);
        }, 'json')
        .fail(function(jqxhr, textStatus, errorThrown){
            console.log(errorThrown);
            }
        );
    });

    const setResults = (data) => {
        $('#results').html('');
        for (let i = 0; i < data.length; i++){
            $('#results').append(`<p>${data[i].name}</p>`);
        }
    }

    const setAll = (num, type) => {
        $('#all button').show();
        $('#all button').html(`Get all ${num} ${type}`);
    }

    const set = (num, nav, type) => {
       if ( num > 0 ) {
            $(`#${nav} button`).show();
            $(`#${nav} button`).html(`Get page ${num}`);
            $(`#${nav} button`).attr('page', num);
            $(`#${nav} button`).attr('type', type);
        } else {
            $(`#${nav} button`).hide();
        }
    }

    const getData = function(type, page){
       return new Promise(    
            (resolve, reject) => {
                    $.get(`/fetch${type}/${page}`, function(data){
                        resolve(data);
                    }, 'json')
                    .fail(function(jqxhr, textStatus, errorThrown){
                        reject(errorThrown);
                        }
                    );
            });
    }
});
