function stringManipulator(arr) {
    let commandAndInfo = arr.shift();
    let str = '';
    while (commandAndInfo != 'End') {
        let [command, chars] = commandAndInfo.split(' ');
        if (command == 'Add') {
            str += chars;
        } else if (command === 'Upgrade') {
            while (str.includes(chars)) {
                let newChar = String.fromCharCode(chars.charCodeAt()+1)
               str = str.replace(chars, newChar)
            }
        } else if (command === 'Print') {
            console.log(str);
        } else if (command === 'Index') {
            let indexArr = [];
            let copyStr = str.substr(0);
            let index = copyStr.indexOf(chars);
            while (index >= 0) {
                indexArr.push(index);
                copyStr = copyStr.replace(chars, '*');
                index = copyStr.indexOf(chars);
            }
            if (indexArr.length > 0) {
                console.log(indexArr.join(' '))
            } else {
                console.log('None');
            }
        } else if (command === 'Remove') {
            while (str.includes(chars)) {
                str = str.replace(chars, '');
            }
        }    
        commandAndInfo = arr.shift();
    }
}
stringManipulator(['Add abracadabra',
    'Print',
    'Upgrade a',
    'Print',
    'Index b',
    'Remove bbrb',
    'Print',
    'End',
    ])