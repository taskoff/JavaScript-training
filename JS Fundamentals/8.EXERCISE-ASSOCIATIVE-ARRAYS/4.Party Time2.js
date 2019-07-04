function solve(arr) {
    
    let listOfGuests = {};
    let name = arr.shift();

    while (name !== 'PARTY') {
            if (name[0] === Number(name[0])) {
                listOfGuests[name] = 'VIP';
            } else {
                listOfGuests[name] = 'regular';
            }
        name = arr.shift();
    }
    for (const guest of arr) {
        if (listOfGuests.hasOwnProperty(guest)) {
            listOfGuests[guest] = 'isCome';
        }
    }
    let missedGuests = Object.entries(listOfGuests)
                             .filter(e => e[1] != 'isCome');
    let vipMissedGuests = missedGuests.filter(e => e[1] === 'VIP');
    let regularMissedGuests = missedGuests.filter(e => e[1] === 'regular');

    console.log(vipMissedGuests.length + regularMissedGuests.length);
    vipMissedGuests.forEach(e => console.log(e[0]));
    regularMissedGuests.forEach(e => console.log(e[0]));
}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)
// solve(['m8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'xys2FYzn',
// 'MDzcM9ZK',
// 'PARTY',
// '2FQZT3uC',
// 'dziNz78I',
// 'mdSGyQCJ',
// 'LjcVpmDL',
// 'fPXNHpm1',
// 'HTTbwRmM',
// 'B5yTkMQi',
// '8N0FThqG',
// 'm8rfQBvl',
// 'fc1oZCE0',
// 'UgffRkOn',
// '7ugX7bm0',
// '9CQBGUeJ'
// ]
// )