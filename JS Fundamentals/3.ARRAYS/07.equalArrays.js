function equalArrays(firstArr, secondArr) {
   for (let i = 0; i < firstArr.length; i++) {
       firstArr[i] = Number(firstArr[i]);
   }
   for (let i = 0; i < secondArr.length; i++) {
    secondArr[i] = Number(secondArr[i]);
    }
    let sum = 0;
    
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        } else {
            sum += firstArr[i];
        }
        if (i == firstArr.length - 1) {
            console.log(`Arrays are identical. Sum: ${sum}`)
        }
        
    }
    
}
equalArrays(['10','20','30'], ['10','20','30'])