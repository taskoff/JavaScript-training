function grainsOfSand(arr) {
    let line = arr.shift()
                  .split(' ')
                  .map((e => Number(e)));
    let commands = arr.shift();
    //console.log(line)
    while (commands != 'Mort') {
        let [command, ...nums] = commands.split(' ');
        if (command === 'Add') {
            let num = Number(nums[0]);
            line.push(num);
            //console.log(line)
        } else if (command === 'Remove') {
            let num = Number(nums[0]);
            if (line.includes(num)) {
                let index = line.indexOf(num);
                line.splice(index, 1);
            } else {
                if (0 <= num && num < line.length) {
                    line.splice(num, 1);
                }
            }
            //console.log(line)
        } else if (command === 'Replace') {
            let num = Number(nums[0]);
            let newNum = Number(nums[1]);
            if (line.includes(num)) {
                let index = line.indexOf(num);
                line.splice(index, 1, newNum);
            }
            //console.log(line)
        } else if (command === 'Increase') {
            let num = Number(nums[0]);
            let increaseValue = 0
            for (let i = 0; i < line.length; i++) {
                if (line[i] >= num) {
                    increaseValue = line[i];
                    break;
                }
            }
            if (increaseValue < num) {
                increaseValue = line[line.length - 1];
            } 
            line = line.map(e => e + increaseValue);
            //console.log(line)
        } else if (command === 'Collapse') {
            let num = Number(nums[0]);
            line = line.filter(e => e >= num);
            //console.log(line)
        }
        commands = arr.shift();
        
    }
    console.log(line.join(' '));
    
}
grainsOfSand(['1 4 5 19 13 42 69 24',
    'Add 1',
    'Remove 3',
    'Remove 4',
    'Remove 15',
    'Replace 0 26',
    'Replace 1 26',
    'Mort',
    ])


// grainsOfSand([ '1 2 -1 0 -3 9 8 7 2',
// 'Increase 10',
// 'Increase 90',
// 'Collapse 8',
// 'Mort' ])
