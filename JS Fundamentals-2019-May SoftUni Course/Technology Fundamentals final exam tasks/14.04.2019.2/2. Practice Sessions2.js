function practiceSessions(data) {
    let roadsList = {}; 
   
    let commandAndInfo = data.shift();
    while (commandAndInfo != 'END') {
        let [command, road, racer, nextRoad] = commandAndInfo.split('->');

        if (command === 'Add') {
            if (!roadsList.hasOwnProperty(road)) {
                roadsList[road] = [racer];
                
            } else {
                // if ( !roadsList[road].includes(racer)) {
                //     roadsList[road].push(racer);
                // }
                roadsList[road].push(racer);
            }
        } else if (command === 'Move') {
            if (roadsList[road].includes(racer)) {
                let index = roadsList[road].indexOf(racer);
                roadsList[road].splice(index, 1);
                roadsList[nextRoad].push(racer);
            }
        } else if (command === 'Close') {
            if (roadsList.hasOwnProperty(road)) {
                delete roadsList[road];
            }
        }
        commandAndInfo = data.shift();
    }
   
    //   console.log(roadsList)
      let sorted = Object.entries(roadsList)
                         .sort((a, b) => {
                             if (a[1].length > b[1].length) {
                                 return b[1].length - a[1].length
                             } else if (a[1].length === b[1].length) {
                                 return a[0].localeCompare(b[0]);
                             }
                             return b[1].length - a[1].length
                         });
      console.log('Practice sessions:');
      sorted.forEach(e => {
          console.log(`${e[0]}`);
          e[1].forEach(e => console.log(`++${e}`));
      })
}
// practiceSessions(['Add->Glencrutchery Road->Giacomo Agostini',
//     'Add->Braddan->Geoff Duke',
//     'Add->Peel road->Mike Hailwood',
//     'Add->Glencrutchery Road->Guy Martin',
//     'Move->Glencrutchery Road->Giacomo Agostini->Peel road',
//     'Close->Braddan',
//     'END',
//     ])

practiceSessions(['Add->Glen Vine->Steve Hislop',
    'Add->Ramsey road->John McGuinness', 
    'Add->Glen Vine->Ian Hutchinson',
    'Add->Ramsey road->Dave Molyneux',
    'Move->Ramsey road->Hugh Earnsson->Glen Vine',
    'Add->A18 Snaefell mountain road->Mike Hailwood',
    'Add->Braddan->Geoff Duke',
    'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
    'Move->Braddan->John McGuinness->Glen Vine',
    'Close->A18 Snaefell mountain road',
    'END',
    ])