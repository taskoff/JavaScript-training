function sorting(arr) {
    arr.sort((a, b) => a-b);
    let newArray = [];

    while (arr.length > 0) {
        let bigNum = arr.pop();
        let smallNum = arr.shift();

        newArray.push(bigNum);
        newArray.push(smallNum);
    }

    console.log(newArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])