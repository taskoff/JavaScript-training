function specialNums(num) {
    for (let i = 1; i <= num; i++) {
        i = i.toString();
        let sum = 0;
        for (let j = 0; j < i.length; j++) {
            let digit = Number(i[j]);
            sum += digit;
            
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        
    }
}

specialNums(15)