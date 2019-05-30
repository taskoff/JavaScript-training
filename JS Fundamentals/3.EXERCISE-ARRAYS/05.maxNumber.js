function maxNumber(arr) {
    let array = arr;
    let line = '';
    

    for (let i = 0; i < array.length; i++) {
        let currentDigit = Number(array[i]);
        let nextDigit = 0;
        let maxNum = - 999999999999999;
        for (let j = i + 1; j < array.length; j++) {
            nextDigit = Number(array[j]);
            if (nextDigit > maxNum) {
                maxNum = nextDigit;
            }
        }
        if (currentDigit > maxNum) {
           line += `${currentDigit} `
        }
    }
    console.log(line)
}
maxNumber([27, 19, 42, 2, 13, 45, 48])