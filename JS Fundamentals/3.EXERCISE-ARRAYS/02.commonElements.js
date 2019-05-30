function commonElements(firstArr, secondArr) {
    let firstArray = firstArr;
    let secondArray = secondArr;

    for (let i = 0; i < firstArray.length; i++) {
        let charFromFirst = firstArray[i];
        for (let j = 0; j < secondArray.length; j++) {
            let charFromSecond = secondArray[j];
            if (charFromFirst === charFromSecond) {
                console.log(charFromFirst);
            }
            
        }
        
    }

}
commonElements(["S", "o", "f", "t", "U", "n", "i", " "],
["s", "o", "c", "i", "a", "l"]
)