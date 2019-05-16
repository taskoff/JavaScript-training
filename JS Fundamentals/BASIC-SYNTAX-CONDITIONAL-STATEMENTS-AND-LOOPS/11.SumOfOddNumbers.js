function sumOfOddNumbers(n) {
    let sum = 0;
    let counter = 0;
    let currentNum = 1;

    while (counter < n) {
        console.log(currentNum);
        sum += currentNum;
        currentNum += 2;
        counter++;
    }
    
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3)

