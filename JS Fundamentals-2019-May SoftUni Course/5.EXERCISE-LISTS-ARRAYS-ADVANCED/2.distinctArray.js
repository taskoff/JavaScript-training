function distinctArray(arr) {
    let newArr = [];
    
    for (let i = arr.length -1; i >= 0; i-- ) {
        let digit = Number(arr.pop());

        if (arr.includes(digit)) {
           
        } else {
            newArr.push(digit);
        }
        
    }

   
    console.log(newArr.reverse().join(' '));
  
}
distinctArray([1, 2, 3, 4])