$(() => { 
    $('.create-burger').on('click', (event) => {
        event.preventDefault();
        $.post('/api/burgers', { burger_name: $('#burger').val().trim() }, () => {
            location.reload();
        });
    });

    $('.devour').on('click', (event) => {
        let id = $(event.target).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: { devoured: true }
         }).then(() => {
            location.reload();
        });
    });
  
    $('.delete').on('click', (event) => {
        let id = $(event.target).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE',
          }).then(() => {
            location.reload();
        });
    });
});