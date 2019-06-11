function memoryView(arr) {
    let line = arr.shift();
    let bigLine = [];

    while (line !== 'Visual Studio crash') {
       line = line.split(' ').map(e => Number(e));
       bigLine = bigLine.concat(line);
       line = arr.shift();
    }
    let filtered = bigLine.filter(e => e > 0);
    let filteredTwo = filtered.filter(e => e < 127); 
    //console.log(filteredTwo);
    
    while (filteredTwo.length > 0) {
        let num = filteredTwo.shift();
        let arrOFName = filteredTwo.splice(0, num);
        let name = [];
        //console.log(arrOFName);
        for (let j = 0; j < arrOFName.length; j++) {
            name.push(String.fromCharCode(arrOFName[j]));            
        }
        console.log(name.join(''));
        
    }
    
    
    
      
}
memoryView(['0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0',
    '5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0',
    '75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101',
    '114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
    'Visual Studio crash'
    
    ])