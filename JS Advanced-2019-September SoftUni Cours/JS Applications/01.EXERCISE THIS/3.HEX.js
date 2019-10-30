class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        let result = `0x${this.value.toString(16).toUpperCase()}`
        return result;
    }
    plus(number){
        // if (typeof number === 'number') {
        //     this.value += number;
        //     return this.toString()
        // } 
        if (number instanceof Hex) {
            // console.log(number.value)
            // this.value += number.valueOf();
            // return this.value
            return (new Hex(this.value + number.valueOf()))
        }
    }
    minus(number) {
        // if (typeof number === 'number') {
        //     this.value -= number.valueOf();
        //     return this.toString()
        // } 
        if (number instanceof Hex) {
            // this.value -= number.value;
            return (new Hex(this.value - number.valueOf()))
        }
    }
    parse(string) {
        return parseInt(string, 16)
    }
}

let FF = new Hex(255);
FF.valueOf() + 1 == 256;
console.log(FF.toString());
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(a.plus(b).toString())
a.parse(a.plus(b).toString())

