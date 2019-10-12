class Person {
    constructor (name) {
        this.name = name;
        this.validation()
    }
    // get name() {
    //    return this._name;
    // }
    // set name(name) {
    //     if (typeof name !== 'string') {
    //         this._name = '';
    //        throw 'Error!'
           
    //     } else {
    //         this._name = name;
    //     }
    // }
    
   validation() {
    //    console.log(name)
    if (typeof this.name !== 'string') {
                this.name = '';
               throw 'Error!'
               
            } else {
                this.name = this.name;
            }
   }
        
}

let pesho = new Person('pesho')
// pesho.name = 6
console.log(pesho)
