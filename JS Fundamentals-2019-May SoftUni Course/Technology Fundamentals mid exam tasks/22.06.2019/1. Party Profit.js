function partyProfit(arr) {
    let partySize = Number(arr[0]);
    let days = Number(arr[1]);
    let coins = 0;

    for (let i = 1; i <= days; i++) {
        coins += 50;
        
        
        if (i % 10 === 0) {
            partySize -= 2;
        }
        if (i % 15 === 0) {
            partySize += 5;
        }
        coins -= 2 * partySize;
        if (i % 3 === 0) {
            coins -= 3 * partySize;
        }        
       
        if (i % 5 === 0) {
            coins += 20 * partySize;
            if (i % 3 === 0) {
                coins -= 2 * partySize;
            }
        }
    }
    let coinsForEach = Math.floor(coins / partySize);
    console.log(`${partySize} companions received ${coinsForEach} coins each.`);
    

}

partyProfit([15, 30])