function equalSum(arr) {
    let array = arr;
    let isEqual = false;

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
       
        for (let j = 0; j < i; j++) {
            leftSum += Number(array[j]);
        }
        for (let k = i + 1; k < array.length; k++) {
            rightSum += Number(array[k]);
        }
        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
        }
        
    }
    if (isEqual === false) {
        console.log('no');
    }
    
}
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])