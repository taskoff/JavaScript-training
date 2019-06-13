function solve(n, k) {
    let newArr = [1];

    for (let i = 1; i < n; i++) {
        let index = Math.max(i - k, 0);
        let currentArr = newArr.slice(index);

        
       let sum = currentArr.reduce((a, b) => a+b);

        newArr.push(sum);
    }
    console.log(newArr.join(' '));

    
}
solve(6, 3)