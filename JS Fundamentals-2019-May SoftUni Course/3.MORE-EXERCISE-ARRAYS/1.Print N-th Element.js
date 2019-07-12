function printNthElements(arr) {
    let num = Number(arr.pop());
    let line = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        if (i % num === 0) {
            line.push(currentNum);
        }
        
    }
    console.log(line.join(' '));
    

}
printNthElements(['1', '2', '3', '4', '5', '6'])
