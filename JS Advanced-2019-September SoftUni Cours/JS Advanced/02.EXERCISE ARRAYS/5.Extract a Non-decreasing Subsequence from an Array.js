function solve(arr) {
   let maxNum = -999999999999999999999;
   let newArr = [];

   for (let num of arr) {
       if (num >= maxNum) {
           maxNum = num;
           newArr.push(num);
       }
   }
   newArr.forEach(e => console.log(e));
   
}
solve([1, 
    2,
    2, 
    3,
    4]
    
    
    )