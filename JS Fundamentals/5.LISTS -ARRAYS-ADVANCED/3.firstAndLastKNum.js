function firstAndLastKNum(arr) {
    let k = arr.shift();
    let firstNums = arr.slice(0, k);
    
    let lastNums = arr.slice(arr.length - k);

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));
}

firstAndLastKNum([3, 6, 7, 8, 9])
