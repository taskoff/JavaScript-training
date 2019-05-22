function helloFrance(arr) {
    let list = arr.shift().split('|');
    let budget = +arr.shift();
    let newPricelist = [];
    let sumOfExpenses = 0;
    let sumOfNewItems = 0;
    
    
    for (let i = 0; i < list.length; i++) {
        let current = list[i].split('->');
        let [item, currentPrice] = current;
        currentPrice = +currentPrice;
        
        if (item === 'Clothes' && currentPrice <= 50) {
            if (budget >= currentPrice) {
                budget -= currentPrice;
                newPricelist.push(currentPrice * 1.4);
                sumOfExpenses += currentPrice;
                sumOfNewItems += currentPrice * 1.4;
            }
        } else if (item === 'Shoes' && currentPrice <= 35) {
            if (budget >= currentPrice) {
                budget -= currentPrice;
                newPricelist.push(currentPrice * 1.4);
                sumOfExpenses += currentPrice;
                sumOfNewItems += currentPrice * 1.4;
            }
        } else if (item === 'Accessories' && currentPrice <= 20.50) {
            if (budget >= currentPrice) {
                budget -= currentPrice;
                newPricelist.push(currentPrice * 1.4);
                sumOfExpenses += currentPrice;
                sumOfNewItems += currentPrice * 1.4;
            }
        }
    }
    let profit = sumOfNewItems - sumOfExpenses;
    newPricelist = newPricelist.map(e => e.toFixed(2));
    console.log(newPricelist.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);
    if ((budget + sumOfNewItems) >= 150) {
        console.log('Hello, France!');
    } else {
        console.log('Time to go.');
    }
  
}
helloFrance(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    90
    ])