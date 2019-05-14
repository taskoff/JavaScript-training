function energyBooster(data) {
    let fruit = data[0];
    let set = data[1];
    let numOfSet = Number(data[2]);
    let sum = 0;

    // comment :)

    if (set == "small") {
        if (fruit == "Watermelon") {
            sum = (numOfSet * 2) * 56;
        } else if (fruit == "Mango") {
            sum = (numOfSet * 2) * 36.66;
        } else if (fruit == "Pineapple") {
            sum = (numOfSet * 2) * 42.10;
        } else if (fruit == "Raspberry") {
            sum = (numOfSet * 2) * 20.00;
        } 
    } else if (set == "big") {
        if (fruit == "Watermelon") {
            sum = (numOfSet * 5) * 28.70;
        } else if (fruit == "Mango") {
            sum = (numOfSet * 5) * 19.6;
        } else if (fruit == "Pineapple") {
            sum = (numOfSet * 5) * 24.8;
        } else if (fruit == "Raspberry") {
            sum = (numOfSet * 5) * 15.20;
        } 
    }
    if (sum >= 400 && sum <= 1000) {
        sum = sum * 0.85;
    } else if (sum > 1000) {
        sum = sum * 0.5;
    }

    console.log(`${sum.toFixed(2)} lv.`)
}
energyBooster(["Mango",
    "big",
    8
    ])