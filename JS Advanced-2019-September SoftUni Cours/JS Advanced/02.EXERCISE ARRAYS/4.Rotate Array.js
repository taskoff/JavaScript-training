function solve(arr) {
    
        
        let num = Number(arr.pop());
        num = num % arr.length;

        for (let i = 0; i < num; i++) {
            let current = arr.pop();
            arr.unshift(current);
            
        }
   
    console.log(arr.join(' '));
    
}
solve([1, 2, 3, 4, 2
]

)