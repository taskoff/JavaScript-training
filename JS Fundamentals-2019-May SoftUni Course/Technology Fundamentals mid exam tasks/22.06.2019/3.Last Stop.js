function lastStop(arr) {
    let list = arr.shift().split(' ');
    //console.log(list)
    let commands = arr.shift();

    while (commands !== 'END') {
        let [command, firstNum, secondNum] = commands.split(' ');
        if (command === 'Change') {
            if (list.includes(firstNum)) {
                let index = list.indexOf(firstNum);
                list.splice(index, 1, secondNum);
            }
           // console.log(list);
        } else if (command === 'Hide') {
            if (list.includes(firstNum)) {
                let index = list.indexOf(firstNum);
                list.splice(index, 1);
               // console.log(list);
            }
        } else if (command === 'Switch') {
            if (list.includes(firstNum) && list.includes(secondNum)) {
                let firstIndex = list.indexOf(firstNum);
                let secondIndex = list.indexOf(secondNum);
                list[firstIndex] = secondNum;
                list[secondIndex] = firstNum;
            }
            //console.log(list)
        } else if (command === 'Insert') {
            let place = Number(firstNum);
            if (0<= place && place < list.length-1) {
              list.splice(place + 1, 0, secondNum);
              //console.log(list);
            }
        } else if (command === 'Reverse') {
            list = list.reverse();
            //console.log(list);
        }

        commands = arr.shift();
    }
    console.log(list.join(' '));
}

// lastStop(['115 115 101 114 73 111 116 75',
//     'Insert 5 114',
//     'Switch 116 73',
//     'Hide 75',
//     'Reverse', 
//     'Change 73 70',
//     'Insert 10 85',
//     'END',
//     ])

lastStop(['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END',
    
    ])