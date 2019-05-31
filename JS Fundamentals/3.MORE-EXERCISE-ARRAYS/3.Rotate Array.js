function rotateArray(arr) {
    let num = Number(arr.pop());
    
    if (num >= 0) {
        
        for (let i = 1; i <= num; i++) {
            let currentE = arr.pop();
            arr.unshift(currentE)
        }
        console.log(arr.join(' '));

    } else {
        console.log('Empty');
    }
}
rotateArray(['remove', 'remove', 'remove'])