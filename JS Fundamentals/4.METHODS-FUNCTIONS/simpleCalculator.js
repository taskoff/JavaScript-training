function simpleCalculator(numOne, numTwo, operator) {
    let result = 0;
    if (operator === 'multiply') {
        result = (numOne, numTwo) => numOne * numTwo;
    } else  if (operator === 'divide') {
        result = (numOne, numTwo) => numOne / numTwo;
    } else  if (operator === 'add') {
        result = (numOne, numTwo) => numOne + numTwo;
    } else  if (operator === 'subtract') {
        result = (numOne, numTwo) => numOne - numTwo;
    }
    console.log(result(numOne, numTwo));
}
simpleCalculator(5, 5, 'multiply')