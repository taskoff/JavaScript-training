function solve(word, text) {
    let secondText = text;

    while (secondText.includes(word)) {
        
        secondText = text.replace(word, '');
        text = secondText;
    }
    console.log(text);
}
solve('ice',
    'kicegiciceeb'
    )