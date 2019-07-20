function barIncome(data) {
    let info = data.shift();
    let totalSum = 0;

    while (info != 'end of shift') {
        let patternName = /%(?<name>[A-Z][a-z]+)%/;
        let client = patternName.exec(info);
        
        let patternProduct = /<(?<product>\w+)>/;
        let currentProduct = patternProduct.exec(info);
       
        let patternCount = /\|(?<count>\d+)\|/;
        let quantity = patternCount.exec(info);
       
        let patternPrice = /(?<price>[0-9.]+)\$/;
        let currentPrice = patternPrice.exec(info);
        
        if (client != null && currentProduct != null && currentPrice != null && quantity != null) {
        let productPrice = Number(quantity.groups.count)*Number(currentPrice.groups.price);
            console.log(`${client.groups.name}: ${currentProduct.groups.product} - ${productPrice.toFixed(2)}`);
            totalSum += productPrice;
        }
        info = data.shift();
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`)
}
barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift',
    ])

// barIncome(['%InvalidName%<Croissant>|2|10.3$',
//     '%Peter%<Gum>1.3$',
//     '%Maria%<Cola>|1|2.4',
//     '%Valid%<Valid>valid|10|valid20$',
//     'end of shift',
//     ])
