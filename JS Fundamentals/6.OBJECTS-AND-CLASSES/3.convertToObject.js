function solve(string) {
    let person = JSON.parse(string);

    let personArray = Object.entries(person);

    personArray.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`)
    });

    //console.log(personArray);
    

    //for (const key in person) {
       //console.log(`${key}: ${person[key]}`)
    //}

    
    
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')