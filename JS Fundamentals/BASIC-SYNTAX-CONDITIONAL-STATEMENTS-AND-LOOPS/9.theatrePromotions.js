function theatrePromotions(typOfday, age) {
    let ticketPrice = 0;
    if (0 <= age && age <= 18) {
        if (typOfday == 'Weekday') {
            ticketPrice = 12;
        } else if (typOfday == 'Weekend') {
            ticketPrice = 15;
        } else if (typOfday == 'Holiday') {
            ticketPrice = 5;
        }
    } else if (18 < age && age <= 64) {
        if (typOfday == 'Weekday') {
            ticketPrice = 18;
        } else if (typOfday == 'Weekend') {
            ticketPrice = 20;
        } else if (typOfday == 'Holiday') {
            ticketPrice = 12;
        }
    } else if (64 < age && age <= 122) {
        if (typOfday == 'Weekday') {
            ticketPrice = 12;
        } else if (typOfday == 'Weekend') {
            ticketPrice = 15;
        } else if (typOfday == 'Holiday') {
            ticketPrice = 10;
        }
    } else {
        console.log('Error!');
    }
    if (ticketPrice != 0) {
    console.log(`${ticketPrice}$`)
    }
}


theatrePromotions('Holiday', 15)