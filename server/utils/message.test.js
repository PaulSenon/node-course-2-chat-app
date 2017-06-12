const expect = require('expect');

const {generateMessage} = require('./message.js');

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
