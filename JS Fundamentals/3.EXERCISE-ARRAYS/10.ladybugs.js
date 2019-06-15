function ladybugs(arr) {
    let numOfCells = Number(arr.shift());
    let bugsIndex = arr.shift().split(' ');
    let mainArr = [];
     for (let i = 0; i < numOfCells; i++) {
        mainArr.push('0');
     }
     for (let i = 0; i < mainArr.length; i++) {
        for (let j = 0; j < bugsIndex.length; j++) {
            if (i === +bugsIndex[j]) {
                mainArr[i] = '1';
            }            
        }         
     }
     //console.log(mainArr)
     for (let i = 0; i < arr.length; i++) {
        let [index, direction, length] = arr[i].split(' ');
        index = Number(index);
        length = Number(length);
        if (direction === 'right' && index >= 0 && index < mainArr.length && length != 0) {
            let destination = index + length;
           
            while (mainArr[index] != '0') {
                if (mainArr[destination] === '0') {
                    mainArr[destination] = '1';
                    mainArr[index] = '0';
                } else {
                    destination += length;
                }
                if (destination > mainArr.length) {
                    mainArr[index] = '0';
                }
            }
        } else if (direction === 'left' && index >= 0 && index < mainArr.length && length != 0) {
        let destination = index - length;
       
        while (mainArr[index] != '0') {
            if (mainArr[destination] === '0') {
                mainArr[destination] = '1';
                mainArr[index] = '0';
            } else {
                destination -= length;
            }
            if (destination < 0) {
                mainArr[index] = '0';
            }
             }
        } 
     }   
     console.log(mainArr.join(' '));
     
}
// ladybugs([ 3, '0 1',
// '0 right 1',
// '2 right 1' ]
// )

// ladybugs([ 3, '1 5',
// '0 right 1',
// '1 right 1',
// '2 left 1']
// )

ladybugs([ 5, '3',
'3 left 0',
'-1 left -2']
)