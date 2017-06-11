var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'paul.senon@gmail.com',
        text: 'hey !'
    });

    socket.emit('createMessage', {
        from: 'Jean-monique',
        text: 'Salut !'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newEmail', function(email) {
    console.log('newEmail', email);
});

socket.on('newMessage', function(message) {
    console.log(message);
});
