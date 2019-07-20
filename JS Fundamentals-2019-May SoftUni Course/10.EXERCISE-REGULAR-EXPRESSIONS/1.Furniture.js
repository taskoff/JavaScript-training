function furniture(arr) {
    let current = arr.shift();
    let furnitureArr = [];
    let sum = 0
    while (current != 'Purchase') {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>[0-9]+)/;
        let result = pattern.exec(current);
        // console.log(result);
        if (result != null) {
            furnitureArr.push(result.groups.name);
            sum += result.groups.price * result.groups.quantity;
        }
        
        current = arr.shift();
    }
    console.log('Bought furniture:')
    furnitureArr.forEach(e => console.log(e));
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture(['>>Sofa<<312!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
    ])