function partiProfit(arr) {
    let companions = Number(arr[0]);
    let days = Number(arr[1]);
    let coins = 0;


    for (let i = 1; i <= days; i++) {
        coins += 50;
        if (i % 10 === 0) {
            companions -= 2;
        }
        if (i % 15 === 0) {
            companions += 5;
        }
        coins -= companions * 2;
        if (i % 3 === 0) {
            coins -= companions * 3;
        }
        if (i % 5 === 0) {
            coins += 20 * companions;
            if (i % 3 === 0) {
                coins -= companions * 2;
            }
        }
    }
    console.log(`${companions} companions received ${Math.floor(coins / companions)} coins each.`);
    
}
partiProfit([15, 30])