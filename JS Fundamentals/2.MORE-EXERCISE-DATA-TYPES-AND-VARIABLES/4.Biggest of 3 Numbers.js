function biggestNumber(first, second, last) {
    let list = [first, second, last];
    list = list.sort((a, b) => a-b);
    let biggest = list.pop();

    console.log(biggest);
    
}
biggestNumber(43,
    43.2,
    43.1
    )