function charactersInRange(firstChar, secondChar) {
    let firstNum = firstChar.charCodeAt();
    let secondNum = secondChar.charCodeAt();
    let line = [];
    if (secondNum < firstNum) {
        let currentNum = firstNum;
        firstNum = secondNum;
        secondNum = currentNum;
    }

    for (let i = firstNum +1; i < secondNum; i++) {
       line.push(String.fromCharCode(i));
        
    }
    console.log(line.join(' '));

}
charactersInRange('C',
'#'
);