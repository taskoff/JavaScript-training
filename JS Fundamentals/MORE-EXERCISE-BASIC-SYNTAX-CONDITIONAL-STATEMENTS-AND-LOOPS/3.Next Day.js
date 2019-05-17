function nextDay(year, month, day) { 
    let date = [year, month, day +1].join('-');
    let today = new Date(Date.UTC(year, month -1 , day));
    //console.log(today);
    
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate()+1);
    //console.log(tomorrow);
    if (1900 <= year <= 1999 ) {
        console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getUTCDate()}`);
        //console.log(tomorrow)
    } else {
    console.log(`${tomorrow.getYear()}-${tomorrow.getUTCMonth()+1}-${tomorrow.getUTCDate()}`);
   
    }
}
nextDay(1951, 12, 24)