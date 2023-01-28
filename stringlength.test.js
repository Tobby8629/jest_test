
const stringLength = require("./index")
    it ('should return the string length', () => {
        const result = stringLength('tobby')
        expect(result).toBe(5);
    })
    it ('throw an error', () => {
        const fry = stringLength('hello everyone in nigeria');
        expect(()=>{fry}).toThrow(new Error('string length should be between 1 and 10'));
    } )



