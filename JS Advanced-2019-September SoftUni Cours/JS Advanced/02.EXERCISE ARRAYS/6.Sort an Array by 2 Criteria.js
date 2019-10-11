function solve(arr) {
    let sortedArr = arr.sort((a, b) => a.localeCompare(b))
                        .sort((a, b) => a.length - b.length);
    sortedArr.forEach(e => console.log(e));
}
solve(	['Isac', 
'Theodor', 
'Jack', 
'Harrison', 
'George']


)