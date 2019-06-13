function bombNumbers(arr, bombAndRange) {
    arr = arr.map(Number);
    let bomb = Number(bombAndRange[0]);
    let range = Number(bombAndRange[1]);

    while (arr.includes(bomb)) {
        let index = arr.indexOf(bomb);
        arr.splice(index + 1, range);
       
        if (index - range < 0) {
            let startIdex = 0;
            range = range + 1 + (index - range);
            arr.splice(startIdex, range);
        } else {
            arr.splice(index - range, range +1);
        }
    } 
    let sum = 0;

    if (arr.length != 0) {
        sum = arr.reduce((a, b) => a+b);
    }

    console.log(sum);
    

}



bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 4])
    
    