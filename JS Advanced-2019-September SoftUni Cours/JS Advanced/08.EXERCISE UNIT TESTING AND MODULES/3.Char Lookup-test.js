const expect = require('chai').expect;
const lookupChar = require('./3.Char Lookup');

describe('test lookupChar', () => {
    it('wrong type of first param => undefined', () => {
        expect(lookupChar(1,1)).to.equal(undefined);
       
    })
    it('wrong type of second param => undefined', () => {
        expect(lookupChar('str','str')).to.equal(undefined);
       
    })
    it('second param is float number => undefined', () => {
        expect(lookupChar('str',1.1)).to.equal(undefined);
       
    })
    it('lowest value of index => Incorrect index', () => {
        expect(lookupChar('str',-1)).to.equal('Incorrect index');
       
    })
    it('higher value of index => Incorrect index', () => {
        expect(lookupChar('str',13)).to.equal('Incorrect index');
       
    })
    it('index = string.length => Incorrect index', () => {
        expect(lookupChar('str',3)).to.equal('Incorrect index');
       
    })
    it('(str, 0) => s', () => {
        expect(lookupChar('str',0)).to.equal('s');
       
    })
    it('(str, 1) => t', () => {
        expect(lookupChar('str',1)).to.equal('t');
       
    })
})