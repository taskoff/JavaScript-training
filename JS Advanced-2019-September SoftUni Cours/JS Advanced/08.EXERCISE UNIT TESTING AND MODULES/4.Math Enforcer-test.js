const mathEnforcer = require('./4.Math Enforcer');
const expect = require('chai').expect;


describe('mathEnforcer', ()=>{
    describe('addFive()', ()=> {
        it('add 5 to num', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive('1')).to.equal(undefined);
            expect(mathEnforcer.addFive(1.1111)).to.be.closeTo(6.11, 0.01);
        })
        
    })
    describe('subtractTen()', ()=> {
        it('subtract 10 from 1 => -9', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen('1')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(1.1111)).to.be.closeTo(-8.89, 0.01);
        })
        
    })
    describe('sum()', ()=> {
        it('sum 1 + 1 => 2', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum('1', 1)).to.equal(undefined);
            expect(mathEnforcer.sum(1, '1')).to.equal(undefined);
            expect(mathEnforcer.sum(1.1111, 1.1111)).to.be.closeTo(2.22, 0.01);
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        })
        
    })

})