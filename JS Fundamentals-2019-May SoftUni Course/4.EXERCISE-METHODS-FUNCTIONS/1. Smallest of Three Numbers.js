function smallestOfThreeNumbers(numOne, numTwo, numThree) {
    let arr = [numOne, numTwo, numThree];
    let sortedArr = arr.sort((a, b) => a-b);
    return sortedArr[0];
}
console.log(smallestOfThreeNumbers(5, 11, 26 ));
