function createBottles(arr) {
    let bottleArr = [];
    let fruits = {};

    for (let i = 0; i < arr.length; i++) {
        let [fruit, milliters] = arr[i].split(' => ');
        milliters = Number(milliters);
        // console.log(fruit, milliters);
        if (!fruits.hasOwnProperty(fruit)) {
            fruits[fruit] = milliters;
        } else {
            fruits[fruit] += milliters;
        }
        if (fruits[fruit] >= 1000 && !bottleArr.includes(fruit)) {
            bottleArr.push(fruit);
        }
    }
    // console.log(fruits)
    // console.log(bottleArr)
    bottleArr.forEach(e => {
       console.log(`${e} => ${Math.floor(fruits[e]/1000)}`)
    })
}
createBottles(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)