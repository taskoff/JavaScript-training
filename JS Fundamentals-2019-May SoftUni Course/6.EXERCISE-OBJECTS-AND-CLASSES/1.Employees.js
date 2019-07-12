function employees(arr) {
    let persons = [];
    for (let i = 0; i < arr.length; i++) {
        let person =  arr[i];
        let obj = {};
        obj.name = person;
        obj.ID = person.length; 
        persons.push(obj);
       
    }
    persons.forEach(e => console.log(`Name: ${e.name} -- Personal Number: ${e.ID}`))
   
    // console.log(persons);
    
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )