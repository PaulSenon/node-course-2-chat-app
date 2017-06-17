var socket = io();

socket.on('connect', function() {
    socket.emit('requestRoomList', (roomList) => {
        var datalist = $('#rooms');
        roomList.forEach((elem) => {
            var option = $('<option>').text(elem.nbUsers+' users').val(elem.room);
            datalist.append(option);
        });
    });
});
