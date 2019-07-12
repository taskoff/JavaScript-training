function addOrSubstarct(arr) {
    let firstArray = arr;
    let fisrtSum = 0;
    let secondSum = 0;
    let secondArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        let digit = Number(firstArray[i]);
        fisrtSum += digit;
        if (digit % 2 === 0) {
            digit = digit + i;
        } else {
            digit = digit - i;
        }
        secondSum += digit;
        secondArray.push(digit);
    }
    console.log(secondArray);
    console.log(fisrtSum);
    console.log(secondSum);
}
addOrSubstarct([-5, 11, 3, 0, 2])