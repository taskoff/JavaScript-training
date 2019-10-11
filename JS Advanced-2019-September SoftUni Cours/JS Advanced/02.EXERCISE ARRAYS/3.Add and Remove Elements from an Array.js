function solve(arr) {
    let num = 1;
    let result = [];

    for (const command of arr) {
        if (command === 'add') {
            result.push(num);
        } else if (command === 'remove' && result.length > 0) {
            result.pop();
        }
        num++;
    }
    
    if (result.length > 0) {
        result.forEach(e => console.log(e));
    } else {
        console.log('Empty');
    }
}
solve(['remove', 
'remove', 
'remove']


)