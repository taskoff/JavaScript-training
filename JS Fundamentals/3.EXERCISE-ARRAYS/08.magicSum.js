function magicSum(arr, num) {
    let string = arr;
    let number = num;
    //string = string.split(' ');

    for (let i = 0; i < string.length; i++) {
        let digit = Number(string[i]);
        for (let j = i + 1; j < string.length; j++) {
            let nextDigit = Number(string[j]);
            if (digit + nextDigit === number) {
                console.log(`${digit} ${nextDigit}`);
            }
            
        }
        
    }

}
magicSum([1, 7, 6, 2, 19, 23],
    8
    )