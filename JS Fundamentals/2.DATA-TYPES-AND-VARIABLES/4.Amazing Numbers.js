function amazingNumber(num) {
    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let digit = Number(num[i]);
        sum += digit;    
    }
    sum = sum.toString();
    if (sum.includes(9)) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumber(1233)