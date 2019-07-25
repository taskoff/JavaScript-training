function concert(data) {
    let bandsTime = {};
    let bandsMembers = {};

    let commandAndInfo = data.shift();
    while (commandAndInfo != 'start of concert') {
        let [command, group, info] = commandAndInfo.split('; ');
        // console.log(command, group, info);
        if (command === 'Add') {
            let members = info.split(', ');
            if (!bandsMembers.hasOwnProperty(group)) {
                bandsMembers[group] = members;
            } else {
                members.forEach(e => {
                    if (!bandsMembers[group].includes(e)) {
                        bandsMembers[group].push(e);
                    }
                })
            }
        } else if (command === 'Play') {
            let time = Number(info);
            if (!bandsTime.hasOwnProperty(group)) {
                bandsTime[group] = time;
            } else {
                bandsTime[group] += time;
            }
        }

        commandAndInfo = data.shift();
    }
    let totalTime = Object.values(bandsTime).reduce((a, b) => a+b);
    console.log(`Total time: ${totalTime}`);
    let sorted = Object.entries(bandsTime).sort((a, b) => b[1] - a[1]);
    sorted.forEach(e => console.log(`${e[0]} -> ${e[1]}`));
    let lastGroup = data.shift();
    console.log(lastGroup);
    bandsMembers[lastGroup].forEach(e => console.log(`=> ${e}`));
    
}
// concert(['Play; The Beatles; 2584',
//     'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
//     'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
//     'Play; Eagles; 1869',
//     'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
//     'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
//     'Play; The Rolling Stones; 4239',
//     'start of concert',
//     'The Rolling Stones',
//     ])
concert(['Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles',
    ])