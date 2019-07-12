function questsJurnal(arr) {
    let listOfJurnal = arr.shift().split(', ');
    let commandAndJurnal = arr.shift();
    
    
    while (commandAndJurnal != 'Retire!') {
       let [command, jurnal] = commandAndJurnal.split(' - ');
        if (command === 'Start') {
            if (!listOfJurnal.includes(jurnal)) {
                listOfJurnal.push(jurnal);
            }
        } else if (command === 'Complete') {
            if (listOfJurnal.includes(jurnal)) {
                let index = listOfJurnal.indexOf(jurnal);
                listOfJurnal.splice(index, 1);
            }
        } else if (command === 'Side Quest') {
            let [mainJurnal, sideJurnal] = jurnal.split(':');
            if (listOfJurnal.includes(mainJurnal) && !listOfJurnal.includes(sideJurnal)) {
                let index = listOfJurnal.indexOf(mainJurnal);
                listOfJurnal.splice(index + 1, 0, sideJurnal);
            }
        } else if (command === 'Renew') {
            if (listOfJurnal.includes(jurnal)) {
                let index = listOfJurnal.indexOf(jurnal);
                listOfJurnal.splice(index, 1);
                listOfJurnal.push(jurnal);
            }
        }
       commandAndJurnal = arr.shift();
    }
    console.log(listOfJurnal.join(', '));
}
questsJurnal(['Hello World, If else',
    'Complete - Homework',
    'Side Quest - If else:Switch',
    'Renew - Hello World',
    'Retire!'
    
    ])