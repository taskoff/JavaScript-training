function huntingGames(arr) {
    let days = +arr.shift();
    let players = +arr.shift();
    let groupEnergy = +arr.shift();
    let waterForDayForOne = +arr.shift();
    let foodForDayForOne = +arr.shift();
    let allWater = players * waterForDayForOne * days;
    let allFoods = players * foodForDayForOne * days;

    for (let i = 1; i <= days; i++) {
        let energyLoss = +arr.shift();
        groupEnergy -= energyLoss;
        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${allFoods.toFixed(2)} food and ${allWater.toFixed(2)} water.`);
            break;
        }
        
        if (i % 2 === 0) {
            allWater = allWater * 0.7;
            groupEnergy = groupEnergy * 1.05;
        } 
        if (i % 3 === 0) {
           groupEnergy = groupEnergy * 1.1;
           allFoods -= allFoods / players; 
        }
      
        
    }

    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }
}
huntingGames([12 ,6 ,4430 ,9.8 ,5.5 ,620.3 ,840.2 ,960.1 ,220 ,340 ,674 ,365 ,345.5 ,212 ,412.12 ,258 ,496])