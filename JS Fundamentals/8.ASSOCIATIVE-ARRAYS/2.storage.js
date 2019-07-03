function storage(arr) {
    let map = new Map ();

    for (const element of arr) {
        let [stock, quantity] = element.split(' ')
        quantity = +quantity;
        if (map.has(stock)) {
            map.set(stock, map.get(stock) + quantity)
        } else {
            map.set(stock, quantity)
        }
        
    }
    for (let element of map) {
        console.log(`${element[0]} -> ${element[1]}`);
        
    }
        
    
    
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)