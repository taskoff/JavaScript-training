function bitcoinMining(arr) {
    let allMoney = 0;
    let bitcoins = 0;
    let bitcoinPrice = 11949.16;
    let dayOfBought = 0;
    let counter = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let gold = arr[i];
        
        if ((i + 1) % 3 == 0) {
            gold = gold * 0.7;
        }
        let money = gold * 67.51;
        allMoney += money;
       
        if (allMoney >= bitcoinPrice) {
            let currentBitcoins = Math.floor(allMoney / bitcoinPrice);
            bitcoins += currentBitcoins;
            allMoney -= bitcoinPrice * currentBitcoins;
            counter++;
            if (counter == 1) {
                dayOfBought = i + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfBought}`); 
    }
    console.log(`Left money: ${allMoney.toFixed(2)} lv.`);
    
}
bitcoinMining([3124.15, 504.212, 2511.124])