function easterShopping(arr) {
    let shopList = arr.shift().split(' ');
    let countOfCommands = Number(arr.shift());
    

    for (let i = 0; i < countOfCommands; i++) {
        let commandAndIndexes = arr.shift().split(' ');
        let command = commandAndIndexes.shift();  
        
    
    
        if (command === 'Include') {
            let shop = commandAndIndexes[0];
            shopList.push(shop);
        } else if (command === 'Visit') {
            let place = commandAndIndexes[0];
            let numberOfShops = commandAndIndexes[1]
            if (numberOfShops <= shopList.length) {
                if (place === 'first') {
                    shopList.splice(0, numberOfShops)
                } else if (place === 'last') {
                    shopList.splice((shopList.length - 1) - numberOfShops)
                }
            }
        } else if (command === 'Prefer') {
            let indexOne = +commandAndIndexes[0];
            let indexTwo = +commandAndIndexes[1];
            if ((0 <= indexOne && indexOne <= shopList.length - 1) && (0 <= indexTwo && indexTwo <= shopList.length - 1) ) {
                let shop = shopList[indexOne];
                shopList[indexOne] = shopList[indexTwo];
                shopList[indexTwo] = shop;
                
            }
        } else if (command === 'Place') {
            let shop = commandAndIndexes[0];
            let index = +commandAndIndexes[1];
            if (0 <= (index + 1) < shopList.length) {
                shopList.splice(index +1, 0, shop);
                
            }
        }
    }
    console.log(`Shops left: ${shopList.join(' ')}`);
    
}
easterShopping(['Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    5,
    'Include HM',
    'Visit first 2',
    'Visit last ',
    'Prefer 3 1',
    'Place Library 2'

    ])