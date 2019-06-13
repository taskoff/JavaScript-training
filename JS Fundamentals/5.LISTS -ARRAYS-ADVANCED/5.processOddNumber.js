function processOddNumber(arr) {
   let oddNumber = arr
            .filter((e, i) => i % 2 !== 0)
            .map(e => e*2)
            .reverse()
            .join(' ')


    
   console.log(oddNumber);
}
processOddNumber([10, 15, 20, 25])