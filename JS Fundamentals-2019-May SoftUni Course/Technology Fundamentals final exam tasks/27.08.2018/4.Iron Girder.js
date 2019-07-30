function ironGirder(data) {
    let info = data.shift();
    let townList= {};
    while (info!= 'Slide rule') {
        let [town, ...timeAndPassengers] = info.split(':');
        let [time, passengers] = timeAndPassengers[0].split('->');
        // console.log(town, time, passengers);
        passengers = Number(passengers);
        if (time != 'ambush') {
            time = Number(time);
            if (!townList.hasOwnProperty(town)) {
                townList[town] = {'time': time, 'passengers': passengers}
            } else {
                if (townList[town].time > time || townList[town].time === 0) {
                    townList[town].time = time;
                }
                townList[town].passengers += passengers;
            }
        } else if (time = 'ambush') {
            if (townList.hasOwnProperty(town)) {
                townList[town].time = 0;
                townList[town].passengers -= passengers;
            }
        }

        
        info = data.shift();
    }
    // console.log(townList)
    let sorted = Object.entries(townList).sort((a, b) => a[0].localeCompare(b[0]))
                                         .sort((a, b) => a[1].time - b[1].time);
    sorted.forEach(e => {
        if (e[1].time > 0 && e[1].passengers > 0 ) {
        console.log(`${e[0]} -> Time: ${e[1].time} -> Passengers: ${e[1].passengers}`)  
    }
    });
}
// ironGirder(['Quirm:12->258',
//     'Ankh-Morpork:ambush->200',
//     'Ankh-Morpork:3->143',
//     'Sto-Lat:4->80',
//     'Ankh-Morpork:4->143',
//     'Ankh-Morpork:ambush->143',
//     'Sto-Lat:3->20',
//     'Ankh-Morpork:5->17',
//     'Slide rule',
//     ])
ironGirder(['Sto-Lat:8->120',
    'Ankh-Morpork:3->143',
    'Sto-Lat:9->80',
    'Ankh-Morpork:4->143',
    'Sto-Lat:0->20',
    'Quirm:12->40',
    'Quirm:13->-120',
    'Slide rule',
    ])