function solve(data) {
    // let result = [1];
    let num = 1;

    let commands = {
        'add': arr => arr.push(++num),
        'remove': arr => arr.pop()
    }

    let result = data.reduce((acc, e) =>{commands[e](acc)
            return acc}, [1])

    return result.length === 0 ? 'Empty' : result.join('\n')
}
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']

))