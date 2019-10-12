function argumentInfo() {
    let argumentsArr = [];
    let argumentsCount = {};
    for (const key in arguments) {
        argumentsArr.push(`${typeof arguments[key]}: ${arguments[key]}`);
        if (!argumentsCount.hasOwnProperty(typeof arguments[key])) {
            argumentsCount[typeof arguments[key]] = 1;
        } else {
            argumentsCount[typeof arguments[key]] += 1;
        }
    }
    
    // argumentsArr.forEach(e => console.log(e));
    // console.log(argumentsArr.join('\n'))
    let sorted = Object.entries(argumentsCount)
                       .sort((a, b) => b[1] - a[1])
                       .map(e => e.join(' = '));
    // sorted.forEach(e => console.log(`${e[0]} = ${e[1]}`));
    // console.log(sorted.map(e => e.join(' = ')).join('\n'))
    
    console.log(argumentsArr.concat(sorted).join('\n'))
}
argumentInfo('cat',  56, 42, function () { console.log('Hello world!'); });