function anonimousThreat(arr) {
    let list = arr.shift().split(' ');
    let commandInfo = arr.shift();
    while (commandInfo !== '3:1') {
        let [command, startIndex, endIndex] = commandInfo.split(' ');

        if (command == 'merge' && startIndex < list.length) {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex < 0) {
                startIndex = 0;
            }
            if (endIndex >= list.length) {
                endIndex = list.length - 1;
            }
            let current = '';
            for (let i = startIndex; i <= endIndex; i++) {
                current += list[i];
            }
            list.splice(startIndex, endIndex + 1, current);
            
           // console.log(list);
        } else if (command == 'divide') {
            let index = Number(startIndex);
            let partitions = Number(endIndex);
            let part = list.splice(index, 1);
            part1 = part[0].split('');
            let currentLength = Math.floor(part1.length / partitions);
           
            for (let i = 0; i < partitions - 1; i++) {
                let current = part1.splice(0, currentLength);
                list.splice(index, 0, current.join(''));
                index +=1;
               // console.log(current);                
            }
            list.splice(index, 0, part1.join(''));
           
        }        
        commandInfo = arr.shift();
    }
    console.log(list.join(' '));
}
anonimousThreat(['Ivo Johny Tony Bony Mony',
    'merge -1 3',
    'merge 3 4',
    'merge 0 12',
    '3:1',
    ])

// anonimousThreat(['abcd efgh ijkl mnop qrst uvwx yz',
//     'merge 4 10',
//     'divide 4 5',
//     '3:1',
//     ])