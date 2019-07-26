function gamePriceCalc(data) {
    let games = {};
    let list = data[0].split(', ');
    for (let gameInfo of list) {
        if (gameInfo.includes('-')) {
            let [game, price] = gameInfo.split('-');
            games[game] = price;
        } else {
            let [game, dlc] = gameInfo.split(':');
            if (games.hasOwnProperty(game)) {
                let price = games[game]*1.2;
                games[game] = {'dlc': dlc, 'price': price}
            }
        }
    } 
    for (let key in games) {
       if (games[key].hasOwnProperty('dlc')) {
            games[key].price *= 0.5;
       } else {
           games[key] *= 0.8;
       }
    }
    let gamesWithDlc = Object.entries(games)
                             .filter(e => e[1].hasOwnProperty('dlc'))
                             .sort((a, b) => a[1].price - b[1].price);
    let gamesNoDlc = Object.entries(games)
                           .filter(e => !e[1].hasOwnProperty('dlc'))
                           .sort((a, b) => b[1] - a[1]);
    gamesWithDlc.forEach(e => console.log(`${e[0]} - ${e[1].dlc} - ${e[1].price.toFixed(2)}`))
    gamesNoDlc.forEach(e => console.log(`${e[0]} - ${e[1].toFixed(2)}`));
    
    // console.log(gamesWithDlc);
       
}
// gamePriceCalc(["WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT"])

gamePriceCalc(['Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC'])