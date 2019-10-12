class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length; 
         
    }

    toString() {
        let result = '';
        if (this.innerLength >= this.innerString.length) {
            result =  this.innerString.substring(0)
        } else if (this.innerLength < this.innerString.length) {
            result = `${this.innerString.substring(0, this.innerLength)}...`
        }
        return result;
    }
    increase(num) {
        if (this.innerLength<0) {
            this.innerLength = 0;
        } 
        this.innerLength += num;
        
    }
    decrease(num) {
        this.innerLength -= num;
        if (this.innerLength<0) {
            this.innerLength = 0;
        } 
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
