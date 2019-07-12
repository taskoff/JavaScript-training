function easterGifts(arr) {
    let giftsList = arr.shift().split(' ');
    let commands = arr.shift();

    while (commands !== 'No Money') {
        let [command, gift, index] = commands.split(' ');
        
        if (command === 'OutOfStock') {
            while (giftsList.includes(gift)) {
                let index = giftsList.indexOf(gift);
                giftsList[index] = 'None';
                //console.log(giftsList)
            }
        } else if (command === 'Required') {
            if (0<=index && index < giftsList.length) {
                giftsList.splice(index, 1, gift);
                //console.log(giftsList)
            }
        } else if (command === 'JustInCase') {
            giftsList.pop()
            giftsList.push(gift);
            //console.log(giftsList)
        }
        

        commands = arr.shift();
    }
    let filtered = giftsList.filter(e => e != 'None');
    console.log(filtered.join(' '))
}
// easterGifts(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
//     'OutOfStock Eggs',
//     'Required Spoon 2',
//     'JustInCase ChocolateEgg',
//     'No Money',
//     ])

easterGifts(['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money',
    ])