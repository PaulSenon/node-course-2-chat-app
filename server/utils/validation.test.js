const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', () => {
    it('Should reject non-string values', () => {
        var testString = {value:'pouet'};
        expect(isRealString(testString)).toBe(false);
    });

    it('Should reject string with only spaces', () => {
        var testString = '              ';
        expect(isRealString(testString)).toBe(false);
    });

    it('Should allow string with non-space characters', () => {
        var testString = '   real string   ';
        expect(isRealString(testString)).toBe(true);
    });
});
