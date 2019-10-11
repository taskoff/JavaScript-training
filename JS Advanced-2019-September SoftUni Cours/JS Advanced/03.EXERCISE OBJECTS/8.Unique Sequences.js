function uniqueSequences(arr) {
    let newArr = arr.map(e => JSON.parse(e));
    // console.log(newArr);
    let result = [];
    
    for (let currentArr of newArr) {
        let sum = currentArr.reduce((a, b) => a+b, 0);
        let isEqual = result.some(e => e.reduce((a, b) => a+b, 0)===sum);

        if (!isEqual) {
           result.push(currentArr) 
        }
    }
    
    //  console.log(result);
     let sorted = result.sort((a, b) => a.length - b.length);
     sorted.forEach(e=> console.log(`[${e.sort((a,b)=>b-a).join(', ')}]`));
     
}
uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]



)
// if (e.length === currentArr.lenght) {
//     let equalNum = 0;
//     e.forEach(a => {
//         if (currentArr.includes(a)) {
//             equalNum++;
//         }
//     })
//     if (equalNum === currentArr.lenght) {
//         newArr.splice(newArr.indexOf(e),1);
//     }
// }