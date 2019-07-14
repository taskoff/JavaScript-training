function flightShedule(arr) {
    let shedule = arr[0];
    let statuses = arr[1];
    let searchStatus = arr[2];
    let arrShedule = [];

    for (let i = 0; i < shedule.length; i++) {
        let [flightNum, destination] = shedule[i].split(' ');
        let obj = {};
        obj.flightNum = flightNum;
        obj['Destination'] = destination;
        obj.Status = 'Ready to fly';
        arrShedule.push(obj);
    }
    for (let i = 0; i < statuses.length; i++) {
        let numOfFlight = statuses[i].split(' ')[0];
        for (let j = 0; j < arrShedule.length; j++) {
            
            if (arrShedule[j].flightNum === numOfFlight) {
                arrShedule[j].Status = 'Cancelled';
            }
        }
               
    }
    let filtered = arrShedule.filter(e => e.Status === searchStatus[0])
    filtered.forEach(e => {
        delete e.flightNum;
        console.log(e);
    })

}
flightShedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]

)