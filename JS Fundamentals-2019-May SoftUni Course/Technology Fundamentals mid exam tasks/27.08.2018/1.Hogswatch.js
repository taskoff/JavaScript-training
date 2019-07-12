function hogswath(arr) {
    let numOfHouses = Number(arr.shift());
    let initialGifts = Number(arr.shift());
    let currentGifts = initialGifts;
    let visitedHouses = 0;
    let counterForAddGifts = 0;
    let sumOfadditionalGifts = 0;


    for (let i = 0; i < arr.length; i++) {
        visitedHouses++;
        let numOfSocks = Number(arr[i]);
        if (currentGifts < numOfSocks) {
            let additionalGifts = Math.floor(initialGifts / visitedHouses) * (numOfHouses - visitedHouses) + (numOfSocks - currentGifts);
            currentGifts += additionalGifts - numOfSocks;
            counterForAddGifts++;
            sumOfadditionalGifts += additionalGifts;
        } else {
            currentGifts -= numOfSocks;
        }
        
    }
    if (sumOfadditionalGifts === 0) {
        console.log(currentGifts);
    } else {
        console.log(counterForAddGifts);
        console.log(sumOfadditionalGifts);
    }

    
}
// hogswath(['4',
//     '20',
//     '12',
//     '10',
//     '3',
//     '9',
//     ])

// hogswath(['5',
//         '10',
//         '4',
//         '5',
//         '3',
//         '4',
//         '5',
//    ])

hogswath(['4',
    '20',
    '12',
    '10',
    '3',
    '9',
    ])