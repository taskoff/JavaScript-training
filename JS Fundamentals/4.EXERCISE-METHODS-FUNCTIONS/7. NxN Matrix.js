function nXnMatrix(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(num)
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr.join(' '));
    }
    
}
nXnMatrix(2)