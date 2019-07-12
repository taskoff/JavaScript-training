function solve(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for (const word of wordsArr) {
       let searchWord = word.replace(word, '*'.repeat(word.length));
    //    let newText = text;
        for (const current of textArr) {
            if (current === searchWord) {
                textArr[textArr.indexOf(searchWord)] = word;
            }
        }
       
    }
    console.log(textArr.join(' '));
    
}
solve('great, learning, new',
'softuni is ***** place for ******** *** programming languages'
)