function gladiatorExpenses(fights, helmetPrice, swordPrice, sheildPrice, armorPrice ) {
    let helmet = 0;
    let sword = 0;
    let sheild = 0;
    let armor = 0;
    let counter = 0;

    for (let i = 1; i <= fights; i++) {
        
        if (i % 2 == 0) {
            helmet++;        
        }
        if (i % 3 == 0) {
            sword++
        }
        if (i % 2 == 0 && i % 3 == 0) {
            sheild++
            counter++;
            if (counter % 2 == 0) {
                armor++
            }
        }
    }
    let price = helmet * helmetPrice + sword * swordPrice + sheild * sheildPrice + armor * armorPrice;
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}