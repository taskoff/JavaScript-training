function nonDecreasingSubs(arr) {
    let newArr = [];
    let maxNum = -99999999999999999;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if (currentNum >= maxNum) {
            maxNum = currentNum;
            newArr.push(currentNum);
        }
    }
    console.log(newArr.join(' '));
}
nonDecreasingSubs([ 20, 3, 2, 15, 6, 1])