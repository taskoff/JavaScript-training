function solve(arr) {
    let num = arr.pop();
    for (let i = 0; i < arr.length; i++) {
        if (i == 0 || i % num === 0) {
            console.log(arr[i]);
            
        }        
    }
}
solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']



)