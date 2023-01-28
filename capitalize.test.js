// const { it } = require('node:test');
const capitalize = require ('./task4.js');
it('should change the first string letter', ()=>{
    const result = capitalize('tobby');
    expect(result).toBe('Tobby');
})