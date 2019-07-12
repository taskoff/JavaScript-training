function cookingFactory(arr) {
    let list = arr.shift();
    let maxSum = -999999999999;
    let maxAvrSum = -99999999999;
    let arrWithMaxArrays = [];
    let listWithMaxSum = [];
    let secondArr = [];
    
    
    while (list != 'Bake It!') {
        list = list.split('#').map(a => +a);
        let sum = list.reduce((a, b) => a + b);
        if (sum == maxSum) {
            arrWithMaxArrays.push(list);
        } else if (sum > maxSum) {
            maxSum = sum;
            listWithMaxSum = list;
        }
       list = arr.shift();
    }
    arrWithMaxArrays.push(listWithMaxSum)
    
    for (let i = 0; i < arrWithMaxArrays.length; i++) {
        let current = arrWithMaxArrays[i];
        let sum = current.reduce((a, b) => a + b);
        let avrSum = sum / current.length;
        if (avrSum == maxAvrSum) {
            secondArr.push(current);
        } else if (avrSum > maxAvrSum) {
            maxAvrSum = avrSum;
            listWithMaxSum = current;
        }
        
    }
    secondArr.push(listWithMaxSum);
    

    let lastArr = secondArr.sort((a, b) => a.lenght - b.lenght);
    lastArr = lastArr[0];

    

    console.log(`Best Batch quality: ${maxSum}`);
    console.log(lastArr.join(' '))
}

cookingFactory(['5#3#2',
    '10#2#-2#1#-1',
    '4#2#1',
    'Bake It!'
    
    ])