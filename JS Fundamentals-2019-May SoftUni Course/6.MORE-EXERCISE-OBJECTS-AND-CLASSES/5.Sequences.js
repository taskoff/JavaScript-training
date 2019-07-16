function sequenses(arr) {
    let obj ={'lines':[]};

    
    for (let line of arr) {
        let currentArr = JSON.parse(line)
                             .sort((a, b) => b-a);
    //    console.log(currentArr);
        let isSame = false;
        for (let i = 0; i < obj.lines.length; i++) {
            let counter = 0;
           if (obj.lines[i].length === currentArr.length) {
               for (let j = 0; j < obj.lines[i].length; j++) {
                    if (obj.lines[i][j] === currentArr[j]) {
                        counter++;
                    }                   
               }
           }
           if (counter === currentArr.length) {
               isSame = true;
           }
        }
        if (isSame === false) {
            obj.lines.push(currentArr);
        }
    }
    // console.log(obj);
    let sortedArr = obj.lines.sort((a, b) => a.length - b.length);
    sortedArr.forEach(e => console.log(`[${e.join(', ')}]`));
}
// sequenses(["[-3, -2, -1, 0, 1, 2, 3, 4]",
// "[10, 1, -17, 0, 2, 13]",
// "[4, -3, 3, -2, 2, -1, 1, 0]"]
// )
sequenses(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
)