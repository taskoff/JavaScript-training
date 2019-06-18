function pokemonDontGo(arr) {
    let line = arr.shift().split(' ').map(e => Number(e));
    let sum = 0;
    let currentNum = 0;

    while (line.length > 0) {
        
        let index = Number(arr.shift());
        if (index >= 0 && index < line.length) {
            currentNum = Number(line.splice(index, 1));
            sum += currentNum;
            let newLine = []; 
            line.forEach(e => {
                if (e <= currentNum) {
                newLine.push(e + currentNum);
                } else {
                    newLine.push(e - currentNum);
                }
            });
            line = newLine;
            //console.log(line);
        } else if (index < 0) {
            currentNum = line.splice(0, 1);
            currentNum = Number(currentNum);
            sum += currentNum;
            let lastNum = line.pop();
            line.unshift(lastNum);
            line.push(lastNum);
            let newLine = []; 
            line.forEach(e => {
                if (e <= currentNum) {
                newLine.push(e + currentNum);
                } else {
                    newLine.push(e - currentNum);
                }
            });
            line = newLine;
            console.log(line);
        } else if (index >= line.length) {
            currentNum = line.pop();
            sum += currentNum;
            let firstNum = line.shift();
            line.push(firstNum);
            line.unshift(firstNum);
            let newLine = []; 
            line.forEach(e => {
                if (e <= currentNum) {
                newLine.push(e + currentNum);
                } else {
                    newLine.push(e - currentNum);
                }
            });
            line = newLine;
            //console.log(line);
        }
    }
    
    console.log(sum);
}

pokemonDontGo(['5 10 6 3 5',
    2,
    4,
    1,
    1,
    -3,
    0,
    0
    
    ])

// pokemonDontGo(['4 5 3',
//     1,
//     1,
//     0
//     ])

// pokemonDontGo(['2 2 2',
//     -3])