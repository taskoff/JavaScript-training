function songEncryption(data) {
    let info = data.shift();
    while (info != 'end') {
        let pattern = /^(?<name>[A-Z][a-z ']+):[A-Z ]+$/g; 
        let result = pattern.exec(info);
        // console.log(result);
        if (result !== null) {
            let name = result.groups.name;
            let key = name.length;
            let encryptedMessage = '';
            for (let i = 0; i < result[0].length; i++) {
                let asciiChar = result[0][i].charCodeAt();
                let newAsciiChar = 0;
                if (65<=asciiChar && asciiChar<=90) {
                    newAsciiChar = asciiChar + key;
                    if (newAsciiChar > 90) {
                        newAsciiChar -= 26;
                    }
                   
                } else if (97<=asciiChar && asciiChar<=122) {
                    newAsciiChar = asciiChar + key;
                    if (newAsciiChar > 122) {
                        newAsciiChar -= 26;
                    }
                } else if (asciiChar === 58) {
                    newAsciiChar = 64;
                } else if (asciiChar === 39 || asciiChar === 32) {
                    newAsciiChar = asciiChar;
                } 
                encryptedMessage += String.fromCharCode(newAsciiChar);
            }
            console.log(`Successful encryption: ${encryptedMessage}`);
            
        } else {
            console.log('Invalid input!');
        }

        info = data.shift();
    }
}
songEncryption(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end',
    ])
songEncryption(["M ichael Jackson:ANOTHER PART OF ME",
    "A dele:ONE AND ONLY",
    "Guns n'roses:NOVEMBER RAIN",
    "Christina Aguilera: HuRt",
    "end",
    ])