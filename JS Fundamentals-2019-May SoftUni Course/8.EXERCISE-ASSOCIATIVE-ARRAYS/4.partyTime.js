function partyTime(arr) {
    let guests = {};
    guests.vip = [];
    guests.regular = [];

    let indexOfParty = arr.indexOf('PARTY')
    let invited = arr.slice(0, indexOfParty);
    let guestsCome = arr.slice(indexOfParty + 1);

    for (let guest of invited) {
        if (guest[0] == Number(guest[0])) {
            guests.vip.push(guest); 
        } else {
            guests.regular.push(guest);
        }
    }
    //console.log(guests);
    for (let guest of guestsCome) {
        if (guests.vip.includes(guest)) {
            let index = guests.vip.indexOf(guest);
            guests.vip.splice(index, 1);
        } else if (guests.regular.includes(guest)) {
            let index = guests.regular.indexOf(guest);
            guests.regular.splice(index, 1);
        }
    }
    //console.log(guests)
    let guestsArr = guests.vip.concat(guests.regular);
    console.log(guestsArr.length);
    guestsArr.forEach(e => console.log(e));
}
// partyTime(['7IK9Yo0h',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc',
// 'tSzE5t0p',
// 'PARTY',
// '9NoBUajQ',
// 'Ce8vwPmE',
// 'SVQXQCbc'
// ]
// )
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)