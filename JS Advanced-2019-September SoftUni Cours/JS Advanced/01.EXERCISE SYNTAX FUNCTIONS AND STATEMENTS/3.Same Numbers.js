function checkSameNum(num) {
    let str = num.toString();
    let isEqual = true;
    
    let char = str[0];
    let sum = Number(char);
    for (let i = 1; i < str.length; i++) {
        if (char !== str[i]) {
            isEqual = false;
        }
        sum += Number(str[i])
    }
    console.log(isEqual);
    console.log(sum);
       
}
checkSameNum(2222222)