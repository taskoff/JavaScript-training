function solve(arr) {
    let searchWords = arr.shift().split(' ');
    let wordsArr = [];

    for (const word of searchWords) {
        let currentWord = new Map();
        currentWord.set('word', word)
        currentWord.set('count', 0);
        wordsArr.push(currentWord);

        for (const newWord of arr) {
            if (newWord === currentWord.get('word')) {
                let num = currentWord.get('count');
                num++;
                currentWord.set('count', num)
            }
        }
    }
    wordsArr.sort((a, b) => b.get('count') - a.get('count'));
    wordsArr.forEach(e => console.log(`${e.get('word')} - ${e.get('count')}`))
    
    

}
solve([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task','sentence', 'sentence'
    ]
    )