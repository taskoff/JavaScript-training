function solve(arr) {
    let persons = new Map();
    for (let i = 0; i < arr.length; i++) {
        let [name, firstCards] = arr[i].split(': ');
        secondCards = firstCards.split(', ');
        cards = [];
        secondCards.forEach(e => {
            if(!cards.includes(e)) {
                cards.push(e);
            }
        })
        if (!persons.has(name)) {
            persons.set(name, cards);
        } else {
            for (let j = 0; j < cards.length; j++) {
                let currenCard = cards[j];
                let personArr = persons.get(name);
                
                if (!personArr.includes(currenCard)) {
                    personArr.push(currenCard);
                    persons.set(name, personArr);
                }                
            }
        }
                
    }
    let personsArr = [...persons.entries()];
    let lastArrOfPerson = [];
    for (let i = 0; i < personsArr.length; i++) {
        let name = personsArr[i][0];
        let cardsArr = personsArr[i][1];
        let personsObj = {};
        let sum = 0;
        for (let j = 0; j < cardsArr.length; j++) {
            let card = cardsArr[j];
            let power = '';
            let type = '';
            if (card.length > 2) {
                let [firstDigit,secondDigit, currentType] = cardsArr[j].split('');
                type = currentType;
                power = `${firstDigit}${secondDigit}`;
            } else {
                [power, type] = cardsArr[j].split('');
            }
            
            if (power === '1') {
                power = 1;
            } else if (power === '2') {
                power = 2
            } else if (power === '3') {
                power = 3
            }else if (power === '4') {
                power = 4
            }else if (power === '5') {
                power = 5
            }else if (power === '6') {
                power = 6
            }else if (power === '7') {
                power = 7
            }else if (power === '8') {
                power = 8
            }else if (power === '9') {
                power = 9
            }else if (power === '10') {
                power = 10
            }else if (power === 'J') {
                power = 11
            }else if (power === 'Q') {
                power = 12
            }else if (power === 'K') {
                power = 13
            }else if (power === 'A') {
                power = 14
            }
            if (type === 'C') {
                type = 1;
            } else if (type === 'D') {
                type = 2
            } else if (type === 'H') {
                type = 3
            }else if (type === 'S') {
                type = 4
            }
            sum += power * type
        } 
        personsObj.name = name;
        personsObj.sum = sum;
        lastArrOfPerson.push(personsObj);
    }
    lastArrOfPerson.forEach(e => console.log(`${e.name}: ${e.sum}`));
    
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )
// solve([
    
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
//     ]
//     )