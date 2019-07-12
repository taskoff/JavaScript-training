function solve(text, word) {
    let copyText = text.split(' ');
    let counter = 0;
    for (const current of copyText) {
        if (current == word) {
            counter++;
        }
    }
    console.log(counter);
    
}
solve("This is a word and it also is a sentence is",
"is"
)