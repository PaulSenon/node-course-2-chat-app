const expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Paul',
            room: 'node course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'react course'
        }, {
            id: '3',
            name: 'Phil',
            room: 'node course'
        }];
    });

    it('Should add new user', () => {
        var user = {
            id: '123',
            name: 'José',
            room: 'office'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(resUser).toEqual(user);
        expect(users.users).toInclude(user);
    });

    it('Should not add user if name already taken', () => {
        var user = {
            id: '923847',
            name: 'Paul',
            room: 'node course'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toNotInclude(user);
        expect(resUser).toBe(undefined);
    });

    it('Should add 2 user in the SaMe RoOm (no case sensitive)', () =>{
        var users = new Users();
        var user1 = {
            id: '123',
            name: 'Paul',
            room: 'Office'
        };
        var user2 = {
            id: '456',
            name: 'Phil',
            room: 'offICE'
        };
        users.addUser(user1.id, user1.name, user1.room);
        users.addUser(user2.id, user2.name, user2.room);

        expect(users.users.length).toBe(2);
        expect(users.getUserList('office').length).toBe(2);
    });

    // it('Should find user by name', () => {
    //     var name = 'Paul';
    //     var user = users.getUserByName(name);
    //
    //     expect(user.name).toBe(name);
    // });
    //
    // it('Should not find user by name', () => {
    //     var name = 'KJQHSFKJSGKDJFHgs';
    //     var user = users.getUserByName(name);
    //
    //     expect(user).toNotExist();
    // });

    it('Should return true if user already exist', () => {
        var name = 'Paul';
        var room = 'Node course';
        expect(users.isNameAlreadyTaken(name, room)).toBe(true);
    });

    it('Should return false if user dont exist', () => {
        var name = 'Paul';
        var room = 'React course'
        expect(users.isNameAlreadyTaken(name, room)).toBe(false);
    });

    it('Should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('Should not remove user', () => {
        var userId = '999';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('Should find user', () => {
        var userId = '2';
        var user = users.getUserById(userId);

        expect(user.id).toBe(userId);
    });

    it('Should not find user', () => {
        var userId = '999';
        var user = users.getUserById(userId);

        expect(user).toNotExist();
    });

    it('Should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Paul', 'Phil']);
    });

    it('Should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Jen']);
    });

    it('Should return names of rooms', () => {
        var rooms = users.getRoomList();
        expect(rooms.length).toBe(2);
    });

    it('Should return an empty array (no room created)', () => {
        users = new Users();
        var rooms = users.getRoomList();
        expect(rooms.length).toBe(0);
    });

    it('Should return 2 (nb users in a room)', () => {
        var res = users.getNbUsers('node course');
        expect(res).toBe(2);
    });

    it('Should return 0 (nb room doesnt exist)', () => {
        var res = users.getNbUsers('sdkifhksjdhfkjshdkfjh');
        expect(res).toBe(0);
    });
});
