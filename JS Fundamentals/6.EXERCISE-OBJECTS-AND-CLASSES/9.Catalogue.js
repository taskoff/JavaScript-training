function catalogue(arr) {
    let catalogueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let [product, price] = arr[i].split(' : ');
        let obj = {}
        obj.product = product;
        obj.price = price;
        catalogueArr.push(obj);
    }
    
    let sorted = catalogueArr.sort((a, b) => a.product.localeCompare(b.product));
    catalogueArr = [];
    while (sorted.length > 0) {
        let firstChar = sorted[0].product[0];
        let filtered = sorted.filter(e => e.product[0] === firstChar)
        //console.log(filtered);
        sorted.splice(0, filtered.length);
        catalogueArr.push(filtered)
    }
    for (let i = 0; i < catalogueArr.length; i++) {
      let currentArr = catalogueArr[i];
      console.log(currentArr[0].product[0]);
      currentArr.forEach(e => console.log(`  ${e.product}: ${e.price}`))      
    }
    //console.log(catalogueArr);
    
    
}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
    ])