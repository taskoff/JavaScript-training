function solve(arr) {
    let delimeter = arr.pop();
    let newArr = [];

    arr.forEach(e => {
        newArr.push(e);
        if (arr.indexOf(e) != arr.length - 1) {
            newArr.push(delimeter)
        }
    })
    console.log(newArr.join(''));
    
}
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_']

)