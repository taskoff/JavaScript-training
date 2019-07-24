function decryptMessage(data) {
    for (const line of data) {
        let patternName = /([#$%*&])(?<name>[A-Za-z]+)\1/g;
        let messageName = patternName.exec(line);
        // console.log(messageName.index);
        let patternLength = /=(?<length>[0-9]+)/g;
        let codeLength = patternLength.exec(line);
        // console.log(codeLength.index)
        let patternCode = /!!(?<code>.+)/g;
        let geoCode = patternCode.exec(line);
        // console.log(geoCode.index)
        if (messageName != null && codeLength != null && geoCode !== null) {
            let name = messageName.groups.name;
            let length = Number(codeLength.groups.length);
            let code = geoCode.groups.code;
            if (length === code.length && (messageName.index < codeLength.index && codeLength.index < geoCode.index)) {
                let newCode = '';
                for (let i = 0; i < code.length; i++) {
                    let char = String.fromCharCode(code[i].charCodeAt() + length);
                    newCode += char;                   
                }
                console.log(`Coordinates found! ${name} -> ${newCode}`)
                break;
            } else {
                console.log(`Nothing found!`);
            }

        } else {
            console.log(`Nothing found!`);
        }
        
    }
    
}
// decryptMessage(['%GiacomoAgostini%=7!!hbqw',
//     '&GeoffDuke*=6!!vjh]zi',
//     'JoeyDunlop=10!!lkd,rwazdr',
//     'Mike??Hailwood=5!![pliu',
//     '#SteveHislop#=16!!df%TU[Tj(h!!TT[S',
//     ])

decryptMessage(['Ian6Hutchinson=7!!\(58ycb4',
    '#MikeHailwood#!!\'gfzxgu6768=11',
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    '*DavMolyneux*=15!!efgk#\'_$&UYV%h%',
    'RichardQ^uayle=16!!fr5de5kd',
    ])