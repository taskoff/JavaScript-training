function anonimousDownsite(arr) {
    let numOfSite = Number(arr.shift());
    let key = Number(arr.shift());
    let allLoss = 0;

    for (let i = 0; i < numOfSite; i++) {
        let [site, siteVisits, siteCommercialPricePerVisit] = arr[i].split(' ')        ;
        allLoss += parseFloat(Number(siteVisits) * Number(siteCommercialPricePerVisit));
        console.log(site);
        
        
       // console.log(site, siteVisits, siteCommercialPricePerVisit);
        
    }
    console.log(`Total Loss: ${parseInt(allLoss)}`);
    console.log(`Security Token: ${key**numOfSite}`)
}
// anonimousDownsite([3,
//     8,
//     'www.google.com 122300 94.23233',
//     'www.abv.bg 2333 11',
//     'www.kefche.com 12322 23.3222',
//     ])

anonimousDownsite([1,
    1,
    'www.facebook.com 100000 10.45'
    ])