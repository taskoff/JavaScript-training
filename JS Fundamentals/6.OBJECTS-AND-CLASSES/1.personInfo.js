function personInfo(firstname, lastName, age) {
    let person = {
        firstName: firstname, lastName: lastName, age: age
    }

    let entries = Object.entries(person);


    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`)

    }
   

    
    
}
personInfo("Peter", "Pan", "20")