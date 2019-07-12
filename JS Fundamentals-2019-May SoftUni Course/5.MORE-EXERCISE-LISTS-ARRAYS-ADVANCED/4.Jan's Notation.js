function jansNotation(arr) {
    let arrOfNum = []
    let isBreack = true;
   for (const element of arr) {
       if (typeof element === 'number') {
           arrOfNum.push(element);
       } else if (typeof element === 'string') {
            if (arrOfNum.length > 1) {
                if (element === '+') {
                        sum(arrOfNum)
                } else if (element === '-') {
                    subtract(arrOfNum);
                } else if (element === '*') {
                    multiplay(arrOfNum)
                } else if (element === '/') {
                    divide(arrOfNum)
                }
            } else {
                console.log('Error: not enough operands!');
                isBreack = false;
            }
       }
   }
   function sum(arr) {
       
       let newArr = arr.splice(arr.length - 2, 2);
       let sum = newArr.reduce((a, b) => a+b);
       arr.push(sum);
   }
   function subtract(arr) {
    let newArr = arr.splice(arr.length - 2, 2);
    let subtract = newArr.reduce((a, b) => a-b);
    arr.push(subtract);
   }
   function multiplay(arr) {
    let newArr = arr.splice(arr.length - 2, 2);
    let multi = newArr.reduce((a, b) => a*b);
    arr.push(multi);
   }
   function divide(arr) {
    let newArr = arr.splice(arr.length - 2, 2);
    let div = newArr.reduce((a, b) => a/b);
    arr.push(div);
   }
   if (arrOfNum.length > 1) {
       console.log('Error: too many operands!')
   } else if (isBreack) {
    console.log(arrOfNum[0]);
   }
   
   
}
jansNotation([15,
    '/']
   
   )