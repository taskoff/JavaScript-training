function arrayManipulator(arr, commands) {
    let [command, ...info] = commands.shift().split(' ');
    //console.log(arr);
    while (command !== 'print') {
        if (command == 'add') {
            let index = Number(info[0]);
            let element = Number(info[1]);
            arr.splice(index, 0, element);
        } else if (command === 'addMany') {
            let index = Number(info.shift());
            for (let i = 0; i < info.length; i++) {
                arr.splice(index + i,0,Number(info[i]));                
            }
            //console.log(arr)
        } else if (command === 'contains') {
            let element = Number(info[0])
            if (arr.includes(element)) {
                console.log(arr.indexOf(element))
            } else {
                console.log('-1');
            }
        } else if (command === 'remove') {
            let index = Number(info[0]);
            arr.splice(index, 1);
            //console.log(arr);
        } else if (command === 'shift') {
            let index = Number(info[0]);
            for (let i = 0; i < index ; i++) {
                let digit = arr.shift();
                arr.push(digit)                
            }
           // console.log(arr);
        } else if (command === 'sumPairs') {
            let newArr = arr.slice();
            arr = []; 
            while (newArr.length > 0) {
               let firstDigit = newArr.shift();
               let secondDigit = 0
               if (newArr.length >= 1) {
                secondDigit = newArr.shift(); 
               }
              
               
                arr.push(firstDigit + secondDigit);
            }
            //console.log(arr);
        }
        
        [command, ...info] = commands.shift().split(' '); 
    }
    console.log(arr);
    
    
}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    
    )