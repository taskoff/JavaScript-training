function lastStop(arr) {
    let listOfNumber = arr.shift().split(' ');
    let commandWithNumber = arr.shift();

    while (commandWithNumber !== 'END') {
        let [command, ...info] = commandWithNumber.split(' ');
        if (command == 'Change') {
            let [first, second] = info;
            if (listOfNumber.includes(first)) {
               let index = listOfNumber.indexOf(first);
               listOfNumber.splice(index, 1, second);
            }
        } else if (command == 'Hide') {
            let num = info[0];
            if (listOfNumber.includes(num)) {
                let index = listOfNumber.indexOf(num);
                listOfNumber.splice(index, 1);
                listOfNumber.join(' ')
            }
        } else if (command == 'Switch') {
            let [first, second] = info;
            if (listOfNumber.includes(first) && listOfNumber.includes(second)) {
                let firstIndex = listOfNumber.indexOf(first);
                let secondIndex = listOfNumber.indexOf(second);
                listOfNumber[firstIndex] = second;
                listOfNumber[secondIndex] = first;
                
            }
        } else if (command == 'Insert') {
            let [index, newNumber] = info;
                index = +index;
            if (index <= listOfNumber.length ) {
                listOfNumber.splice(index + 1, 0, newNumber)
            }
        } else if (command == 'Reverse') {
            listOfNumber = listOfNumber.reverse();
        }
        commandWithNumber = arr.shift();
        
    }
    console.log(listOfNumber.join(' '));
}
lastStop(['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END',
    ]
    )