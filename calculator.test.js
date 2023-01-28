// const { it } = require('node:test');
// const { describe } = require('yargs');
const Calculator = require ('./task3.js');

describe('calculator methods test', ()=>{
    it('add the two variable', ()=>{
        const cal = new Calculator(4,2)
        const add = cal.add();
        expect(add).toBe(6);
    })

    it('sub the two variable', ()=>{
        const cal = new Calculator(3,2)
        const sub = cal.subtract();
        expect(sub).toBe(1);
    })
    it('divide the two variable', ()=>{
        const cal = new Calculator(8,2)
        const div = cal.divide();
        expect(div).toBe(4);
    })
    it('multiply the two variable', ()=>{
        const cal = new Calculator(3,2)
        const multiply = cal.multiply();
        expect(multiply).toBe(6);
    })
})