function negativePositiveNum(arr) {
    let newArray = [];

    for (let char of arr) {
        char = +char;
        if (char >= 0) {
            newArray.push(char);
        } else {
            newArray.unshift(char);
        }
    }

    console.log(newArray.join("\n"))
}

negativePositiveNum([7, -2, 8, 9])