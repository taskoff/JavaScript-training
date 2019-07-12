function wrongResult(numOne, numTwo, numThree) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    numThree = Number(numThree);

    if (numOne > 0 && numTwo < 0 && numThree < 0) {
        console.log('Positive')
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        console.log('Negative')
    } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        console.log('Negative')
    } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
        console.log('Negative')
    } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
        console.log('Positive')
    } else if (numOne < 0 && numTwo > 0 && numThree < 0) {
        console.log('Positive')
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        console.log('Negative')
    } else if (numOne > 0 && numTwo > 0 && numThree > 0) {
        console.log('Positive')
    }
    if (numOne == 0 || numTwo == 0 || numThree == 0) {
        console.log('Positive')
    }
}
wrongResult(-1, 0, 1 )
