var socket = io();

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

socket.on('connect', function() {
    socket.emit('requestRoomList', (roomList) => {
        var datalist = $('#rooms');
        roomList.forEach((elem) => {
            var option = $('<option>').text(elem.nbUsers+' users').val(elem.room.toLowerCase().capitalize());
            datalist.append(option);
        });
    });
});
