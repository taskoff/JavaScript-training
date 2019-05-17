function englishNameOfTheLastDigit(num) {
    let str = num.toString();
    let char = +str[str.length - 1];

    if (char == 1) {
        console.log('one')
    } else if (char == 2) {
        console.log('two')
    } else if (char == 3) {
        console.log('three')
    } else if (char == 4) {
        console.log('four')
    } else if (char == 5) {
        console.log('five')
    } else if (char == 6) {
        console.log('six')
    } else if (char == 7) {
        console.log('seven')
    } else if (char == 8) {
        console.log('eight')
    } else if (char == 9) {
        console.log('nine')
    } else if (char == 0) {
        console.log('zero')
    } 
    
    
}

englishNameOfTheLastDigit(6225)