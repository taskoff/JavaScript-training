function schoolGrades(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let [name, ...grades] = arr[i].split(' ');
        grades = grades.map(e => e = +e);

       if (obj.hasOwnProperty(name)) {
           obj[name] = obj[name].concat(grades)
       } else {
           obj[name] = grades;
       }
        
               
    }
    let sorted = Object.entries(obj)
    sorted.sort((a, b) => average(a[1], b[1]));

    function average(a, b) {
        let averigeSumA = a.reduce((a, b) => a + b) / a.length;
        let averigeSumB = b.reduce((a, b) => a + b) / b.length;
        return averigeSumA - averigeSumB
    }
    
    sorted.forEach(e => console.log(`${e[0]}: ${e[1].join(', ')}`))
    //console.log(sorted);
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)