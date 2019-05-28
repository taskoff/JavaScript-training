function santaList(arr) {
    let list = arr.shift().split('&');
    let commandAndNames = arr.shift();

    while (commandAndNames != 'Finished!') {
        let [command, ...names] = commandAndNames.split(' ');
        if (command == 'Bad') {
            let name = names[0];
            if (!list.includes(name)) {
                list.unshift(name)
            }
        } else if (command == 'Good') {
            let name = names[0];
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            }
        } else if (command == 'Rename') {
            let [oldName, newName] = names;
            if (list.includes(oldName)) {
                let index = list.indexOf(oldName);
                list.splice(index, 1, newName);
            }
        } else if (command == 'Rearrange') {
            let name = names[0];
            if (list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1)
                list.push(name);
            }
        }
        commandAndNames = arr.shift();
    }
    console.log(list.join(', '))
}
santaList(['Joshua&Aaron&Walt&Dustin&William',
    'Good Walt',
    'Bad Jon ',
    'Rename Aaron Paul',
    'Rearrange Jon',
    'Rename Peter George',
    'Finished!',
    ])