[{
    id: '',
    name: '',
    room: ''
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room){
        room = room.toLowerCase();

        this.removeUser(id);
        if(this.isNameAlreadyTaken(name, room)){
            return;
        }
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser(id){
        var user = this.getUserById(id);
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }
    getUserById(id){
        return this.users.filter((user) => user.id === id)[0];
    }
    getUserList(room){
        room = room.toLowerCase();

        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
    isNameAlreadyTaken(name, room){
        room = room.toLowerCase();

        var resUser = this.users.filter((user) => user.room === room && user.name === name)[0];
        return resUser !== undefined;
        // return this.getUserByName(name) !== undefined;
    }
    getRoomList(){
        var rooms = this.users.map((user) => user.room);
        rooms = [...new Set(rooms)];
        var resArray = [];
        rooms.forEach((room) => {
            var tmp = {
                room,
                nbUsers: this.getNbUsers(room)
            };
            resArray.push(tmp);
        });
        return resArray;
    }
    getNbUsers(room){
        room = room.toLowerCase();
        return this.users.filter((user) => user.room === room).length;
    }
}

module.exports = {
    Users
}
