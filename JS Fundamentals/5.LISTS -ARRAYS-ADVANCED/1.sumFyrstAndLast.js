function solve(arr) {
    let firstNum = Number(arr.shift());
    let secondNum = Number(arr.pop());

    let sum = firstNum + secondNum;
    console.log(sum);

}
solve(['5', '10'])