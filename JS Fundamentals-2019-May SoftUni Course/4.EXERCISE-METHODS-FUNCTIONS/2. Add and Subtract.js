function addAndSubtract(firstNum, secondNum, lastNum) {
    let sumOfFirstAndSecond = (a, b) => a + b;
    let sum = sumOfFirstAndSecond(firstNum, secondNum)
    let subtractOfsumandLastNum = (a, b) => a-b;
    let result = subtractOfsumandLastNum(sum, lastNum)
   
    
    console.log(result);
    
}
addAndSubtract(1, 17, 30);