function googleSearch(arr) {
    let days = Number(arr.shift());
    let users = Number(arr.shift());
    let moneyForSingleSearch = Number(arr.shift());
    let moneyForDay = 0;
    
   
    for (let i = 1; i <= users; i++) {
        let words = Number(arr.shift());
        let moneyForDayForUser = 0;
        if (words === 1 ) {
            moneyForDayForUser += moneyForSingleSearch * 2 ;
        } else if (words < 5) {
            moneyForDayForUser += moneyForSingleSearch * words; 
        }
        if (i % 3 === 0) {
            moneyForDayForUser = moneyForDayForUser * 3;
        }
        moneyForDay += moneyForDayForUser;
       
        
    }
    let allMoney = moneyForDay * days;
    console.log(`Total money earned for ${days} days: ${allMoney.toFixed(2)}`);
}
googleSearch([10, 3, 6, 5, 4, 1 ])