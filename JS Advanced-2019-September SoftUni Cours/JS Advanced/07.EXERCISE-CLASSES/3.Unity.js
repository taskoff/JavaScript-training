class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    toString() {
       if (this.unitedRats.length === 0) {
           return this.name;
       } else {
           let arr = this.unitedRats.map(e => `##${e}`);
          return `${this.name}\n${arr.join('\n')}` 
       }
    }
    getRats() {
        return this.unitedRats;
    }
    unite(obj) {
        if (typeof obj === 'object') {
            this.unitedRats.push(obj);
        }
        
    }
   
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat('George'));
firstRat.unite(new Rat("Alex"));
firstRat.unite('fake Rat')
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex






