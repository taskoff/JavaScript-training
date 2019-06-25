function makeADictionary(arr) {
    let dictionary = [];
    
    for (let i = 0; i < arr.length; i++) {
        let isThere = false;
        let currentObj = JSON.parse(arr[i]);
        let word = Object.keys(currentObj)[0];
        let values = Object.values(currentObj).join(' ');
        dictionary.forEach(e => {
            if (e.hasOwnProperty(word)) {
                e[word] = values;
                isThere = true;
            }
        })
        if (isThere === false) {
            dictionary.push(currentObj);
        }
        
                
    }
    let arrDict = dictionary.map(e => Object.entries(e)[0]);
    let sorted = arrDict.sort((a, b) => a[0].localeCompare(b[0]))
    sorted.forEach(e => console.log(`Term: ${e[0]} => Definition: ${e[1]}`));
    
    // console.log(sorted);
   
   
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Boiler":"apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )