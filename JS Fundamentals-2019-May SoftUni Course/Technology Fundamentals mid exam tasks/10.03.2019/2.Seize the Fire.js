function seizeTheFire(arr) {
    let lineOfFires = arr.shift().split('#');
    let water = arr.shift();
    let effort = 0;
    let totalFire = 0;
    let cells = [];

    for (let i = 0; i < lineOfFires.length; i++) {
        let [fireType, cell] = lineOfFires[i].split(' = ');
        cell = +cell;
         if (fireType === 'High' && (81 <= cell && cell <= 125) && water >= cell) {
             water -= cell;
             effort += cell * 0.25;
             totalFire += cell;
             cells.push(cell);
         } else if (fireType === 'Medium' && (51 <= cell && cell <= 80) && water >= cell) {
            cell = +cell;
            water -= cell;
            effort += cell * 0.25;
            totalFire += cell;
            cells.push(cell);
        } else if (fireType === 'Low' && (1 <= cell && cell <= 50) && water >= cell) {
            cell = +cell;
            water -= cell;
            effort += cell * 0.25;
            totalFire += cell;
            cells.push(cell);
        } 

    }
    console.log('Cells:');
    cells.forEach(e => console.log(` - ${e}`));
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`)
    
}
seizeTheFire(['High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    220
    
    ])