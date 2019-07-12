function carWash(arr) {
    let count = 0;
    let soap = a => a + 10;
    let water = a => a * 1.2;
    let vacuumClaen = a => a * 1.25;
    let mud = a => a * 0.9;


    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        switch (command) {
            case 'soap':
            count = soap(count); 
            break;
            case 'water':
            count = water(count); 
            break;
            case 'vacuum cleaner':
            count = vacuumClaen(count); 
            break;
            case 'mud':
            count = mud(count); 
            break;
        }
        
    }
    console.log(`The car is ${count.toFixed(2)}% clean.`);
    
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])