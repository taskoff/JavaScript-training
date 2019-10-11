function solve(arr) {
    let rowsSumArr = arr.map(e => e.reduce((a, b) => a+b));
    let columnSumArr = [];
   
    for (let i = 0; i < arr[0].length; i++) {
        let currentSum = 0
        for (let j = 0; j < arr.length; j++) {
             currentSum += arr[j][i];          
        }
        columnSumArr.push(currentSum);
    }
    
    let allSumArr = rowsSumArr.concat(columnSumArr);
    let filtered = allSumArr.filter(e => e !== allSumArr[0]);
    
    if (filtered.length > 0) {
        console.log(false)
    } else {
        console.log(true);
    }
    
}
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   
   )