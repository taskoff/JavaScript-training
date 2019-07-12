function presentDelivery(arr) {
    let street = arr.shift().split('@');
    let command = arr.shift();
    let currentJumb = 1;
    let indexOfHouse = 0;

    while (command != 'Merry Xmas!') {
        command = command.split(' ');
        let jump = +command[1];
        currentJumb += jump;
        let counter = 0;
        let giftsForHouse = '';
       
           while (counter != currentJumb) {
               for (let i = 0; i < street.length; i++) {
                   counter++;
                   giftsForHouse = +street[i]
                   indexOfHouse = i;
                   if (counter == currentJumb) {
                       break;
                   }
               }
           }
           
           if (giftsForHouse == 0) {
               console.log(`House ${indexOfHouse} will have a Merry Christmas.`)
           } else {
               street[indexOfHouse] = giftsForHouse - 2;
           }
        command = arr.shift();
    }
    console.log(`Santa's last position was ${indexOfHouse}.`);
    let housesWithoutGifts = street.filter(e => e > 0);
    if (housesWithoutGifts.length == 0) {
        console.log('Mission was successful.')
    } else {
        console.log(`Santa has failed ${housesWithoutGifts.length} houses.`)
    }
    
}
presentDelivery(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Merry Xmas!',
    
    ])