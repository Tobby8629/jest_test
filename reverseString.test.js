const reverseString = require ('./task2.js')

test('the string display backwards', ()=>{
    const result = reverseString('tobby')
    expect(result).toBe("ybbot");
})