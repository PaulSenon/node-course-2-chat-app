const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'monique@pouet.com',
        text: 'hey i\'m monique :D',
        createdAt: 123
    });

    socket.on('createEmail', (email) => {
        console.log(JSON.stringify(email, undefined, 2));
    });

    socket.on('createMessage', (message) => {
        console.log(message);
        timeStamp = (new Date).getTime();
        socket.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: timeStamp
        });
    });

    socket.on('disconnect', () => {
        console.log('A user disocnnected');
    });
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
