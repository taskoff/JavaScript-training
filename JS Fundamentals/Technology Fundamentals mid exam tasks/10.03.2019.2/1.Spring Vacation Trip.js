function springVacationTrip(arr) {
    let days = arr.shift();
    let budget = arr.shift();
    let group = arr.shift();
    let priceForKm = arr.shift();
    let foodForPersonForDay = arr.shift();
    let priceForOneNight = arr.shift();
    let listOfDistance = arr;

    let foodExpenses = days * group * foodForPersonForDay;
    let nightExpenses = days * group * priceForOneNight;
    if (group > 10) {
        nightExpenses = nightExpenses * 0.75;
    }

    let allExpenses = foodExpenses + nightExpenses;
   

    for (let i = 0; i < listOfDistance.length; i++) {
        let fuelExpensesforDay = listOfDistance[i] * priceForKm;
        allExpenses += fuelExpensesforDay;
        let day = i +1;
        
        if (day  % 3 === 0 || day % 5 === 0) {
            allExpenses = allExpenses * 1.4;
        }
        if (day % 7 === 0) {
            allExpenses -= allExpenses / group;
        }
        if (budget < allExpenses) {
            console.log(`Not enough money to continue the trip. You need ${(allExpenses - budget).toFixed(2)}$ more.`);
            break;
        }
        
    }

    if (budget >= allExpenses) {
        console.log(`You have reached the destination. You have ${(budget - allExpenses).toFixed(2)}$ budget left.`)
    }
    
}
springVacationTrip([10, 20500, 11, 1.2, 8, 13, 100, 150, 500, 400, 600, 130, 300, 350, 200, 300 ])