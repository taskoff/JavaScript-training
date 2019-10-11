function greatestDivisor(firstNum, secondNum) {
    let divisors = [];
    for (let i = 1; i <= secondNum; i++) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            divisors.push(i);
        }        
    }
    let maxDivisor = Math.max(...divisors);
    console.log(maxDivisor);
    
}
greatestDivisor(2154, 458)