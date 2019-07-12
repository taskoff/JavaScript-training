function houseParty(arr) {
    let listOfGuest = [];
    
    for (let i = 0; i < arr.length; i++) {
        let goingOrNot = arr[i].split(' ');
        let name = goingOrNot.shift();

        if (goingOrNot.length == 2) {
            if (listOfGuest.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                listOfGuest.push(name);
            }
        } else {
            if (listOfGuest.includes(name)) {
                let index = listOfGuest.indexOf(name);
                listOfGuest.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
        
    }
    console.log(listOfGuest.join('\n'));
}