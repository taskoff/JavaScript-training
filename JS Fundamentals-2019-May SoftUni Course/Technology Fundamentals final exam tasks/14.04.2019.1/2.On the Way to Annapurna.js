function solve(data) {
    let commandAndInfo = data.shift();
    let storeList = {};

    while (commandAndInfo != 'END') {
        let [command, store, items] = commandAndInfo.split('->');
        // console.log(command, store, items);
        if (items != undefined && items.includes(',')) {
           items = items.split(',');   
        } else {
            items = [items];
        }
        if (command === 'Add') {
            if (!storeList.hasOwnProperty(store)) {
                storeList[store] = items;
            } else {
                let currentArr = storeList[store].concat(items);
                storeList[store] = currentArr;
            }
        } else if (command === 'Remove') {
            if (storeList.hasOwnProperty(store)) {
                delete storeList[store];
            }
        }
        

        commandAndInfo = data.shift();
    }
    // console.log(storeList)
    let sorted = Object.entries(storeList)
                        .sort((a, b) => b[0].localeCompare(a[0]))
                        .sort((a, b) => b[1].length - a[1].length)
    console.log('Stores list:');
    sorted.forEach(e => {
        console.log(`${e[0]}`);
        e[1].forEach(e => console.log(`<<${e}>>`));
    })
}
// solve(['Add->PeakSports->Map,Navigation,Compass',
//     'Add->Paragon->Sunscreen',
//     'Add->Groceries->Dried-fruit,Nuts',
//     'Add->Groceries->Nuts',
//     'Add->Paragon->Tent',
//     'Remove->Paragon',
//     'Add->Pharmacy->Pain-killers',
//     'END',
//     ])
solve(['Add->Peak->Waterproof,Umbrella',
    'Add->Groceries->Water,Juice,Food',
    'Add->Peak->Tent',
    'Add->Peak->Sleeping-Bag',
    'Add->Peak->Jacket',
    'Add->Groceries->Lighter',
    'Remove->Groceries',
    'Remove->Store',
    'END',
    ])