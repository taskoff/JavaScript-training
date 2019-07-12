function solve(word, text) {
    let taxtArr = text.split(' ');
    let isNotFound = true;
    for (const currentWord of taxtArr) {
        if (currentWord.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            isNotFound = false;
            break;
        }
    }
    if (isNotFound) {
        console.log(`${word} not found!`);
    }
}
solve('pyton',
'JavaScript is the best programming language'
)

