function godzillaVsKong(data) {
    let budget = Number(data[0]);
    let statists = Number(data[1]);
    let clothingForOne = Number(data[2]);
    let priceForClothing = statists * clothingForOne;

    let decor = budget * 0.1;

    if (statists > 150) {
        priceForClothing = priceForClothing * 0.9;
    }

    let sum = decor + priceForClothing;

    if (sum > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`);
    }
}
godzillaVsKong()