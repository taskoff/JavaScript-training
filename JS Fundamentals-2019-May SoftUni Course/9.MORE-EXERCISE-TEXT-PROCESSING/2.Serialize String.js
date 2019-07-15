function solve(arr) {
    let str = arr[0];
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!obj.hasOwnProperty(char)) {
            obj[char] = [i];
            for (let j = i+1; j < str.length; j++) {
                let currentChar = str[j];
                if (currentChar === char) {
                    obj[char].push(j);
                }                
            }
        }       
    }
    // console.log(obj);
    for (const key in obj) {
        console.log(`${key}:${obj[key].join('/')}`)
    }
    
}
solve(['abababa', '']);