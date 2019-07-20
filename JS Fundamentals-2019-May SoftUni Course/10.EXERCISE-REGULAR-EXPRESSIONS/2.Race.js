function race(arr) {
    let listOfPlayers = arr.shift().split(', ');
    let info = arr.shift();
    let playersObj = {};
    
    while (info != 'end of race') {
        let patternName = /[A-Za-z]/g;
        let name = info.match(patternName).join('');
        let patternScore = /[0-9]/g;
        let score = info.match(patternScore)
                        .map(e => e=Number(e))
                        .reduce((a, b) => a+b);
        // console.log(score);
        if (listOfPlayers.includes(name)) {
            if (!playersObj.hasOwnProperty(name)) {
                playersObj[name] = score;
            } else {
                playersObj[name] += score;
            }
        }
        info = arr.shift();
    }
    let sorted = Object.entries(playersObj)
                        .sort((a, b) => b[1] - a[1])
                        .splice(0, 3);
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race',
    ])