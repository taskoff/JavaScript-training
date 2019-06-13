function train(arr) {
    let listOfVagons = arr.shift().split(' ');
    
    let capacitet = Number(arr.shift());
    let newVagons = arr.filter(e => e.startsWith('A'))
    let newPasangers = arr.filter(e => e > 0).map(e => Number(e));
    

    for (let i = 0; i < newVagons.length; i++) {
        let newVagon = newVagons[i].split(' ');
        newVagon = newVagon[1];
        listOfVagons.push(newVagon);
    }

    for (let i = 0; i < newPasangers.length; i++) {
        let currentNewPasangers = newPasangers[i];
        for (let j = 0; j < listOfVagons.length; j++) {
            let currentVagon = Number(listOfVagons[j]);

            if (currentNewPasangers + currentVagon <= capacitet) {
                currentVagon += currentNewPasangers;
                listOfVagons[j] = currentVagon;
                break;
            }
            
        }
        
    }
    console.log(listOfVagons.join(' '))
}