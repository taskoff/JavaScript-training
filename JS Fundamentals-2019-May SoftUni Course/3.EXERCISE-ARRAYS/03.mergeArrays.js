function mergeArrays(firstArr, secondArr) {
    let firstArray = firstArr;
    let secondArray = secondArr;
    let thirdArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            let char = Number(firstArray[i]) + Number(secondArray[i]);
            thirdArray.push(char);
        } else {
            let char = firstArray[i] + secondArray[i];
            thirdArray.push(char);
        }
    }
    
        
    
    console.log(thirdArray.join(' - '));
}
mergeArrays(["13", "12312", "5", "77", "4"],
["22", "333", "5", "122", "44"]

)