function santasNewList(data) {
    let info = data.shift();
    let children = {};
    let gifts = {};

    while (info != 'END') {
        let [name, gift, amount] = info.split('->');
        amount = Number(amount);
        if (name != 'Remove') {
            if (!children.hasOwnProperty(name)) {
                children[name] = amount;
            } else {
                children[name] += amount;
            }
            if (!gifts.hasOwnProperty(gift)) {
                gifts[gift] = amount;
            } else {
                gifts[gift] += amount;
            }
        } else {
            delete children[gift];
        }
           

        info = data.shift();
    }
    // console.log(children);
    // console.log(gifts)
    let sortedCildren = Object.entries(children)
                              .sort((a, b) => a[0].localeCompare(b[0]))
                              .sort((a, b) => b[1] - a[1]);
    console.log('Children:');
    sortedCildren.forEach(e => console.log(`${e[0]} -> ${e[1]}`));
    console.log('Presents:');
    for (const key in gifts) {
       console.log(`${key} -> ${gifts[key]}`);
    }
}
// santasNewList(['Marty->Toys->5',
//     'Sam->Candy->20',
//     'Leo->Candy->10',
//     'Leo->Toys->1',
//     'Katy->Clothes->4',
//     'Bobbie->Clothes->6',
//     'Tanya->Phone->1',
//     'Nasko->Tablet->3',
//     'END',
//     ])
santasNewList(['Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END',
    ])