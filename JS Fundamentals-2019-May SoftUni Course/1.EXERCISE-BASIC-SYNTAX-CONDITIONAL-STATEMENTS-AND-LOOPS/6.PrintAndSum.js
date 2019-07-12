function printAndSum(a, b) {
    let sum = 0;
    let line = '';
    for (let i = a; i <= b; i++) {
        line += `${i} `;
        sum += i;
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)
