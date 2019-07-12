function storeProvision(arr1, arr2) {
    let stockInStore = arr1;
    let orderedStock = arr2;
    let endObj = {};

    for (let i = 0; i < stockInStore.length; i++) {
        
        if (i % 2 === 0 ) {
            let stock = stockInStore[i];
            let qountity = +stockInStore[i+1];
            endObj[stock] = qountity;
        }
    }

    for (let i = 0; i < orderedStock.length; i++) {
        if (i % 2 === 0 ) {
            let stock = orderedStock[i];
            let qountity = +orderedStock[i+1];
           if (endObj.hasOwnProperty(stock)) {
               endObj[stock] += qountity;
           } else {
            endObj[stock] = qountity;
           }
        }   
    }
    for (const key in endObj) {
        console.log(`${key} -> ${endObj[key]}`)
    }
}
storeProvision(                
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
        
      )