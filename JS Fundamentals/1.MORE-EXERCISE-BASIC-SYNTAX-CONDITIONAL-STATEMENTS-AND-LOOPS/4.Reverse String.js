function reverseString(str) {
    let arr = str
            .split('')
            .reverse()
            .join('')
    
    console.log(arr);
    
}
reverseString('SoftUni')