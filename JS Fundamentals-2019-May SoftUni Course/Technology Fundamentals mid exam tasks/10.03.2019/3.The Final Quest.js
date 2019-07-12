function finalQuest(arr) {
    let wordsLine = arr.shift().split(' ');
    let commandList = arr;

    for (let i = 0; i < commandList.length; i++) {
        let [command, ...info] = commandList[i].split(' ');

        if (command === 'Delete') {
            let index = +info[0];
            if (0 <= index && index  < wordsLine.length ) {
                wordsLine.splice(index + 1, 1)
            }
        } else if (command === 'Swap') {
           let wordOne = info[0];
           let wordTwo = info[1];
           if (wordsLine.includes(wordOne) && wordsLine.includes(wordTwo)) {
               let firstIndex = wordsLine.indexOf(wordOne);
               let secondIndex = wordsLine.indexOf(wordTwo);
               wordsLine[firstIndex] = wordTwo;
               wordsLine[secondIndex] = wordOne;
           }

        } else if (command === 'Put') {
            let word = info[0];
            let index = +(info[1] - 1);
            if (0 <= index && index  <= wordsLine.length) {
                wordsLine.splice(index, 0, word);
            }
        } else if (command === 'Sort') {
            wordsLine.sort((a, b) => b.localeCompare(a));
        } else if (command === 'Replace') {
            let wordOne = info[0];
            let wordTwo = info[1];
            if (wordsLine.includes(wordTwo)) {
                let index = wordsLine.indexOf(wordTwo);
                wordsLine[index] = wordOne;
            }
        } else if (command === 'Stop') {
            break;
        }
        
        
    }
    console.log(wordsLine.join(' '));
    //correction 
    
} 

finalQuest(['This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Sort',
    'Stop'
    
    ])