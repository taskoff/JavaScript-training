function passwordGenerator(data) {
    let firstStr = data[0];
    let secondStr = data[1];
    let word = data[2].toUpperCase();
    let thirdStr = firstStr.concat(secondStr).toLowerCase();
    let counter = 0;

    while (true) {
        
        let pattern = /[aeoui]/;
        let char = thirdStr.match(pattern);
        if (char === null) {
            break;
        }
        thirdStr = thirdStr.replace(char[0], word[counter]);
        counter++;
        if (counter === word.length) {
            counter = 0;
        }
        // console.log(char); 
    }
    
    thirdStr = thirdStr.split('')
                        .reverse()
                        .join('');
         
    console.log(`Your generated password is ${thirdStr}`);
    
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    )