function asciiSumator(arr) {
    let firstCharNum = arr[0].charCodeAt();
    let secondCharNum = arr[1].charCodeAt();
    let text = arr[2];
    let sum = 0;
    if (firstCharNum > secondCharNum) {
        let num = firstCharNum;
        firstCharNum = secondCharNum;
        secondCharNum = num;
    }
    
    for (let i = 0; i < text.length; i++) {
        let currentNum = text[i].charCodeAt();
        if (firstCharNum<currentNum && currentNum< secondCharNum) {
            sum += currentNum;
        }        
    }
    console.log(sum);
    
}
asciiSumator(['?',
    'E',
    '@ABCEF'
    
    ])