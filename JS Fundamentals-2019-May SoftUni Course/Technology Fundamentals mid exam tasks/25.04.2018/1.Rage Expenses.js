function rageExpenses(arr) {
    let lostGames = Number(arr[0]);
    let headsetPrice  = Number(arr[1]);
    let mousePrice = Number(arr[2]);
    let keyboardPrice = Number(arr[3]);
    let displayPrice = Number(arr[4]);
    let expenses = 0;
    let counterForKeyboard = 0;

    for (let i = 1; i <= lostGames; i++) {
        if (i % 2 === 0) {
            expenses += headsetPrice;
        }
        if (i % 3 === 0) {
            expenses += mousePrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += keyboardPrice;
            counterForKeyboard++;
            if (counterForKeyboard % 2 === 0) {
                expenses += displayPrice;
            }
        }
        
    }
    console.log(`Rage expenses: ${expenses.toFixed(2)} lv.`);
    
}
rageExpenses([23 ,12.50 ,21.50 ,40 ,200])