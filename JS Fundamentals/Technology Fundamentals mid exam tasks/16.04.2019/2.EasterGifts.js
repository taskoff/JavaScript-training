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
            console.log(giftsList.join(' '));
        } else if (command === 'Required') {
            if (index < giftsList.length ) {
                giftsList.splice(index, 0, gift);
                console.log(giftsList.join(' '));
                
            }
        } else if (command === 'JustInCase') {
            giftsList.pop();
            giftsList.push(gift);
            console.log(giftsList.join(' '))
            
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
easterGifts(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
])