function treasureFinder(arr) {
    let keyArr = arr.shift().split(' ').map(e => e = Number(e));
    let text = arr.shift();
    let messages = [];
    
    while (text !== "find") {
        let message = '';
        for (let i = 0; i < text.length; i++) {
            if (i === keyArr.length) {
                text = text.substr(i);
                i = 0; 
            }
            let char = text[i].charCodeAt();
            let newChar = String.fromCharCode(char-keyArr[i]);
            message += newChar;

        }
        messages.push(message);
        text = arr.shift();
    }
    // console.log(messages)
    messages.forEach(e => {
       let startIndexOfCoordinates = e.lastIndexOf('<') +1;
       let endIndexOfCoordinates = e.lastIndexOf('>');
       let coordinates = e.substring(startIndexOfCoordinates, endIndexOfCoordinates);
    //    console.log(coordinates);
       let startIndexOfTreasure = e.indexOf('&') +1;
       let endIndexOfTreasure = e.lastIndexOf('&');
       let treasure = e.substring(startIndexOfTreasure, endIndexOfTreasure);
    //    console.log(treasure);
    console.log(`Found ${treasure} at ${coordinates}`)
    })
}
// treasureFinder(['1 2 1 3',
//     "ikegfp'jpne)bv=41P83X@",
//     "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
//     "find"
//     ])
treasureFinder(["1 4 2 5 3 2 1",
    "Ulgwh\"jt$ozfj!'kqqg(!bx\"A3U237GC",
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"])