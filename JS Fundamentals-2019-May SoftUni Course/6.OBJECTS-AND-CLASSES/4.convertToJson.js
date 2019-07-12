function solve(firstName, secondName, hairColor) {
    let person = {
        name: firstName, 
        lastName: secondName, 
        hairColor: hairColor
    }

    let jasonString = JSON.stringify(person);

    console.log(jasonString);
    
}

solve('George',
'Jones',
'Brown'
)