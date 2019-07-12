function fuelMoney(distance, pasengers, priceForLiter) {
    let fuel = distance / 100 * 7;
    fuel += pasengers * 0.1;
    let sum = fuel * priceForLiter;
    console.log(`Needed money for that trip is ${sum}lv.`);
}
fuelMoney(260, 9, 2.49)