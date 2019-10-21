const PaymentPackage = require('./6.Payment Package');
const expect = require('chai').expect;

describe('PaymentPackage tests', ()=>{
    it('Can be instantiated with two parameters - a string name and number value', ()=>{
        let currentObj = new PaymentPackage('a',1);
        expect(currentObj.name).to.be.equal('a');
        expect(currentObj.value).to.be.equal(1);
        expect(currentObj.VAT).to.be.equal(20);
        expect(currentObj.active).to.be.equal(true);
    })
    it('valid type of parameters - string and number', ()=>{
        expect(() => new PaymentPackage('a','a')).to.Throw('Value must be a non-negative number');
        expect(() => new PaymentPackage(1,1)).to.Throw('Name must be a non-empty string');
        // expect(currentObj.value).to.be.a('number');
    })
    it('instantiated with 1 parameter', ()=>{
        // let currentObj = new PaymentPackage(5);
        expect(()=>new PaymentPackage('a')).to.Throw('Value must be a non-negative number');
        expect(()=>new PaymentPackage(1)).to.Throw('Name must be a non-empty string');
       
    })
    it('valid parameters - not empty string and positive number', ()=>{
        // let currentObj = new PaymentPackage('a',1);
        // currentObj.VAT = -1;
        expect(()=>new PaymentPackage('a', -1)).to.Throw('Value must be a non-negative number');
        expect(()=>new PaymentPackage('', 1)).to.Throw('Name must be a non-empty string');
      
    })
    it('get/set value', ()=>{
        let currentObj = new PaymentPackage('a', 1);
        expect(currentObj.value).to.equal(1);
        currentObj.value = 2;
        expect(currentObj.value).to.equal(2);
        expect(()=> currentObj.value = 'a').to.Throw('Value must be a non-negative number');
        expect(()=> currentObj.value = -1).to.Throw('Value must be a non-negative number');
       
    })
    it('get/set name', ()=>{
        let currentObj = new PaymentPackage('a', 1);
        expect(currentObj.name).to.equal('a');
        currentObj.name = 'b';
        expect(currentObj.name).to.equal('b');
        expect(()=> currentObj.name = 2).to.Throw('Name must be a non-empty string');
        expect(()=> currentObj.name = '').to.Throw('Name must be a non-empty string');
    })
    it('get/set VAT', ()=>{
        let currentObj = new PaymentPackage('a', 1);
        expect(currentObj.VAT).to.equal(20);
        currentObj.VAT = 10;
        expect(currentObj.VAT).to.equal(10);
        expect(() => currentObj.VAT = -1).to.Throw('VAT must be a non-negative number');
        expect(()=> currentObj.VAT = 'a').to.Throw('VAT must be a non-negative number');
       
    })
    it('get/set active', ()=>{
        let currentObj = new PaymentPackage('a', 1);
        expect(currentObj.active).to.equal(true);
        currentObj.active = false;
        expect(currentObj.active).to.equal(false);
        expect(()=> currentObj.active = 'a').to.Throw('Active status must be a boolean');
        expect(()=> currentObj.active = 1).to.Throw('Active status must be a boolean');
    })
    it('toString()', ()=>{
        let currentObj = new PaymentPackage('a', 1);
        expect(currentObj.toString()).to.equal('Package: a\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
        currentObj.active = false;
        expect(currentObj.toString()).to.equal('Package: a (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
    })

})