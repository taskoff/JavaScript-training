function magicMatrices(arr) {
    
    let allSum = [];
   

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let horisontalSum = current.reduce((a, b) => a+b);
        allSum.push(horisontalSum)
    }

    for (let i = 0; i < arr.length; i++) {
        let verticalSum = 0
        for (let j = 0; j < arr.length; j++) {
            let current = arr[j];
            verticalSum += Number(current[i]);
        }
        allSum.push(verticalSum);
        
    }

    let isEqual = allSum.filter(a => a != allSum[0])

    if (isEqual.length === 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}
magicMatrices([[4, 5, 6, 5],
    [6, 5, 4, 5],
    [5, 5, 5, 5], 
    [5, 5, 5, 5]]
   )