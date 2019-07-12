function palindormeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        let isPalindorme = true;
        let currentNum = arr[i].toString();
        for (let j = 0; j < currentNum.length / 2; j++) {
            if (currentNum[j] !== currentNum[currentNum.length - 1 - j]) {
                isPalindorme = false;
            }
        }
        if (isPalindorme) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
}
palindormeIntegers([32,2,232,1010])