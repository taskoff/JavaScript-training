function christmasSpirit(arr) {
    let quantity = +arr[0];
    let days = +arr[1];
    let sum = 0;
    let spirit = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 2 == 0) {
            sum += quantity * 2;
            spirit += 5;
        }
        if (i % 3 == 0) {
            sum += quantity * 5;
            sum += quantity * 3;
            spirit += 13;
        }
        if (i % 5 == 0) {
            sum += quantity * 15;
            spirit += 17;
            if (i % 3 == 0) {
                spirit += 30;
            }
        }
        if (i % 10 == 0) {
            spirit -= 20;
            sum += 5 + 3 + 15;
        }
        if (i % 11 == 0) {
            quantity += 2;
        }
        
    }
    if (days % 10  == 0 ) {
        spirit -= 30;
    }

    console.log(`Total cost: ${sum}`);
    console.log(`Total spirit: ${spirit}`);
   
}
christmasSpirit([3, 20])