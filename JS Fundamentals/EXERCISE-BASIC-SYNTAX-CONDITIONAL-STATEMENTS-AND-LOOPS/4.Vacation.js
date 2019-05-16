function vacantion(numOfPeople, typeOfGroup, weekDay) {
    let totalPrice = 0;
    let priceForOne = 0;
    
    if (typeOfGroup == 'Business' && numOfPeople >= 100) {
        numOfPeople -= 10;
    }
    if (typeOfGroup == 'Students') {
        if (weekDay == 'Friday') {
           priceForOne = 8.45; 
        } else if (weekDay == 'Saturday') {
            priceForOne = 9.80; 
        } else if (weekDay == 'Sunday') {
            priceForOne = 10.46; 
        } 
    } else if (typeOfGroup == 'Business') {
        if (weekDay == 'Friday') {
           priceForOne = 10.90; 
        } else if (weekDay == 'Saturday') {
            priceForOne = 15.60; 
        } else if (weekDay == 'Sunday') {
            priceForOne = 16; 
        } 
    } else if (typeOfGroup == 'Regular') {
        if (weekDay == 'Friday') {
           priceForOne = 15; 
        } else if (weekDay == 'Saturday') {
            priceForOne = 20; 
        } else if (weekDay == 'Sunday') {
            priceForOne = 22.5; 
        } 
    }

    totalPrice = priceForOne * numOfPeople;           
    if (typeOfGroup == 'Students' && numOfPeople >= 30) {
        totalPrice = totalPrice * 0.85;
    }
    if (typeOfGroup == 'Regular' && (10 <=numOfPeople && numOfPeople <= 20)) {
        totalPrice = totalPrice * 0.95;
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}


vacantion(40,"Regular","Saturday")