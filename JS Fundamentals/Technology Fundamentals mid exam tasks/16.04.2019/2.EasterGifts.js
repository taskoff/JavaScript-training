function easterGifts(data) {
    let giftsList = data.shift().split(' ');
    let commandAndGiftAndIndex = data.shift();

    while (commandAndGiftAndIndex !== 'No Money') {
        let [command, gift, index] = commandAndGiftAndIndex.split(' ')
        if (command === 'OutOfStock') {
            gift
            while (giftsList.includes(gift)) {
                let index = giftsList.indexOf(gift);
                giftsList[index] = 'None';
                
            }
        } else if (command === 'Required') {
            if (index < giftsList.length ) {
                giftsList.splice(index, 1, gift);
            }
        } else if (command === 'JustInCase') {
            giftsList.pop();
            giftsList.push(gift);
        } 
        commandAndGiftAndIndex = data.shift();
    }
    let line = [];
    giftsList.forEach(e => { 
        if (e !== 'None') {
        line.push(e)
    }
    });
    console.log(line.join(' '))

}
easterGifts(['Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock ',
    'No Money',
    
])