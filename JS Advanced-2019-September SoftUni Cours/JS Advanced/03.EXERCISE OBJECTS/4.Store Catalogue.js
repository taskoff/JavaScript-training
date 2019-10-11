function storeCatalogue(arr) {
    let itemsArr = arr;
    itemsArr = itemsArr.sort((a, b) => a.localeCompare(b));
    // console.log(itemsArr);
    let result = [];
    
    while (itemsArr.length > 0) {
        let char = itemsArr[0][0];
        let currentArr = itemsArr.filter(e => e.startsWith(char));
        result.push({[char]: currentArr});
        itemsArr.splice(0, currentArr.length);
    }
    // console.log(result);
    result.forEach(e => {
        for (const key in e) {
           console.log(key);
           e[key].forEach(e => {
               let currArr = e.split(' : ');
               let text = currArr.join(': ');
               console.log(`  ${text}`);
           });
        }
    })
    
}
storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']

)