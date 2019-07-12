function calculator(num1, operator, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    let string = num1 + operator + num2;
    let sum = eval(string);
    sum = parseFloat(sum);
    console.log(sum.toFixed(2));

}
calculator(5, '+', 5)