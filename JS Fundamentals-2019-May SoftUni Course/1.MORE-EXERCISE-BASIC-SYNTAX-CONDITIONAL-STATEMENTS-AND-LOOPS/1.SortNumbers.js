function sortNums(a ,b, c) {
    let arr = [a, b, c].sort((x, y) => y - x);
    console.log(arr.join('\n'));
    
}

sortNums(0, 0 , 2)