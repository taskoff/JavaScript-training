function arrayRotation(arr, num) {
    let currentArray = arr;
    let number = num;

    for (let i = 1; i <= number; i++) {
        let char = currentArray.shift();
        currentArray.push(char);
    }
    let line = '';
    for (let i = 0; i < currentArray.length; i++) {
        line += `${currentArray[i]} `;        
    }
    console.log(line);
}
arrayRotation([32, 21, 61, 1],
    4
    )