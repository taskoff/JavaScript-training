function reverceAnArray(number, array) {
    let num = number;
    let arr = array;
    let newArr = [];
    let line = '';

    for (let i = num - 1; i >= 0; i--) {
        let currentNum = arr[i];
        newArr.push(currentNum);
        
    }
    for (let j = 0; j < newArr.length; j++) {
        line += `${newArr[j]} `
        
    }
    console.log(line);
    
}
reverceAnArray(4, [-1, 20, 99, 5])