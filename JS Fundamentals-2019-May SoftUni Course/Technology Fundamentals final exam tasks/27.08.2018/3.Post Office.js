function postOffice(data) {
    let [firsPart, secondPart, lastPart] = data[0].split('|');
    let patternCapitalLeters = /([#$%*&])[A-Z]+\1/g;
    let capitalLeters = firsPart.match(patternCapitalLeters)[0];
    capitalLeters = capitalLeters.substr(1, capitalLeters.length - 2);
    // console.log(capitalLeters)
    let patternStartLetterAndlength = /(?<ascii>[0-9]{2}):(?<length>[0-9]{2})/g;
    let startLetterAndlengthArr = secondPart.match(patternStartLetterAndlength)
    // console.log(startLetterAndlengthArr);
    let text = lastPart.split(' ');
    // console.log(text)
    let wordsArr = [];
    for (let j = 0; j < capitalLeters.length; j++) {
        let startletter = capitalLeters[j];
        startLetterAndlengthArr.forEach(e => {
            let [asciiNum, length] = e.split(':');
            asciiNum = Number(asciiNum);
            length = Number(length);
            let char = String.fromCharCode(asciiNum);
            if (startletter == char) {
                for (let i = 0; i < text.length; i++) {
                    let currentWord = text[i];
                    if (currentWord.startsWith(startletter) && currentWord.length === (length + 1) && !wordsArr.includes(currentWord)) {
                        wordsArr.push(currentWord);
                    }                
                }
            }
        })
    }
    wordsArr.forEach(e => console.log(e));
    
}
postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'])

// postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])