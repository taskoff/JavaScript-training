function piccolo(arr) {
    let cars = new Map();

    for (const info of arr) {
        let [direction, carNum] = info.split(', ');
        cars.set(carNum, direction);
       
    }
    let carsArr = [...cars.entries()]
                .filter(e => e[1] === 'IN')
                .sort((a, b) => a[0]
                .localeCompare(b[0]));
    
                if (carsArr.length > 0) {
                    carsArr.forEach(e => console.log(e[0]));
                } else {
                    console.log('Parking Lot is Empty')
                }
    //console.log(carsArr);
    
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

)