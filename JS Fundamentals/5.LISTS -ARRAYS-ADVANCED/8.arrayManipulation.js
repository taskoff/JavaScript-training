function arrayManipulation(arr) {
    let mainNumbers = arr.shift();
    mainNumbers = mainNumbers.split(' ')
    let commandsArr = arr;

    for (let i = 0; i < commandsArr.length; i++) {
        let currentCommand = commandsArr[i];
        currentCommand = currentCommand.split(' ');
        let command = currentCommand[0];
        let numOrIndex = currentCommand[1];
        
        
        if (command == 'Add') {
            mainNumbers.push(numOrIndex);
        } else if (command == 'Remove') {
            mainNumbers = mainNumbers.filter(e => e != numOrIndex);
        } else if (command == 'RemoveAt') {
            mainNumbers.splice(numOrIndex, 1);
        } else if (command == 'Insert') {
            let index = currentCommand[2];
            mainNumbers.splice(index, 0, numOrIndex );
        }

        
    }
    console.log(mainNumbers.join(' '));
}
arrayManipulation(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"] )