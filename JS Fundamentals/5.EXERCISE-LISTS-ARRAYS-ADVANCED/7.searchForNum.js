function searchForNum(arrOne, arrTwo) {
    let numOfElements = arrTwo[0];
    let deletingElements = arrTwo[1];
    let searchNum = arrTwo[2];
    
    let mainArray = arrOne.slice(0, numOfElements);
    mainArray.splice(0, deletingElements);
    
    let counter = 0;
    for (let i = 0; i < mainArray.length; i++) {
        let digit = mainArray[i];
        if (digit === searchNum) {
            counter++;
        }
    }
    
    console.log(`Number ${searchNum} occurs ${counter} time.`);
    
}
searchForNum([5, 2, 3, 3, 4, 1, 6], [5, 2, 3])