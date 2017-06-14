const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var from = 'Paul';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        var from = 'Admin';
        var latitude = '15';
        var longitude = '19';
        var expectedUrl = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url: expectedUrl});
    });
});
