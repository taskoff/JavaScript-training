function oddAndEvenSum(num) {
   let arrOfDigit = num.toString().split('')
   let oddSum = 0;
   let evenSum = 0;
   for (let i = 0; i < arrOfDigit.length; i++) {
       let currentNum = Number(arrOfDigit[i]);
       if (currentNum % 2 === 0) {
            evenSum += currentNum;
       } else {
            oddSum += currentNum;
       }
   }
   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
   
    
}
oddAndEvenSum(3495892137259234)