function solve(text, word) {
    let newText = text
    while (newText.includes(word)) {
        newText = text.replace(word, '*'.repeat(word.length));
        text = newText;
    }
    console.log(newText);
    
}
solve("A small sentence with some words small", "small")