function sumEvenNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let digit = Number(arr[i]);
        if (digit % 2 === 0) {
            sum += digit;
        }
    }
    console.log(sum);
}

sumEvenNum(['1','2','3','4','5','6'])