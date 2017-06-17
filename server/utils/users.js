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
}

module.exports = {
    Users
}
