function solve(catsInfo) {
    class Cats {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
    }

    for (let element of catsInfo) {
        element = element.split(" ");
        let cat = new Cats (element[0], element[1]);
        
        meow(cat.name, cat.age);
        //console.log(`${cat.name}, age ${cat.age} says Meow`);
    }

    function meow (name, age) {
        console.log(`${name}, age ${age} says Meow`);
    }
    
}
solve(['Mellow 2', 'Tom 5'])