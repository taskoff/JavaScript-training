function numberModification(num) {
    let arrOfNum = num.toString()
                      .split('')
                      .map(a => Number(a));

    let functionSum = arr => arr.reduce((a, b) => a+b);
    let sum = functionSum(arrOfNum);
    while (sum / arrOfNum.length < 5) {
        arrOfNum.push(9);
        sum = functionSum(arrOfNum);
    }
    console.log(arrOfNum.join(''));
    
}
numberModification(101)