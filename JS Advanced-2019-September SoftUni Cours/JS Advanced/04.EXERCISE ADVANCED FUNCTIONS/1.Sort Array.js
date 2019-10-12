function sortArray(arrr, command) {
   
    let commands = {
        asc : arr => arr.sort((a, b) => a-b),
        desc: arr => arr.sort((a, b) => b-a)
    }
     return commands[command](arrr);
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))


