function solve(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let last = arr[arr.length - 1 - i];
        let first = arr[i];
        arr[i] = last;
        arr[arr.length - 1 - i] = first;
    }
    let line = '';
    for (let j = 0; j < arr.length; j++) {
        line += `${arr[j]} `;
    }
    console.log(line);
    
}
solve(['a', 'b', 'c', 'd', 'e'])