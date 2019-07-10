function solve(text) {
    let pattern = /#[a-zA-z]+/g;
    let result = text.match(pattern);
    let mapedArr = result.map(e => e.substr(1))
                         .forEach(e => console.log(e));
    
    
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')