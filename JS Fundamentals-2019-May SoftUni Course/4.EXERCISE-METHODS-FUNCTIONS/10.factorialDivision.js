function factorialDivision(firstNum, secondNum ) {
    let firstFactorial = 1;
    let secondFactorial = 1;
    while (firstNum > 0) {
        firstFactorial *= firstNum;
        firstNum -= 1;
    }
    while (secondNum > 0) {
        secondFactorial *= secondNum;
        secondNum -= 1;
    }
    let divison = firstFactorial / secondFactorial;
    console.log(divison.toFixed(2));
    
}
factorialDivision(5, 2)