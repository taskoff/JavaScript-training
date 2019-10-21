const StringBuilder = require('./5.String Builder');
const expect = require('chai').expect;


describe('StringBuilder', () => {
    it('Can be instantiated with a passed without anything', ()=>{
        let currentObj = new StringBuilder();
        expect(currentObj).to.be.a('object');
    })
    it('Can be instantiated with a passed in string', ()=>{
        let currentObj = new StringBuilder('aaa');
        expect(currentObj._stringArray).to.have.lengthOf(3);
    });
    it('append(string)', ()=>{
        let currentObj = new StringBuilder('a');
        currentObj.append('b');
        expect(currentObj._stringArray[1]).to.equal('b');
    });
    it('append(string)', ()=>{
        let currentObj = new StringBuilder('a');
        currentObj.append('b');
        expect(()=> currentObj.append(2)).to.Throw('Argument must be string');
    });

    
    it('prepend(string)', ()=>{
        let currentObj = new StringBuilder('a');
        currentObj.prepend('b');
        expect(currentObj._stringArray[0]).to.equal('b');
    });
    it('prepend(string)', ()=>{
        let currentObj = new StringBuilder('a');
        currentObj.prepend('b');
        expect(()=> currentObj.prepend(2)).to.Throw('Argument must be string');
    });
    it('insertAt(string, startIndex)', ()=>{
        let currentObj = new StringBuilder('aa');
        currentObj.insertAt('bb', 1);
        expect(currentObj._stringArray.slice(1, 3).join('')).to.equal('bb');
    });
    it('insertAt(string, startIndex)', ()=>{
        let currentObj = new StringBuilder('aa');
        currentObj.insertAt('bb', 1);
        expect(()=> currentObj.insertAt(1,1)).to.Throw('Argument must be string');
    });
    it('remove(startIndex, length)', ()=>{
        let currentObj = new StringBuilder('ab');
        currentObj.remove(0, 1);
        expect(currentObj._stringArray.join('')).to.equal('b');
    });
    it(' toString()', ()=>{
        let currentObj = new StringBuilder('ab');
        expect(currentObj.toString()).to.equal('ab');
    });
    it('arguments must be strings', ()=>{
        // let currentObj = new StringBuilder();
        expect(()=> new StringBuilder(2)).to.Throw('Argument must be string');
        expect(()=> new StringBuilder(true)).to.Throw('Argument must be string');
        expect(()=> new StringBuilder([])).to.Throw('Argument must be string');
        expect(()=> new StringBuilder({})).to.Throw('Argument must be string');
    });
    it('arguments must be strings', ()=>{
        // let currentObj = new StringBuilder();
        expect(()=> new StringBuilder(true)).to.Throw('Argument must be string');
    });
    it('instans have needed functions', ()=>{
        let currentObj = new StringBuilder();
        expect(currentObj).to.have.property('append');
        expect(currentObj).to.have.property('prepend');
        expect(currentObj).to.have.property('insertAt');
        expect(StringBuilder).to.have.property('_vrfyParam');
    });


})