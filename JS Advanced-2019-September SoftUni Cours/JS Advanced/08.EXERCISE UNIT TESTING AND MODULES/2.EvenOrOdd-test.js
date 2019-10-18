const expect = require('chai').expect;
const isOddOrEven = require('./2.EvenOrOdd');

describe('testing isOddOrEven', () => {
    it('2 => undefined', ()=>{
        expect(isOddOrEven(2)).to.equal(undefined);
    })
    it('asa => Odd', ()=>{
        expect(isOddOrEven('asa')).to.equal('odd');
    })
    it('asas => Even', ()=>{
        expect(isOddOrEven('asas')).to.equal('even');
    })
    it('{} => undefined', ()=>{
        expect(isOddOrEven({})).to.equal(undefined);
    })
    
})