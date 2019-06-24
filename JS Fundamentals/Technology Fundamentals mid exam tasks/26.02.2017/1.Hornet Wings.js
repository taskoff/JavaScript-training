function hornetWings(arr) {
    let allFlaps = Number(arr[0]);
    let meterForТhousandFlaps = Number(arr[1]);
    let flapsWithoutRest = Number(arr[2]);

    let distance = allFlaps / 1000 * meterForТhousandFlaps;
    let flyTime = allFlaps / 100;
    let restTime = parseInt(allFlaps / flapsWithoutRest) * 5;
    let allTime = flyTime + restTime;
    console.log(`${distance.toFixed(2)} m.`);
    console.log(`${allTime} s.`);
    
}
hornetWings([2000, 5, 200])